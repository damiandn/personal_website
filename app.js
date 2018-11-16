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

app.get("/cv", function(req, res){
    res.render("cv");
});


app.get("/interests", function(req, res){
    res.render("interests");
});


app.get("/publications", function(req, res){
    res.render("publications");
});


app.get("/resources/sequences", function(req, res) {
   res.render("resources/sequences");
    
});

app.get("/resources/tools", function(req, res) {
   res.render("resources/tools");
    
});

app.get("/microscopy", function(req, res) {
   res.render("microscopy");
    
});

app.listen(process.env.PORT, process.env.IP, function() {
   console.log("Server Started!");
});


 

