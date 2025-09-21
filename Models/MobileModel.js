const mongoose=require("mongoose");

const mobileSchema=mongoose.Schema({
    brand: String,
    model: String,
    ram: String,
    storage: String,
    displaySize: String,
    displayResolution: String,
    displayType: String,
    displayRefreshRate: String,
    displayStyle: String,
    battery: String,
    mrp: String,
    offerPrice: String,
    processor: String,
    rating: String,
     image: [
            {
                image:String
            }
        ],
    stock:String,
    createdAt:Date,
    description: String
})

const mobileModel=mongoose.model("MobileModel",mobileSchema);

module.exports=mobileModel