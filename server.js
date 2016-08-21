var express = require('express');
var url = require('url');
var routes = require('./core/routes.js');
var app = express();
app.listen(8080,'127.0.0.1');
routes(app,url);
