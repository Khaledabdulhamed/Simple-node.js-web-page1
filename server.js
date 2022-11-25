//jshint esversion:8

const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello</h1>");
})

app.get("/contact", function(req, res){
    res.send("Contact me at: khaledraedabdulhamed@gmail.com");
})
app.get("/about", function(req, res){
    res.send("Khaled Abdulhamid 28 years old -Full stack developer");
})

app.get("/Hobbies", function(req, res){
    res.send("Code Pray Chat with my wife");
})
app.listen(3000, function(){
    console.log("server is running on port # 3000");
})