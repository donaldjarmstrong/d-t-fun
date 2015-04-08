var fs = require('fs');
var es = require('event-stream');

fs.createReadStream('dpci.txt', {flags: 'r'})
	.pipe(es.split())
	.pipe(es.map(function (line, cb) {
		//do something with the line
		cb(null, line)
	}))