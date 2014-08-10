/*
    docs: http://habrahabr.ru/post/225179/#comment_7658675
*/

var YandexTTS = function(options){

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
        yandex_text = options['text'];
        file_download_path = options['file'];        
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
    }

    return {
        download: download
    }
};

module.exports = YandexTTS;