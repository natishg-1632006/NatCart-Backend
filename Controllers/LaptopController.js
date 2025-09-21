const LaptopData=require("../Models/LaptopModel");
const getLaptopProducts=async (req,res,next)=>{
    const laptopProductData=await LaptopData.find({});
    res.json({
        success:true,
        laptopProductData
    });
}

const getoneLaptopProducts=async (req,res,next)=>{
    const laptopProductDetails=await LaptopData.findById(req.params.id);
    console.log(laptopProductDetails);
    
    res.json({
        success:true,
        laptopProductDetails
    })
}

module.exports={getLaptopProducts,getoneLaptopProducts};