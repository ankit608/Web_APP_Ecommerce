
const  ErrorHandler = require("../utils/errorHandlers");
const ErrorHandler1 = require("./error")

const jwt = require("jsonwebtoken");
const catchAsyncError = require("./catchAsyncError")

const User = require("../model/user");
const router = require("../controller/user");

const isAuthenticated = (req,res,next) =>{

      
     console.log(req.cookies.token)
     
     if(!req.cookies.token){
        console.log("inside the error handler")
        return  next(new ErrorHandler("Please login",505));
     }

     const decoded = jwt.verify(req.cookies.token,process.env.JWT_SECRET_KEY)
       req.user = decoded
      next()
} 

module.exports =  isAuthenticated
   










/*Authenticator(async(req,res,next)=>{
    )

    

 */
