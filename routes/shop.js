const express = require("express");
const path=require("path");
 const router=express.Router();
 const productController=require("../contollers/product");


router.get("/",productController.getProducts)

router.post("/",productController.getAddProduct);

 module.exports=router;