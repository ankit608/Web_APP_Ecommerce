const ErrorHandler = require("../utils/errorHandlers")
 module.exports = (err,request,response,next) =>{
  console.log("inside the function..")
  err.statusCode = err.statusCode|| 500
    err.message = err.message || "Internal server Error"
    if(err.name=== "CasteError"){
        const message = `Resourcesnoot foubd eith this id..Invalid ${err.path}`;
        err= new ErrorHandler(message,400)
    }
    // duplicate key error
    if(err.code===11000){
        const message = `Duplicate key ${ Object.keys(err.keyValue)}Entered`;
        err = new ErrorHandler(message,400)
    }


    if(err.name==="jsonWebTokenError"){
        const message = `your url is invalid please try again latter`
        err= new ErrorHandler(message,400)
    }

    if(err.name==="TokenExpiredError"){
        const message=`your url is expired please try again letter`;
        err= new ErrorHandler(message,400)
    }

    response.status(err.statusCode).json({
        success: false,
        message:err.message
    })
}



