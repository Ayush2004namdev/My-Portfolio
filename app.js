const express = require("express");
const ejs = require('ejs');
const path = require("path");
const app = express();


app.set('view engine' , 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/' , (req , res) => {
    res.render('home');
})

app.listen(3000 ,() => {
    console.log("listning on port 3000!")
})