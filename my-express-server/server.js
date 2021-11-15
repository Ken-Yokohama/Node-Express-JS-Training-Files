const express = require('express');
const app = express();

app.get("/",function(req, res){
  res.send("<h1>Hello World!</h1>");
});

app.get("/contact",function(req,res){
  res.send("Contact me at kenyokohama@gmail.com");
});

app.get("/about",function(req,res){
  res.send("I am Ken! a Civil Engineer & Software Engineer");
});

app.get("/hobbies",function(req,res){
  res.send("Coding & Video GAmes");
});

app.listen(3000,function(){
  console.log("server started on port 3000");
});
