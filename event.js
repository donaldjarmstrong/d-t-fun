var fs = require('fs');
var es = require('event-stream');

fs.createReadStream('product_l3.txt')
	.pipe(es.split())
	.pipe(es.map(function (data, callback) {
		//transform data
		// ...
		console.log('a' + data);
		callback(null, data)
	}))
	.pipe(es.map(function (data, callback) {
		//transform data
		// ...
		console.log('b' + data);
		callback(null, data)
	}))
;
