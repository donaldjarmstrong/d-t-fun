var api = require('./paypal_ec');
var url = require('querystring');

var co = require('co');

co(function *() {
	var se = yield api.SetExpressCheckout();
	var seb = url.decode(se.body);
	console.log(seb);
	//
	console.log('https://www.sandbox.paypal.com/webscr?cmd=_express-checkout&token=' +  seb.TOKEN);

	//var getE = yield api.GetExpressCheckoutDetails('EC-8CV52298TL785690V');
	//var get = url.decode(getE.body);

	//var doE = yield api.DoExpressCheckoutPayment(get.TOKEN, get.PAYERID);
	//var dop = url.decode(doE.body);
	//console.log(dop);

}).catch(function (err) {
	console.error(err);
});