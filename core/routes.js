var fs = require('fs');
module.exports = function(app,url){
    app.all('*',function(req,res){
        var pathname = url.parse(req.url).pathname;
        var path = path_rule(pathname);
        if(pathname == "/favicon.ico"){
            return;
        }
        fs.exists('./controllers/' + (path.controller) + '_controller.js', function(exists) {
            if(exists){
                var c = require('../controllers/' + path.controller + '_controller.js');
                var controller = new c["controller"](req,res);
                var action = (path.action) + "_action";
                if(typeof(controller[action]) == 'function'){
                    controller[action]();
                }else if(path.action == null && controller['index_action'] == 'function'){
                    controller['index_action']();
                }else{
                    res.send('找不到方法');
                }
            }else{
                res.send('找不到控制器');
            }
        });
    });
};
function path_rule(pathname){
    var parameters = {};
    if(pathname.substr (-1,1) == "/"){
        pathname = pathname.substr(0,(pathname.length-1))
    }
    if(pathname.substr (0,1) == "/"){
        pathname = pathname.substr(1,pathname.length)
    }
    var path = pathname.split('/');
    if(path.length == 1 && path[0] == "" ){
        path[0] = "index";
        path[1] = "index";
    }
    if(path.length == 1 && path[0] != "" ){
        path[1] = "index";
    }
    if(path.length == 2 && path[1] == ""){
        path[1] = "index";
    }
    if(path.length == 3){
        var tmp = path[2];
        path[2] = "id";
        path[3] = tmp;
    }
    if(path.length > 3){
        for(var i = 2;i < path.length;i++){
            if(path[i+1] == 'undefined'){
                path[i+1] = "";
            }
            if(i%2 == 0){
                parameters[path[i]] = path[i+1];
            }
        }
    }
    return {
        'controller':path[0],
        'action':path[1],
        'parameters':parameters,
    };
}
