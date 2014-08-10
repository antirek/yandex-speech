var yandex_speech = require('../index');

yandex_speech.TTS({
	text: 'Привет, мир!',
	file: 'data/hello.mp3'
	}, function(){
		console.log('done');
	}
);