var express = require ('express');
var app = express();
var path = require ('path');
var bodyParser = require ('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended: false});
var pg = require('pg');
var port = process.env.PORT || 3000;

var connectionString = 'postgres://localhost:5432/Inventory';

//spin up server
app.listen(port,function(){
  console.log('serving listening on: ', port);
}); //end server spin up

//base url
app.get('/', function(req, res){
  console.log('base url hit');
  res.sendFile(path.resolve('views/index.html'));
}); //end base hit

//add new item to inventory
app.post('/addItem', urlEncodedParser, function(req, res){
  console.log('addItem route hit: ', req.body);
}); //end add new item to the inventory

//get all objects in the inventory
app.get('/getInventory', function(req, res){
  console.log('getInventory route hit');
}); //end get all objects in the inventory

//static folder
app.use(express.static('public'));
