//  const http = require("http");
const path=require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();


const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const contact= require("./routes/contact");


app.use(bodyParser.urlencoded({
   extended: false
}));



app.use("/admin",adminRoutes);
app.use("/admin",contact);

app.use(shopRoutes);

app.get("/contact",(req,res,next)=>{
   res.send('<h1>"CONTACTS"</h1>')
})

app.use((req,res,next)=>{
   res.status(404).sendFile(path.join(__dirname,"views","404.html"));

   // res.status(404).send('<h1> 404 Page is Not Found</h1>')
})
app.listen(3000);