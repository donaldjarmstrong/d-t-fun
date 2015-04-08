var api = require('./api');
var co = require('co');

co(function *() {
	var res = yield api.donnieLogin();
	//var res = yield api.anonymousLogin();
	var accessToken = res.body.accessToken;

	var c = yield api.cancelOrder(accessToken, '912334784001', '2514824083');
	console.log(c.body);
}).catch(function (err) {
	console.error(err);
});