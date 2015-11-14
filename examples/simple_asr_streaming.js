var yandex_speech = require('../index');

require('fs').createReadStream('./data/1.mp3').pipe(yandex_speech.ASR({
    developer_key: '3b7b9fba-cbcd-47d1-854a-b359ca0e5da7',
    debug: true,
    topic: 'queries'
	}, function (err, httpResponse, xml) {
		if (err) {
    		console.log(err);
    	} else {
    		console.log(httpResponse.statusCode, xml)
    	}
    }
));
