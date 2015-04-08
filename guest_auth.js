var api = require('./api');
var co = require('co');

co(function *() {
	var res = yield api.anonymousLogin();
	//var res = yield api.donnieLogin();

	var accessToken = res.body.accessToken;

	// we should have an empty cart
	var cart = yield api.getCart(accessToken);
	if (cart.statusCode !== 204) {
		throw Error('should have an empty cart');
	}

	// check products
	//var pv2 = yield api.getProductV2('231-10-0395');
	var pv2 = yield api.getProductV2('14213687', 'tcin');
	console.log(JSON.stringify(pv2.body));
	var productId = pv2.body.CatalogEntryView[0].catEntryId;

	// check inventory
	//var inv = yield api.checkInventory('231-10-0395', '2376');
	//console.log(JSON.stringify(inv.body));

	//var addToCart = yield api.expressCheckout(accessToken, productId, '2376');
	//if (addToCart.statusCode !== 200) {
	//	throw Error('failed to add item to cart ' + JSON.stringify(addToCart.body))
	//}

	// add something to cart
	//var addToCart = yield api.addToCart(accessToken, productId, '2376');
	var addToCart = yield api.addToCart(accessToken, productId, '1375');
	if (addToCart.statusCode !== 200) {
		throw Error('failed to add item to cart ' + JSON.stringify(addToCart.body))
	}

	//var cd = yield api.getCart(accessToken);
	//console.log(JSON.stringify(cd.body));
	//var orderItemId = cd.body.orderItem[0].orderItemId;

	//var shippingDetails = yield api.getCartItemShippingDetails(accessToken, orderItemId);
	//console.log(JSON.stringify(shippingDetails.body));

	//var pu = yield api.setPickupContact(accessToken, 'firstName', 'lastName', 'email@address.com', '7776665555');

	//var t = yield api.addTender(accessToken);

	//
	//var tax = yield api.addTax(accessToken);
	//console.log(JSON.stringify(tax.body));

	//var apl = yield api.getAppliedShippingInfo(accessToken);
	//console.log(JSON.stringify(apl.body));

	//var g = yield api.getPickupContacts(accessToken);
	//console.log(g.body);

	//var shipModeId = shippingDetails.body.orderItem[0].usableShippingMode[1].shippingModes[0].shipModeId;

	//var fm = yield api.updateShippingAddress(accessToken);
	//console.log(fm.body);

	//var sd = yield api.setShippingDetails(accessToken, orderItemId, shipModeId);
	//console.log(sd.body);

	//var sp = yield api.setStorePickupOnCartItem(accessToken, 10151, orderItemId);
	//console.log(sp.body);

	var pp = yield api.initiatePaypalToken(accessToken);
	console.log(JSON.stringify(pp.body));

	// this piece of shit call breaks the basket
	//var ic = yield api.initiateCheckout(accessToken);
	//console.log(ic.body);

	var ut = yield api.getUsableTender(accessToken);
	console.log(JSON.stringify(ut.body));

	var cd = yield api.getCart(accessToken);
	console.log(JSON.stringify(cd.body));

	//var checkout = yield api.checkout(accessToken);
	//console.log(checkout.body);

}).catch(function (err) {
	console.error(err);
});