var yandex_speech = require('../index');

var ya = yandex_speech.ASR({
    developer_key: '22d458e6-c881-4b92-b59c-b78e6f88c3e9',    
    file: 'data/1.mp3',
});

ya.recognize(function(err, httpResponse, body){
    console.log(err, httpResponse.statusCode, body);
});