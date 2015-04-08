var request = require('request');
var P = require('pointfree-fantasy');
var R = require('ramda');
var Future = require('data.future');
var fs = require('fs');
var c = require('./schema_org');

var log = function (data) {
	console.log(data);
	return data;
};

function size(data) {
	console.log(data.length);
	return data;
}

// get the contents of the file
var readFile = R.curry(function (f) {
	return new Future(function (reject, resolve) {
		fs.readFile(f, 'utf-8', function (err, res) {
			if (err)
				reject(err);
			else
				resolve(res);
		});
	})
});

// pass into http
function callHttpGet (id) {
	console.log('calling API' + id);

	return new Future(function (reject, resolve) {
		request({
			method: 'GET',
			gzip: true,
			json: true,
			url: 'https://api.target.com/v2/products/' + id,
			qs: {key: 'satWWPMVdrDYR2fsLeu8iGaA99QHbkBY', idType: 'dpci'}
		}, function (err, res) {
			if (err)
				reject(err);
			else if (res.statusCode != 200)
				reject(res.body);
			else
				resolve(res.body);
		});
	})
}

// transform into schema.org
function transformToSchemaOrg (v2Product) {
	console.log('in xform' + grabProduct(v2Product).DPCI);
	return new Future(function (reject, resolve) {
		resolve(c.createProductFromV2(grabProduct(v2Product)))
	})
}

// write to mongo
var callApi =  R.chain(P.traverse(callHttpGet, Future.of));
var readLines = R.compose(R.map(R.split('\n')), readFile);
var help = R.chain(P.traverse(transformToSchemaOrg, Future.of));
var CatalogEntryView = R.compose(R.map(size), help, callApi, readLines);

var readFileAsJSON = R.compose(R.map(JSON.parse), readFile);
var grabProduct = R.compose(R.head, R.get('CatalogEntryView'));

var convertProduct = R.compose(c.createProductFromV2);



var g = R.compose(CatalogEntryView);

var g = R.compose(R.chain(P.traverse(R.compose(callHttpGet), Future.of)), readLines);
//var g = R.compose(R.map(convertProduct), R.map(grabProduct), readFileAsJSON);
//g('singleProduct.json').fork(console.error, function (res) {

g('small_dpci.txt').fork(console.error, function (res) {
	console.log(res);
});

