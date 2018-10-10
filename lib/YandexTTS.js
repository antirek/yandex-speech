'use strict';
/*
    docs: https://tech.yandex.ru/speechkit/cloud/doc/guide/common/speechkit-common-tts-http-request-docpage/
*/

var request = require('request');
var qs = require('querystring');
var fs = require('fs');

var yandex_tts_url = 'http://tts.voicetech.yandex.net/generate?';

var YandexTTS = function (options, callback) {
    var params = {};

    //required
    params['key'] = options['developer_key'];
    params['text'] = options['text']

    //optional
    params['format'] = options['format'] || 'mp3'
    params['quality'] = options['quality'] || 'hi'
    params['lang'] = options['lang'] || 'ru-RU';
    params['speaker'] = options['speaker'] || 'alyss'
    params['emotions'] = options['emotions'] || 'good'

    var full_url = yandex_tts_url + qs.stringify(params);

    var file = fs.createWriteStream(options['file']);
    file.on('finish', callback);
    request(full_url).pipe(file);
};

module.exports = YandexTTS;
