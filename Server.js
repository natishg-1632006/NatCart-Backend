const express=require("express");
const app=express();
const path=require("path");
const dotenv=require("dotenv");
dotenv.config({path: path.join(__dirname,"/Config","Config.env")});
app.listen(process.env.PORT,()=>{
    console.log(`Server Connected to port:${process.env.PORT} Successfully in ${process.env.NODE_ENV}`);
});