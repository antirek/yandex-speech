'use strict';
/*
    docs: http://habrahabr.ru/post/225179/#comment_7658675
*/

var request = require('request');
var qs = require('querystring');
var fs = require('fs');

var yandex_tts_url = 'http://tts.voicetech.yandex.net/tts?';

var defaults = {
    text: undefined,
    format: 'mp3',
    quality: 'hi',
    platform: 'web',
    application: 'translate',
    lang: 'ru_RU'
};

var YandexTTS = function (options, callback) {
    var params = {};

    for (var key in defaults) {
        params[key] = options[key] || defaults[key];
    }

    var full_url = yandex_tts_url + qs.stringify(params);

    var file = fs.createWriteStream(options['file']);
    file.on('finish', callback);
    request(full_url).pipe(file);
};

module.exports = YandexTTS;
