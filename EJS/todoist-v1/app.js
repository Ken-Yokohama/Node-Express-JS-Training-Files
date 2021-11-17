const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000
let items = ["Buy Food","Cook Food","Eat Food"];
let workItems = [];


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/",function(req,res){
  let today = new Date();
  let options = { weekday: 'long',
                  day: 'numeric',
                  month: 'long'
                };
  let day  = today.toLocaleDateString("en-US",options);

  // console.log(today.toLocaleDateString("en-US")); // 9/17/2016
  // console.log(today.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016
  // console.log(today.toLocaleDateString("hi-IN", options)); // शनिवार, 17 सितंबर 2016


  res.render('list', {listTitle: day,newListItems:items});
});

app.post("/",function(req,res){
  let item = req.body.newItem;
  if(req.body.list=="Work"){
    workItems.push(item);
    res.redirect("/work");
  }else{
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work",function(req,res){
  res.render("list", {listTitle:"Work List",newListItems:workItems});
});

app.get("/about",function(req,res){
  res.render("about");
});

app.listen(process.env.PORT || port, function(){
  console.log(`Example app listening at http://localhost:${port}`)
})
