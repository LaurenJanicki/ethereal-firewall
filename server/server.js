var express = require('express');
var bodyParser = require('body-parser');
var Sequelize - require('sequelize');

var db = require('./config/db');

var app = express();

var sequelize = new Sequelize('sequelize', 'root', '', {
  dialect: 'mysql';
});

var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));

app.listen(port);
console.log('listening on port', port);

exports = module.exports = app;