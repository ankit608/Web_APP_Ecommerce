//create token and saving it in cookies

const sendToken = (user,statuscode,res)=>{
    console.log("token_generated..")
    const token =  user.getJwtToken();
       console.log(token,"token");

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