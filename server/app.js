var express = require ('express');
var app = express();
var path = require ('path');
var bodyParser = require ('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended: false});
var pg = require('pg');
var port = process.env.PORT || 3000;

var connectionString = 'postgres://localhost:5432/Inventory';





//static folder
app.use(express.static('public'));
