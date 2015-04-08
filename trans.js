var dotenv = require('dotenv');
dotenv.load();

var Promise = require("bluebird");
var using = Promise.using;
var mongodb = require('mongodb');
var MongoClient = Promise.promisifyAll(mongodb.MongoClient);
Promise.promisifyAll(mongodb.Collection.prototype);

var fs = Promise.promisifyAll(require("fs"));
var request = Promise.promisify(require('request'));
var R = require('ramda');
var c = require('./schema_org');
var assert = require("assert");

function getConnection(context) {
	//this._host = context.host || 'localhost';
	//this._port = context.port || '27017';
	//this._db = context.db || 'bloom';
	//
	//var mongoURL = require('util').format('mongodb://%s:%s/%s', this._host, this._port, this._db);

	return MongoClient.connectAsync(process.env['BLOOM_MONGODB_URI']).disposer(function (db) {
		console.log('...closing db');
		db.close();
	});
}

//using(getConnection(), function(connection) {
//	// Don't leak the `connection` variable anywhere from here
//	// it is only guaranteed to be open while the promise returned from
//	// this callback is still pending
//	return connection.collection('products_bloom').findAsync({});
//	// Code that is chained from the promise created in the line above
//	// still has access to `connection`
//}).then(function(rows) {
//	// The connection has been closed by now
//	console.log('rows'+rows);
//});

using(getConnection(), fs.readFileAsync("dpci.txt", "utf8"), function (connection, fileContents) {
	console.time("process");
	return Promise
		.map(fileContents.split('\n'), function (dpci) {
			// call API
			return request({
				method: 'GET',
				gzip: true,
				json: true,
				url: 'https://api.target.com/v2/products/' + dpci,
				qs: {key: 'satWWPMVdrDYR2fsLeu8iGaA99QHbkBY', idType: 'dpci'}
			}).spread(function (response, body) {
				if (response.statusCode !== 200)
					return {dpci: dpci, bad: 'status'};

				return body.CatalogEntryView[0];
			}).then(function (productJSON) {
				return c.createProductFromV2(productJSON);
			}).then(function (schemaOrg) {
				// bad translations are skipped
				if (schemaOrg.length <= 0) {
					return {skipped: true}
				}

				return connection.collection('products_bloom').insertOneAsync(schemaOrg)
					.then(function (result) {
						assert.equal(1, result.result.n);
						assert.equal(1, result.ops.length);
						console.log("Inserted " + schemaOrg.sku + " document into the products_bloom collection");

						return {done: true};
					});
			});
		}, {concurrency: 3}
	);
}).finally(function () {
	console.log("done!!");
	console.timeEnd("process");
});

