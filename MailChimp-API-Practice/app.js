const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');
const mailchimp = require("@mailchimp/mailchimp_marketing");

const app = express();
const port = 3000

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mailchimp.setConfig({
  apiKey: "2ee2da907e0e0f5ac712bd5e8aaf1e65-us5",
  server: "us5",
});

app.get("/", function(res, res) {
  const run = async () => {
    const response = await mailchimp.lists.getListMembersInfo("4f6e154e70");
    console.log(response);
    res.json(response);
  };

  run();
});

app.post("/",function(req,res){
  const {email, status, fname, lname} = req.body;

  const run = async () => {
    const response = await mailchimp.lists.addListMember("4f6e154e70", {
      email_address: email,
      status: status,
      merge_fields: {
        FNAME: fname,
        LNAME: lname
      }

    });
    res.json(response);
  };
  run();

});




app.listen(port, function() {
  console.log(`Example app listening at http://localhost:${port}`)
})
