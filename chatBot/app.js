const express = require("express");
var user = "Asish";
const bodyParser = require("body-parser");
const app = express();
var fs = require('fs');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.get("/", (req, res, next) => {
    fs.readFile("text.txt", (err, data) => {
        if (err) {
            console.log(err)
            data = "No chat Exists"
        }
        res.send(`
        ${data}<form action="/" method="POST" onSubmit="document.getElementById('userName').value=localStorage.getItem('userName')">
    <input type="text" name="message" id="message">
    <input type="hidden" name="userName" id="userName">
    <button type="submit">Add Product</button>
    </form>`)
    })


});

app.post("/", (req, res, next) => {

    console.log(req.body.userName);
    console.log(req.body.message);
    fs.writeFile("text.txt", `${req.body.userName}: ${req.body.message}`, {
        flag: 'a'
    }, (err) => {
        err ? console.log(err) : res.redirect("/")
    })

})
app.listen(3000);