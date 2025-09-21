const mongoose=require("mongoose");

const laptopSchema=new mongoose.Schema({
        name: String,
        brand: String,
        model: String,
        price: String,
        offerPrice: String,
        displaySize: String,
        ram: String,
        storageCapacity: String,
        storageType: String,
        processor: String,
        generation: String,
        category: String,
        image: [
            {
                image:String
            }
        ],
        stock:String,
        createdAt:Date
        
})

const laptopModel=mongoose.model("LaptopData",laptopSchema);

module.exports=laptopModel;