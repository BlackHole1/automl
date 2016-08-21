var controller = function(req,res){
    this.res = res;
    this.req = req;
};
controller.prototype.index_action = function(){
    this.res.send('i am actionIndex');
};
controller.prototype.about_action = function(){
    this.res.send(['BOSS系统','ver:0.01','author:BYTS','date:2014-1-1']);
};
exports.controller = controller;
