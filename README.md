yandex-speech
=============

node.js module for Yandex speech systems (ASR & TTS)

## Install
```javascript
npm install yandex-speech --save

```

## Automatic Speech Recognition (simple)

```javascript
var yandex_speech = require('yandex-speech');

yandex_speech.ASR({
    developer_key: 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX',    
    file: 'data/1.mp3',
	}, function(err, httpResponse, body){
    	console.log(err, httpResponse.statusCode, body);
	}
);

```

## Automatic Speech Recognition (full)
```javascript
var yandex_speech = require('yandex-speech');

yandex_speech.ASR({
    developer_key: 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX',  //get in Yandex Developer Center
    file: 'data/1.mp3',                                     //check format
    uuid: '12345678123456781234567812345678',               //32 numbers & letters
    topic: 'freeform',                                      // ['freeform', 'maps', 'general', 'music']
    lang: 'ru-RU',                                          // ['ru-RU', 'tr-TR'],
    format: 'audio/x-mpeg-3'                                // ['audio/x-speex', 'audio/x-pcm;bit=16;rate=8000', 'audio/x-pcm;bit=16;rate=16000', 'audio/x-alaw;bit=13;rate=8000', 'audio/x-wav', 'audio/x-mpeg-3']
	}, function(err, httpResponse, xml){
    	console.log(err, httpResponse.statusCode, xml);
	}
);

```

## Text-To-Speech

```javascript
var yandex_speech = require('yandex-speech');

yandex_speech.TTS({
	text: 'Привет, мир!',
	file: 'data/hello.mp3'
	}, function(){
		console.log('done');
	}
);

```