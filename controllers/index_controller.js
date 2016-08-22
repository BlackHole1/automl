var controller = function(req,res){
    this.res = res;
    this.req = req;
};
controller.prototype.index_action = function(){
    this.res.send('1');
};
controller.prototype.about_action = function(){
    this.res.send('test');
};
exports.controller = controller;
