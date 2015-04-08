var api = require('./api');
var co = require('co');

co(function *() {
	var p = yield api.getProductV2('14213687', 'tcin');
	console.log(JSON.stringify(p.body));
});
