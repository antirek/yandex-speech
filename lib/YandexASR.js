/*
    docs: http://api.yandex.ru/speechkit/cloud-api/doc/index.xml
*/

var YandexASR = function(options, callback){

    var request = require('request');
    var qs = require('querystring');
    var fs = require('fs');
    var path = require('path');

    var yandex_asr_url = 'http://asr.yandex.net/asr_xml?';
    
    var file = {};
    var params = {};   

    var generateUUID = function(){        
        function s8() {
            return Math.floor((1 + Math.random()) * 0x10000000).toString(16);
        }
        return s8()+s8()+s8()+s8();
    }

    var init = function(options){        
        //reqired
        params['key'] = options['developer_key'];        
        file['filepath'] = options['file'];
        //optional
        params['uuid'] = (options['uuid']) ? options['uuid'] : generateUUID();        
        params['topic'] = (options['topic']) ? options['topic'] : 'freeform';
        params['lang'] = (options['lang']) ? options['lang'] : 'ru-RU';
        file['filetype'] = (options['filetype']) ? options['filetype'] : 'audio/x-mpeg-3';
    }(options);    

    var full_url = yandex_asr_url + qs.stringify(params);

    var recognize = function(callback){
        
        var r = request.post({
                url: full_url,
                headers: {
                    'Transfer-Encoding': 'chunked'
                }
            }, 
            function (err, httpResponse, body) {
                callback(err, httpResponse, body);
            }
        );

        var form = r.form();
        form.append('Content-Type', file['filetype']);
        form.append('audio', fs.createReadStream(file['filepath']));
    }(callback);
};

module.exports = YandexASR;