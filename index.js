'use strict';

var P = require('pointfree-fantasy');
var request = require('request');
var R = require('ramda');
var Future = require('data.future');

function getOnlineProductCategory(categoryId) {
	return new Future(function (reject, resolve) {
		request({
			url: 'http://api.target.com/product_groups/v1/category/' + categoryId,
			method: 'GET',
			qs: {key: 'satWWPMVdrDYR2fsLeu8iGaA99QHbkBY'},
			json: true
		}, function (err, res) {
			if (err)
				reject(err);
			else if (res.statusCode != 200)
				reject(res.body);
			else
				resolve(res);
		});
	})
}

var babyFunc = function (name) {
	return name === "baby"
};

var babySubFunc = function (name) {
	return name === ["baby bath", "diapering", "health & safety"];
};

var log = function (x) {
	console.log(x);
	return x;
};

var findBabyCategory = R.compose(R.pluck('uniqueID'), R.filter(R.compose(babyFunc, R.get('name'))), R.get('Child'), R.head, R.get('CatalogGroupView'), R.get('body'));

var findSpecificBabyCategories = R.compose(R.pluck('uniqueID'), R.filter(R.compose(babySubFunc, R.get('name'))), R.get('Child'), R.head, R.get('CatalogGroupView'), R.get('body'));

var s = R.compose(P.map(findBabyCategory), getOnlineProductCategory);
s(5).fork(console.error, function (res) {
	console.log(res);
});

var http = Async.liftNode(request);
var files = Async.parallel(
	http({ url: 'http://api.target.com/product_groups/v1/category/4355', method: 'GET', qs: {key: 'satWWPMVdrDYR2fsLeu8iGaA99QHbkBY'}, json: true}),
	http({ url: 'http://api.target.com/product_groups/v1/category/4267', method: 'GET', qs: {key: 'satWWPMVdrDYR2fsLeu8iGaA99QHbkBY'}, json: true}),
	http({ url: 'http://api.target.com/product_groups/v1/category/4292', method: 'GET', qs: {key: 'satWWPMVdrDYR2fsLeu8iGaA99QHbkBY'}, json: true})
);
//
//var concatenated = files.chain(function(xs){ return xs.join('') });
//
//concatenated.fork(
//	function(error){ throw error }
//	, function(value){ console.log(value) }
//);
var fs    = require('fs');

var Async = require('control.async')(Future);
var read = Async.liftNode(fs.readFile);

var files = Async.parallel(
	  read('./foo.txt', 'utf-8')
	, read('./bar.txt', 'utf-8')
	, read('./baz.txt', 'utf-8')
);

//var files = read('./foo.txt', 'utf-8');

//var concatenated = files.chain(function(xs){ return xs.join('') })
//var concatenated = read('./foo.txt', 'utf-8');

//var v = files.map(function (xs) { return xs.join(' ')});
//var c = function (xs) { return xs.join(' ')};
//var v = P.map(c, files);
//var s = R.compose(P.map(findBabyCategory), getOnlineProductCategory);
//var s = v;

// Futures are pure, so you need to actually run the action to get
// the effects.
//s.fork(
//	function(error){ throw error }
//	, function(value){ console.log(value) }
//);