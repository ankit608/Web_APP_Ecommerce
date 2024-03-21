const app = require("./app")
const ConnectDatabase = require("./db/Database");
const ErrorHandler = require("./utils/errorHandlers")




//Handling uncaught exception 

process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`)
    console.log("shutting down the server for handling uncaught error exception");
    
})

if(process.env.NODE_ENV !=="PRODUCTION"){
     require("dotenv").config({
        path: "config/.env",
     });
}


 ConnectDatabase();

const server = app.listen(process.env.PORT,()=>{
     console.log('server is running ',process.env.PORT);
})

//unhandled process Rejection
process.on("unhandledRejection",(err) => {
  console.log("shutting down the server",err.message)
    server.close(()=>{
        console.log("server is closed")
    })
})