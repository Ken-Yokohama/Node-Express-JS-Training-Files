const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req, res){

  res.sendFile(__dirname + "/index.html");

});

app.post("/",function(req,res){
  const query = req.body.cityName;
  const apiKey = "d9e018e3bcfb90f75c0968c8766acc5a";
  const units = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+units;

  https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data",function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon
      const imageURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png"

      res.write("<p>The weather description in "+query+" is "+ description+"</p>");
      res.write("<h1>The Weather Temperature in "+query+" is "+temp+"</h1>");
      res.write("<img src="+imageURL+" alt='Weather Icon'>")
      res.send();
    });
  });
});





app.listen(port,function(){
  console.log(`Example app listening at http://localhost:${port}`)
})
