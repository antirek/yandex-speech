yandex-speech
=============

node.js module for Yandex speech systems (ASR & TTS)

## Install
```javascript
npm install yandex-speech --save

```

## Automatic Speech Recognition (simple)

Get API key: https://developer.tech.yandex.ru/

docs: http://api.yandex.ru/speechkit/cloud-api/doc/index.xml

```javascript
var yandex_speech = require('yandex-speech');

yandex_speech.ASR({
    developer_key: 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX',    
    file: 'data/1.mp3',
	}, function(err, httpResponse, xml){
		if(err){
    		console.log(err);
    	}else{
    		console.log(httpResponse.statusCode, xml)
    	}
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
		if(err){
    		console.log(err);
    	}else{
    		console.log(httpResponse.statusCode, xml)
    	}
    }
);

```



## Text-To-Speech 

(use unofficial api, api key not required)

docs: http://habrahabr.ru/post/225179/#comment_7658675

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

#Links
- http://habrahabr.ru/post/232861/
- http://clubs.ya.ru/speechkit/replies.xml?item_no=103



