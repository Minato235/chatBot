const express=require("express");
const router=express.Router();

router.get("/x",(req,res,next)=>{
res.send('<h1>Hello From X</h1>')
})
module.exports=router;