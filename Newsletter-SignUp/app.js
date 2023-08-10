const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');
require('dotenv').config();

const app = express();
const port = 3000

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/signup.html")
});

app.post("/",function(req,res){
  const firstName = req.body.firstName;
  const lastName =req.body.lastName;
  const email = req.body.emailPost

  const data = {
    members:[
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };

  const jsonData = JSON.stringify(data);

  const url = "https://us5.api.mailchimp.com/3.0/lists/4f6e154e70"

  const options = {
    method: "POST",
    headers: {
      Authorization: process.env.API_KEY,
    },
  }

  const request = https.request(url, options, function(response){

    if (response.statusCode ===200){
      res.sendFile(__dirname +"/success.html");
    }else{
      res.sendFile(__dirname +"/failure.html");
    }

    response.on("data",function(data){
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();



});


app.post("/failure",function(req,res){
  res.redirect("/");
});

app.listen(process.env.PORT || port, function(){
  console.log(`Example app listening at http://localhost:${port}`)
})

//
// Deployed Website
// https://still-garden-96667.herokuapp.com/

// TESTING CODE


// LIST ID
// 4f6e154e70
