/**
 * 自定义函数
 * @param      string   $strData   要处理的字符串
 * @copyright  2016-8-23 14:08:56
 * @return     String、Bool、Array、Object
 * @author     Black-Hole <158blackhole@gmail.com>
 */
var url = require('url');
var fun = {
    base64 : {
        encode : function(strData){
            return new Buffer(strData).toString('base64')
        },
        decode : function(strData){
            return new Buffer(strData,'base64').toString();
        }
    },
    format : {
        url : function(strData){
            var decode = arguments[1] ? arguments[1] : true;
            if(decode) strData = fun.base64.decode(strData);
            return url.parse(strData);
        }
    }
}
module.exports = fun;
