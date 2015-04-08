var P = require('pointfree-fantasy');
var R = require('ramda');
var Future = require('data.future');
var assert = require('assert');

function readFile() {
	// this is a file that has a bunch of product Id's
	return new Future(function (rej, res) {
		setTimeout(function () {
			res('123\n456\n789');
			//res([123, 456, 789])
		}, 300);
	});
}

function callApi(id) {
	console.log('calling api for %s', id);
	// this function would make an HTTP call to get product details
	return new Future(function (rej, res) {
		setTimeout(function () {
			res({oldId: id, newId: id + '_new'});
		}, 300);
	});
}

function save(id) {
	// flush a single product json object to the DB
	return new Future(function (rej, res) {
		setTimeout(function () {
			res('write successful for id ' + JSON.stringify(id.oldId));
		}, 300);
	});
}

var getJSON = R.curry(function (url, params) {
	return new Future(function (rej, res) {
		setTimeout(function () {
			res({id: 100, name: 'donnie', params: params});
			}, 300)
		})
});

function log (x) {
	console.log('"%s"', x);
	return x;
}

//var ex3 = R.compose(R.chain(callApi), readFile);
// this is cool
//var ex3 = R.compose(R.chain(R.map(callApi)), readFile);
//var ex3 = R.compose(R.chain(P.traverse(callApi)), readFile);

//var ex3 = R.compose(P.traverse(log), Future.of);
var makeUp = R.curry(function (posts, tags) {
	return { posts: posts, tags: tags};
});

//var ex3 = P.liftA2(makeUp, getJSON('/posts', {posts: 'posts'}), getJSON('/tags', {tags: 'tags'}));

var getPost = getJSON('/posts');
//var ex3 = R.map(getPost, [ {id: 1}, {id: 2} ]);
// this returns [Future({id:1}), Future({id:2})]

//var ex3 = P.traverse(getPost, Future.of, [ {id: 1}, {id: 2} ]);
// this returns Future([{id:1},{id:2}])

var callThem = P.traverse(callApi, Future.of);

var saveThem = P.traverse(save, Future.of);

//var ex3 = R.compose(R.chain(saveThem), R.chain(callThem), readFile);

// we need to compose a function that will take a dpci, then call an api then write to DB
//var c = R.compose(save, callApi);
//var g =  P.traverse(c, Future.of);
//var ex3 = R.compose(R.chain(log), readFile);

var duplicate = function(x) {
	return [x, x];
};

//
////map takes an array, executes the function over every element of that array returning an equal size array
//console.log(R.map(duplicate)([1, 2, 3]));
// if a map gets a future, it will push the future out
//var ex3 = R.compose(R.map(duplicate), readFile);

//
//// chain takes an array, and executes a function over every element of that array and flattening the result
//console.log(R.chain(duplicate)([1, 2, 3]));
// if a chain gets a future, it will execute that future
//var ex3 = R.compose(R.chain(duplicate), readFile); // error

var httpGet = function (x) {
	console.log('in httpGet ', x);
	return x + 'F';
	//return Future.of(x + 'F');
};
var writeToMongo = function (x) {
	console.log('in writeToMongo ', x);
	return x + 'G';
	//return Future.of(x + 'G');
};

var eachProductId = R.compose(writeToMongo, httpGet);
var processFile = R.compose(R.map(eachProductId), R.split('\n'));
var ex1 = R.compose(R.map(processFile), readFile);
ex1().fork(console.error, function (res) {
	console.log(res);
});

//var eachDPCI = R.compose(ff, gg);
//var processFile = R.compose(R.map(eachDPCI), R.split('\n'));
//var ex3 = R.compose(R.map(processFile), readFile);
//var f = P.traverse(ff, Future.of);
//var g = P.traverse(gg, Future.of);
//var ex3 = R.compose(R.chain(f), readFile);
//var ex3 = R.compose(R.chain(f), readFile);

//ex3().fork(console.error, function (res) {
//	console.log(res);
//});

// this is what I get
// { oldId: [ '123', '456', '789' ], newId: '123,456,789_new' }

// expected
// [{oldId: '123', newId: '123_new'}, {oldId: '456', newId: '456_new'}, {oldId: '789', newId: '789_new'}]

