'use strict';
/*
 docs: http://api.yandex.ru/speechkit/cloud-api/doc/index.xml
 */
var request = require('request'),
    qs = require('querystring'),
    fs = require('fs'),
    uuid = require('node-uuid');

var YANDEX_ASR_URL = 'http://asr.yandex.net/asr_xml?';

var YandexASR = function (options, callback) {
    var file = {};
    var params = {};
    var debug = options['debug'] || false;

    //reqired
    params['key'] = options['developer_key'];
    file['filepath'] = options['file'];
    file['filetype'] = options['filetype'] || 'audio/x-mpeg-3';

    //optional
    params['uuid'] = options['uuid'] || uuid.v4().replace(/-/g,'');
    params['topic'] = options['topic'] || 'notes';
    params['lang'] = options['lang'] || 'ru-RU';

    var full_url = YANDEX_ASR_URL + qs.stringify(params);

    if (debug) {
        console.log({
            url: full_url, 
            path: file['filepath'], 
            type: file['filetype']
        });
    }

    var check_filesize = function (filepath) {
        var fileSizeInBytes = fs.statSync(filepath)["size"];
        return (fileSizeInBytes < 1024 * 1024);
    };

    if (file.filepath) {
        if (check_filesize(file.filepath)) {

            var r = request.post({url: full_url}, callback);
            var form = r.form();

            form.append('Content-Type', file['filetype']);
            form.append('audio', fs.createReadStream(file['filepath']));

        } else {
            callback('filesize more 1Mb');
        }
    } else {
        // assume we'll use streaming API
        return request.post({
            url: full_url,
            headers: {
                'Content-type': file.filetype
            }
        }, callback);
    }
};

module.exports = YandexASR;
