var express = require('express');
var url = require('url');
var routes = require('./core/routes.js');
// var mongoose = require('mongoose');
// var db = mongoose.connect('mongodb://localhost/automl'); // 27017
// var Cat = mongoose.model('Cat', {
//   name: String,
//   friends: [String],
//   age: Number,
// });
// var kitty = new Cat({ name: 'Zildjian', friends: ['tom', 'jerry']});
// kitty.age = 3;
// kitty.save(function (err) {
//   if (err) console.log(err);
//   console.log('meow');
// });
var app = express();
app.listen(8080,'127.0.0.1');
routes(app,url);
