var fun = require('../conf/function');
var controller = function(req,res,parameters){
    this.res = res;
    this.req = req;
    this.parameters = parameters;
};
controller.prototype.addDomain_action = function(){
    var actionThis = this;
    if(this.parameters.url == null){
        return this.res.send({
            'type' : 'error',
            'info' : 'missing parameter'
        });
    }
    var urlInfo = fun.format.url(this.parameters.url);
    if(!(urlInfo['protocol'] == "http:" || urlInfo['protocol'] == "https:") || urlInfo['host'] == null){
        return this.res.send({
            'type' : 'error',
            'info' : 'parameter is not standard'
        });
    }
    var addDomain = require("../models/Api/addDomain");
    // addDomain.find({
    //     url : this.parameters.url
    // },function(error,info){
    //     var addDomainEntity,events;
    //     if(error){
    //         actionThis.res.send({
    //             'error'  : error,
    //         });
    //         return;
    //     }
    //     if(info != ""){
    //         actionThis.res.send({
    //             'type' : 'error',
    //             'info' : 'url already exists'
    //         });
    //         return;
    //     }
    //     addDomainEntity = new addDomain({
    //            url : actionThis.parameters.url,
    //     });
    //     addDomainEntity.save(function(error){
    //         if(error){
    //             return actionThis.res.send({
    //                 'type' : 'error',
    //                 'info' : 'data save failed'
    //             });
    //         }
    //     });
        actionThis.res.send({
            'type' : 'success',
            'info' : 'success added'
        });
        require('../event/events')(this.parameters.url);
    // });
};
exports.controller = controller;
