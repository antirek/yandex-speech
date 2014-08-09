var YandexASR = require('./index');

var ya = new YandexASR({
    developer_key: '22d458e6-c881-4b92-b59c-b78e6f88c3e9',
    uuid: '12345678123456781234567812345678',
    file: 'data/2.mp3',
    filetype: 'audio/x-mpeg-3',
});

ya.recognize(function(err, httpResponse, body){
    console.log(err, httpResponse, body);
});

