var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));   


var serveStatic = require('serve-static')

app.use(express.static(__dirname + '/views'))


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


app.get('/media/vid.mp4', function (req, res, next) {
    res.sendFile(path.join(__dirname, 'media', 'vid.mp4'));
});

app.get('/media/test.png', function (req, res, next) {
    res.sendFile(path.join(__dirname, 'media', 'test.png'));
});


app.listen(process.env.PORT, process.env.IP, function() {
   console.log("Server Started!");
});




 

