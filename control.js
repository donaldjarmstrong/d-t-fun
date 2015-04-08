//var R = require('ramda');
//var request = require('request');
//var fs    = require('fs');
//var Future = require('data.future');
//var async = require('control.async')(Future);
//var P = require('pointfree-fantasy');
//
//var http = async.liftNode(request);
//var files = async.parallel( [
//	http({ url: 'http://api.target.com/product_groups/v1/category/4355', method: 'GET', qs: {key: 'satWWPMVdrDYR2fsLeu8iGaA99QHbkBY'}, json: true}),
//	http({ url: 'http://api.target.com/product_groups/v1/category/4267', method: 'GET', qs: {key: 'satWWPMVdrDYR2fsLeu8iGaA99QHbkBY'}, json: true}),
//	http({ url: 'http://api.target.com/product_groups/v1/category/4292', method: 'GET', qs: {key: 'satWWPMVdrDYR2fsLeu8iGaA99QHbkBY'}, json: true})
//]);

var fs    = require('fs');
var Future = require('data.future');
var async = require('control.async')(Future);

var read = async.liftNode(fs.readFile)
var files = async.parallel( [
	  read('foo.txt', 'utf-8')
	, read('bar.txt', 'utf-8')
	, read('baz.txt', 'utf-8')]
)

var join = function(xs){ return xs.join(' ') };

var g = files.chain(join, files);

g.fork(
	function(error){ throw error }
	, function(value){ console.log(value) }
)


//var log = function (xs) {
//	console.log(xs);
//	return xs;
//}

//var g = files.chain(join)
