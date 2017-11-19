var express = require("express");


var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));   


//ROUTES

app.get("/", function(req, res){
    res.render("index");
});

app.get("/bio", function(req, res){
    res.render("bio");
});


app.get("/publications", function(req, res){
    res.render("publications");
});


app.listen(process.env.PORT, process.env.IP, function() {
   console.log("Server Started!");
});


 

