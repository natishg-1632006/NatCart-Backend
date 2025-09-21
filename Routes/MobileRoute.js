const express=require("express");
const { getMobileProduct, getOneMobileProduct } = require("../Controllers/MobileController");
const router=express.Router();

router.route("/Mobiles").get(getMobileProduct);
router.route("/Mobiles/:id").get(getOneMobileProduct);

module.exports=router;