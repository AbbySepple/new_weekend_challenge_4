var express = require('express');
var mongoose = require('mongoose');
var path = require ('path');
var bodyParser = require('body-parser');
var app = express();


//connect to mongoose
mongoose.connect('localhost:/27017/abbyrealestate');

//build schema
var listingsSchema = mongoose.Schema ({
  rent: Number,
  cost: Number,
  sqft: Number,
  city: String
});

 //create globals
var property = mongoose.model('property', listingsSchema);
var port = process.env.PORT || 7394;

//route
app.get('/', function (req, res){
  console.log('base url hit', path.resolve ('public/views/index.html'));
  res.sendFile(path.resolve ('public/views/index.html'));
});

//uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

//spin up server
app.listen( port, function (){
  console.log('server is up and listening:', port);
});


app.get('/property', function(req, res){
  console.log('get to property');
  property.find().then(function(data){
    res.send(data);
  });//end property find
});//end app.get
