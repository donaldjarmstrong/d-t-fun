var _ = require('highland');
var readFile = require('fs').readFile;

var filenames = [
	'./foo.txt',
	'./bar.txt',
	'./baz.txt'];

var data = _(filenames).map(readFile).parallel(4);

data.doto(console.log)