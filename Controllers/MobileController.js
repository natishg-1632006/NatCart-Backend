const  getMobileProduct=(req,res,next)=>{
    res.send("All mobile data are sended succefully");
}

const getOneMobileProduct=(req,res,next)=>{
    res.send("One mobile data are sended succefully");
}

module.exports={getMobileProduct,getOneMobileProduct};