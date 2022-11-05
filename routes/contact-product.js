const express = require("express");
const path=require("path");
 const router=express.Router();

router.post("contact-product/",(req, res, next) => {
    // res.send('<h1>Hello  of Express</h1>')
    res.sendFile(path.join(__dirname,'../','views','shop.html'));
    
 })
