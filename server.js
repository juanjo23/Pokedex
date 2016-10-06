// server.js

//require modules: express, logger, path
var express = require('express');        //  express
var logger  = require("eazy-logger").Logger();
var path    = require('path');

var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var pokemon    = require('./data/pokemon.json');
var rootPath   = path.normalize(__dirname + '/');
var port = process.env.PORT || 8080;        // set our port

//pokemon = [{id:1, name:"Oso1"}, {id:4, name:"Oso4"}, {id:3, name:"Oso3"}];


// GET all pokemon
app.get('/api/pokemon', function(req, res) {
  res.json(pokemon);
});

// GET pokemon by id
app.get('/api/pokemon/:id', function(req, res){
  var index = 0;
    for(var i=0; i<pokemon.length; i++){
      if(pokemon[i].id == req.params.id){
        index = i;
        break;
      }
    }
    res.json(pokemon[index]);
});

app.use(express.static(rootPath + 'dist'));

app.listen(port);
logger.info('\nServer running on: {cyan:%s}', 'http://localhost:' + port + '/');

logger.info('\nAPI: {magenta:%s}', 'http://localhost:' + port + '/api/pokemon/');
