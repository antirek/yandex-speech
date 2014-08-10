yandex-speech
=============

node.js module for Yandex speech systems (ASR & TTS)

## Install
```javascript
npm install yandex-speech --save

```

## Automatic Speech Recognition

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
