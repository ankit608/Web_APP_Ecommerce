//create token and saving it in cookies
const jwt = require("jsonwebtoken")
const sendToken = (user,statuscode,res)=>{
    console.log("token_generated..")
    const token =  user.getJwtToken();
       console.log(token,"token");
       const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY)
         const  to = decoded
      console.log(to,"ahkh");
    const options = {
        expires: new Date(Date.now()+ 90*24*60*60*1000),
        httpOnly: true,
    }

    res.status(statuscode).cookie("token",token,options).json({
        success:true,
        user,
        token,
    });

}

 module.exports = sendToken;