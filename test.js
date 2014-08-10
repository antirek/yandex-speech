var yandex_speech = require('./index');


var ya = yandex_speech.ASR({
    developer_key: '22d458e6-c881-4b92-b59c-b78e6f88c3e9',    
    file: 'data/hello.mp3',   
});

ya.recognize(function(err, httpResponse, body){
    console.log(err, httpResponse.statusCode, body);
});


var ya2 = yandex_speech.TTS({
	text: 'Привет, мир!',
	file: 'data/hello.mp3'
});

ya2.download(function(){
	console.log('done');
});