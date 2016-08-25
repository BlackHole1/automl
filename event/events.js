var async = require("async")
var events = function(a){

    async.auto({
        get_sub_domain: function(callback) {
            console.log("获取子域信息")
            callback(null, {
                'list':[
                    "子域url地址",
                    "子域url地址"
                ],
            });
        },
        // make_folder: function(callback) {
        //     console.log('in make_folder');
        //     callback(null, 'folder');
        // },
        // write_file: ['get_sub_domain', 'make_folder', function(results, callback) {
        //     console.log('in write_file', JSON.stringify(results));
        //     callback(null, 'filename');
        // }],
        // email_link: ['write_file', function(results, callback) {
        //     console.log('in email_link', JSON.stringify(results));
        //     callback(null, {'file':results.write_file, 'email':'user@example.com'});
        // }]
    }, function(err, results) {
        console.log('err = ', err);
        console.log('results = ', results);
    });
}
module.exports = events;
