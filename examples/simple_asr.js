var yandex_speech = require('../index');

yandex_speech.ASR({
    developer_key: '22d458e6-c881-4b92-b59c-b78e6f88c3e9',   
    file: 'data/1.mp3',
	}, function(err, httpResponse, xml){
		if(err){
    		console.log(err);
    	}else{
    		console.log(httpResponse.statusCode, xml)
    	}
    }
);
