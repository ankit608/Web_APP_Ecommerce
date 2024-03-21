const express = require("express")

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser")
const Error = require("./utils/errorHandlers")
const cors  = require("cors")
const ErrorHandler1 = require("./middleware/error")




const app = express()
//app.use(ErrorHandler1)
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true,

}))
// imports Routes,
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use("/",express.static("uploads"))

const user = require("./controller/user")

app.use("/api/v2/user",user)


//config

if(process.env.Node_ENV !== "PRODUCTION"){
  
    require("dotenv").config({
        path: "/config/.env"
    }) 
}







module.exports = app