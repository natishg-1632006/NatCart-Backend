const mobileData=require("../Models/MobileModel");
const  getMobileProduct=async(req,res,next)=>{
    const mobileProductData=await mobileData.find({});
    res.json({
        success:true,
        mobileProductData
    })
}

const getOneMobileProduct=async (req,res,next)=>{
    const mobileProductDetails=await mobileData.findById(req.params.id);
      res.json({
        success:true,
        mobileProductDetails
    })
}

module.exports={getMobileProduct,getOneMobileProduct};