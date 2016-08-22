var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/automl');
var PersonSchema = new mongoose.Schema({
      name:String
});
var PersonModel = db.model('test',PersonSchema);
module.exports = mongoose.model('test', PersonModel);
