/*
 docs: http://api.yandex.ru/speechkit/cloud-api/doc/index.xml
 */
var request = require('request');
var qs = require('querystring');
var fs = require('fs');
var path = require('path');
var mime = require('mime');

var YANDEX_ASR_URL = 'http://asr.yandex.net/asr_xml?';

var YandexASR = function (options, callback) {
    var file = {};
    var params = {};
    var debug = (options['debug']) ? options['debug'] : false;

    var generateUUID = function () {
        function s8() {
            return Math.floor((1 + Math.random()) * 0x10000000).toString(16);
        }

        return s8() + s8() + s8() + s8();
    };

    //reqired
    params['key'] = options['developer_key'];
    file['filepath'] = options['file'];
    file['filetype'] = mime.lookup(options['file']);

    //optional
    params['uuid'] = (options['uuid']) ? options['uuid'] : generateUUID();
    params['topic'] = (options['topic']) ? options['topic'] : 'notes';

    options['lang'] && (params['lang'] = options['lang']);

    var full_url = YANDEX_ASR_URL + qs.stringify(params);

    if (debug) {
        console.log('url = ' + full_url + '\n' +
            'path = ' + file['filepath'] + '\n' +
            'type = ' + file['filetype']);
    }

    var check_filesize = function (filepath) {
        var fileSizeInBytes = fs.statSync(filepath)["size"];
        return (fileSizeInBytes < 1024 * 1024);
    };

    if (check_filesize(file['filepath'])) {
        var r = request.post({
                url: full_url
            },
            function (err, httpResponse, body) {
                callback(err, httpResponse, body);
            }
        );

        var form = r.form();
        form.append('Content-Type', file['filetype']);
        form.append('audio', fs.createReadStream(file['filepath']));
    } else {
        callback('filesize more 1Mb');
    }
};

module.exports = YandexASR;
