var api = require('./api');
var co = require('co');

co(function *() {
	var res = yield api.donnieLogin();
	//var res = yield api.anonymousLogin();
	var accessToken = res.body.accessToken;

	var gpt = yield api.getPaypalToken(accessToken);
	console.log(JSON.stringify(gpt.body));

	//var ppt = yield api.addPaypalToken(accessToken, '');
	//console.log(JSON.stringify(ppt.body));

	var t = yield api.getTender(accessToken);
	console.log(JSON.stringify(t.body));

	//var ut = yield api.getUsableTender(accessToken);
	//console.log(JSON.stringify(ut.body));

	var si = yield api.getAppliedShippingInfo(accessToken);
	console.log(JSON.stringify(si.body));

	var or = yield api.getOrderReview(accessToken);
	console.log(JSON.stringify(or.body));

	var cd = yield api.getCart(accessToken);
	console.log(JSON.stringify(cd.body));

}).catch(function (err) {
	console.error(err);
});