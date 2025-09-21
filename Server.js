const express=require("express");
const app=express();

const connectDataBase=require("./Config/ConnectDataBase")

const cors = require('cors'); 
const path=require("path");
app.use(cors());

const dotenv=require("dotenv");
dotenv.config({path: path.join(__dirname,"/Config","Config.env")});

const LaptopProduct=require("./Routes/LaptopRoute")
const MobileProduct=require("./Routes/MobileRoute")

connectDataBase();

app.use("",LaptopProduct);
app.use("",MobileProduct)

app.listen(process.env.PORT,()=>{
    console.log(`Server Connected to port:${process.env.PORT} Successfully in ${process.env.NODE_ENV}`);
});