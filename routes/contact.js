const express = require("express");
const router = express.Router();
const path=require("path");
const contactController=require("../contollers/contact");



router.get("/contact",contactController.getContact);

router.post("/contact",contactController.postContact )

module.exports = router;
