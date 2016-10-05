// server.js

//require modules: express, logger, path
var express = require('express');        //  express
var logger  = require("eazy-logger").Logger();
var path    = require('path');

var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var rootPath   = path.normalize(__dirname + '/');
var bears = require('./data/pokemon.json');
var port = process.env.PORT || 8080;        // set our port

//bears = [{id:1, name:"Oso1"}, {id:4, name:"Oso4"}, {id:3, name:"Oso3"}];


// GET all pokemon
app.get('/api/pokemon', function(req, res) {
  res.json(bears);
});

// GET pokemon by id
app.get('/api/pokemon/:id', function(req, res){
  var index = 0;
    for(var i=0; i<bears.length; i++){
      if(bears[i].id == req.params.id){
        index = i;
        break;
      }
    }
    res.json(bears[index]);
});

app.use(express.static(rootPath + 'dist'));

app.listen(port);
logger.info('\nOpen your browser in: {cyan:%s}', 'http://localhost:' + port + '/');

logger.info('\nSee the API in: {magenta:%s}', 'http://localhost:' + port + '/api/pokemon/');
