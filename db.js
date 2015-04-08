"use strict";

var Promise = require("bluebird");

var MongoClient = require('mongodb').MongoClient;
var _ = require("lodash");

require('./env').required(['BLOOM_MONGODB_URI']);

var _pooledConnection = null;

var pooledConnection = function () {
    return new Promise(function (resolve, reject) {
	    if (_pooledConnection) {
		    resolve(_pooledConnection);
	    } else {
		    var uri = process.env['BLOOM_MONGODB_URI'];

		    MongoClient.connect(uri, function (err, db) {
			    if (err) {
				    reject(new Error(err));
			    } else {
				    _pooledConnection = db;
				    resolve(_pooledConnection);
			    }
		    });
	    }
    });
};

// normal CTRL-C exit
process.on('SIGINT', closePooledConnection);

// heroku uses SIGTERM to shutdown apps; 10 seconds then sends SIGKILL
// https://devcenter.heroku.com/articles/dynos#graceful-shutdown-with-sigterm
process.on('SIGTERM', closePooledConnection);

// If the Node process ends, close the Mongo connection pool
function closePooledConnection () {
    if (_pooledConnection) {
        _pooledConnection.close(function () {
            process.exit(0);
        });
    } else {
        process.exit(0);
    }
}

module.exports = {
    pooledConnection: pooledConnection
};
