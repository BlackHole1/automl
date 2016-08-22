var controller = function(req,res,parameters){
    this.res = res;
    this.req = req;
};
controller.prototype.index_action = function(){
    this.res.send('2');
    var test = require("../models/Api/test");
    var TestEntity = new test({
           name : "Black-Hole",
    });
    TestEntity.save(function(error){
        if(error){
            return console.log(error);
        }
    })

};
controller.prototype.about_action = function(){
    this.res.send('test');
};
exports.controller = controller;
