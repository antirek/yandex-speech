var yandex_speech = require('../index');

var ya2 = yandex_speech.TTS({
	text: 'Привет, мир!',
	file: 'data/hello.mp3'
});

ya2.download(function(){
	console.log('done');
});