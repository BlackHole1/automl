var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/automl');
var PersonSchema = new mongoose.Schema({
      url:String
});
module.exports = mongoose.model('domian_list', PersonSchema,'domian_list');
