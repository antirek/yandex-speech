/*
    docs: http://habrahabr.ru/post/225179/#comment_7658675
*/

var YandexTTS = function(options, callback){

    var request = require('request');
    var qs = require('querystring');
    var fs = require('fs');
    var path = require('path');

    var yandex_tts_url = 'http://tts.voicetech.yandex.net/tts?';    
    
    var params = {};

    var file_download_path = null;
    
    var init = function(options){
        //required     
        params['text'] = options['text'];
        file_download_path = options['file'];
        //optional
        params['format'] = (options['format']) ? options['format'] : 'mp3';
        params['quality'] = (options['quality']) ? options['quality'] : 'hi';
        params['platform'] = (options['platform']) ? options['platform'] : 'web';
        params['application'] = (options['application']) ? options['application'] : 'translate';
        params['lang'] = (options['lang']) ? options['lang'] : 'ru_RU';
    }(options);
    
    var full_url = yandex_tts_url + qs.stringify(params);    

    var download = function(callback){        
        var file = fs.createWriteStream(file_download_path);
        file.on('finish', function(){
            file.close(callback);
        });
        request(full_url).pipe(file);
    }(callback);
};

module.exports = YandexTTS;