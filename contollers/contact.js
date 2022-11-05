const path=require("path");


exports.getContact=(req, res, next) => {
    res.sendFile(path.join(__dirname,'../',"views",'contact.html'))
    // res.send(' <form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></input></form>')
  }

  exports.postContact=(req, res, next) => {
    console.log(req.body);
    res.redirect("/contact-product");
  
  }