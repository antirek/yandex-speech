/*
    docs: http://habrahabr.ru/post/225179/#comment_7658675
*/

var YandexTTS = function(options, callback){

    var request = require('request');
    var qs = require('querystring');
    var fs = require('fs');
    var path = require('path');

    var yandex_tts_url = 'http://tts.voicetech.yandex.net/tts?';    
    var yandex_format = 'mp3';
    var yandex_quality = 'hi';
    var yandex_platform = 'web';
    var yandex_application = 'translate'; 
    var yandex_lang = 'ru_RU';
    var yandex_text = null;
    var file_download_path = null;
    
    var init = function(options){
        //required     
        yandex_text = options['text'];
        file_download_path = options['file'];
        //optional
        yandex_format = (options['format']) ? options['format'] : 'mp3';
        yandex_quality = (options['quality']) ? options['quality'] : 'hi';
        yandex_platform = (options['platform']) ? options['platform'] : 'web';
        yandex_application = (options['application']) ? options['application'] : 'translate';
        yandex_lang = (options['lang']) ? options['lang'] : 'ru_RU';
    }(options);

    var params = {
        format: yandex_format,
        quality: yandex_quality,
        platform: yandex_platform,
        application: yandex_application,
        lang: yandex_lang,
        text: yandex_text
    };

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