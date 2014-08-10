var Yandex = require('./index');

var ya = Yandex.ASR({
    developer_key: '22d458e6-c881-4b92-b59c-b78e6f88c3e9',
    uuid: '12345678123456781234567812345678',
    file: 'data/1.mp3',
    filetype: 'audio/x-mpeg-3',
});

//ya.recognize(function(err, httpResponse, body){
//    console.log(err, httpResponse, body);
//});

var ya2 = Yandex.TTS({
	text: 'Привет, мир!',
	file: 'data/hello.mp3'
});

//ya2.download(function(){
	//console.log('done');
//});
function generate(){
	function s8() {
    	return Math.floor((1 + Math.random()) * 0x10000000)
               .toString(16);
	}
	return s8()+s8()+s8()+s8();
}
console.log(generate());