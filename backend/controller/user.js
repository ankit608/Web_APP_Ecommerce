const express = require("express")
const path = require("path");
const user1 = require("../model/user")
const ErrorHandler1 = require("../middleware/error")
const cors = require("cors")
const router = express.Router();
const ErrorHandler = require("../utils/errorHandlers")
const catchAsyncErrors = require("../middleware/catchAsyncError")
const jwt = require("jsonwebtoken")
const fs = require("fs")
const sendMail = require("../utils/sendmail")
const sendToken = require("../utils/jwtToken")
const isAuthenticated = require("../middleware/auth")


const upload = require("../multer");
const user = require("../model/user");



router.post("/create-user", (req, res, next) => { console.log(req.body, "nbhsjgjjs"); next() }, upload.single("file"), async (req, res, next) => {
    try {

        const { Name, email, password } = req.body;

        const userEmail = await user1.findOne({ email })
        console.log("userEmail", userEmail);
        if (userEmail) {
            const filename = req.file.filename;
            const filePath = `uploads/${filename}`;
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.log(err, "sdhfks");
                    res.send.json({ message: "user already exist" })
                } else {

                    return next(new ErrorHandler("user already exist", 401));
                }
            })
        } else {
            const filename = req.file.filename;
            const fileUrl = path.join(filename);
            const avatar = fileUrl

            const user = {
                "name": Name,
                "email": email,
                "password": password,
                "avatar": { public_id: 123, url: fileUrl }

            }

            const Activation_Token = createActivationToken(user);
            const activation_URL = `http://localhost:3000/activation/${Activation_Token}`;

            await sendMail({
                email: user.email,
                subject: "Activate your account",
                text: `hello ${user.name}, please click on the link to activate your account:${activation_URL}`,


            })

            res.status(201).json({
                success: true,
                message: 'please check your provided account'
            })
        }
    } catch (error) {
        return next(new ErrorHandler("signuperror", 501))
    }

}, ErrorHandler1)

//create-activation-token

const createActivationToken = (user) => {
    return jwt.sign(user, process.env.JWT_ACTIVATION_TOKEN, {
        expiresIn: "1000m",
    })

}



// activate_user


router.post("/activationq", catchAsyncErrors(async (req, res, next) => {
    try {
        let token = req.body.token

        const newUser = jwt.verify(token, process.env.JWT_ACTIVATION_TOKEN);

        console.log(newUser, "Newuser1")

        if (!newUser) {
            console.log("inside Invalid")
            return next(new ErrorHandler("Invalid token", 400))
        }

        const { name, email, password, avatar } = newUser;
        let user = await user1.findOne({ email: email })

        console.log(user, "suer")
        if (user) {

            return next(new ErrorHandler("user already exist", 400))
        }


        /*const newUser2 =  new user1({name,
             email,
             avatar,
             password,})
 
             console.log(newUser2.getJwtToken(),"tahtys ia");*/
        const newUser1 = await user1.create({
            name,
            email,
            avatar,
            password,
        });


        console.log(newUser1, "newUser");

        sendToken(newUser1, 201, res);
    } catch (error) {
        console.log(error, "gfdsjgf")
        res.status(500)
    }
}))


router.post("/activation", async (req, res, next) => {
    try {
       console.log(req.body);
        const token = req.body.token
        const newuser = jwt.verify(token, process.env.JWT_ACTIVATION_TOKEN)

        if (!newuser) {
            return next(new ErrorHandler("invalid token"));
        }

        const existing_user = await user1.findOne({ email: newuser.email })
        if (existing_user) {
            console.log("already exist")
            return next(new ErrorHandler("user already exist", 400))


        }
        const { name, email, avatar, password } = newuser
        const newUser1 = await user1.create({
            name,
            email,
            avatar,
            password,
        });

        if (newUser1) {
            console.log("user created successfully");
        }
        sendToken(newUser1, 201, res);
    } catch (error) {

        return next(new ErrorHandler("validation error", 401));
    }
}, ErrorHandler1)



router.post("/login-user", async (req, res, next) => {
      

    const { email, password } = req.body;

    if (!email || !password) {
        return next(new ErrorHandler("Please Provide all the fields"))
    }

    const user2 = await user1.findOne({ email }).select("+password");

    if (!user2) {
        return next(new ErrorHandler("user does not exist Please Sign In", 400))
    }

    const isPasswordValid = await user2.comparePassword(password)

    if (!isPasswordValid) {
        return next(new ErrorHandler("Please Provide correct Password", 400))
    }

    sendToken(user2, 201, res);

}, ErrorHandler1)



router.get("/getuser",isAuthenticated,async(req,res,next)=>{
   
    try{
          console.log("entry....")
        const user3 = await user.findById(req.user.id)
         console.log(user3,"user3");
          if(!user3){
              return next(new ErrorHandler("user does not exist",500));
          }
          res.status(200).json({
            success:"true",
            user3,
          })
    }catch(error){
        console.log("helooksfjskl")
        return next(new ErrorHandler(error.message,500))
    }
},ErrorHandler1)


module.exports = router;

 