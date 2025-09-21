const express=require("express");
const { getLaptopProducts, getoneLaptopProducts } = require("../Controllers/LaptopController");
const router=express.Router();

router.route("/Laptops").get(getLaptopProducts);
router.route("/Laptops/:id").get(getoneLaptopProducts);

module.exports=router;