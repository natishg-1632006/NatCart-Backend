const mongoose=require("mongoose");

const connectDataBase= async ()=>{
    try{
       await mongoose.connect(process.env.DB_URL);
       console.log("DB connected");
       
    }
    catch(err){
        console.log("ERROR:",err);
        
    }
}

module.exports=connectDataBase;