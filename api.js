var request = require('co-request');

function anonymousLogin() {
	return request({
		method: 'POST',
		json: true,
		url: 'https://secure-api.target.com/guests/v3/auth',
		qs: {key: 'e4NPJGmwANZ4lF1dYsRAPBAPGM8fEdpK'}
	});
}

function donnieLogin() {
	return request({
		method: 'POST',
		json: {logonId: 'donaldjarmstrong@gmail.com', logonPassword: 'Gophers2'},
		url: 'https://secure-api.target.com/guests/v3/auth',
		qs: {key: 'e4NPJGmwANZ4lF1dYsRAPBAPGM8fEdpK'}
	});
}

function getOrderReview(accessToken) {
	return request({
		method: 'GET',
		gzip: true,
		json: true,
		url: 'https://secure-api.target.com/carts/v2/order_review',
		qs: {key: 'e4NPJGmwANZ4lF1dYsRAPBAPGM8fEdpK'},
		auth: {bearer: accessToken}
	});
}

function getCart(accessToken) {
	return request({
		method: 'GET',
		gzip: true,
		json: true,
		url: 'https://secure-api.target.com/carts/v2/cart',
		qs: {key: 'e4NPJGmwANZ4lF1dYsRAPBAPGM8fEdpK', merge: 'N'},
		auth: {bearer: accessToken}
	});
}

function addToCart(accessToken, productId, storeId) {
	return request({
		method: 'POST',
		gzip: true,
		json: {productId: productId, quantity: '1', pickUpStoreId: storeId},
		url: 'https://secure-api.target.com/carts/v2/products',
		qs: {key: 'e4NPJGmwANZ4lF1dYsRAPBAPGM8fEdpK'},
		auth: {bearer: accessToken}
	});
}

function addPaypalToken(accessToken, paypalToken) {
	return request({
		method: 'POST',
		gzip: true,
		json: {},
		url: 'https://secure-api.target.com/carts/v2/paypal',
		qs: {key: 'e4NPJGmwANZ4lF1dYsRAPBAPGM8fEdpK'},
		auth: {bearer: accessToken}
	});
}

function getPaypalToken(accessToken) {
	return request({
		method: 'GET',
		gzip: true,
		json: true,
		url: 'https://secure-api.target.com/carts/v2/paypal',
		qs: {key: 'e4NPJGmwANZ4lF1dYsRAPBAPGM8fEdpK', returnURL :'https://foamy-cow.usefinch.us/return', cancelURL: 'https://foamy-cow.usefinch.us/cancel'},
		auth: {bearer: accessToken}
	});
}

function initiatePaypalToken(accessToken) {
	return request({
		method: 'PUT',
		gzip: true,
		json: {returnURL :'https://foamy-cow.usefinch.us/return', cancelURL: 'https://foamy-cow.usefinch.us/cancel', channel: 'BTS'},
		url: 'https://secure-api.target.com/carts/v2/paypal',
		qs: {key: 'e4NPJGmwANZ4lF1dYsRAPBAPGM8fEdpK'},
		auth: {bearer: accessToken}
	});
}

function initiateCheckout(accessToken) {
	return request({
		method: 'PUT',
		gzip: true,
		json: {},
		url: 'https://secure-api.target.com/carts/v2/initiate_checkout',
		qs: {key: 'e4NPJGmwANZ4lF1dYsRAPBAPGM8fEdpK', responseGroup: 'orderReview'},
		auth: {bearer: accessToken}
	});
}

function checkout(accessToken) {
	return request({
		method: 'POST',
		gzip: true,
		json: {},
		url: 'https://secure-api.target.com/carts/v2/checkout',
		qs: {key: 'e4NPJGmwANZ4lF1dYsRAPBAPGM8fEdpK'},
		auth: {bearer: accessToken}
	});
}

function cancelOrder(accessToken, orderNo, orderItemId) {
	return request({
		method: 'PUT',
		gzip: true,
		json: {"orderNumber": orderNo, "orderItemId": [orderItemId]},
		url: 'https://secure-api.target.com/orders/v1',
		qs: {key: 'e4NPJGmwANZ4lF1dYsRAPBAPGM8fEdpK'},
		auth: {bearer: accessToken}
	});
}

/*
 { errors:
 [ { errorCode: null,
 errorKey: '_ERR_INVALID_CARDTYPE',
 errorMessage: 'Please enter valid card type. Valid values are? Target Credit Card, Target Visa Credit Card, Target Debit Card, Target Business Card, Visa, MasterCard, American Express, Discover.' } ] }
 */
function addTender(accessToken) {
	return request({
		method: 'POST',
		gzip: true,
		json: {expiryMonth: '08', expiryYear: '2015', firstName: 'Donald', address1: '240 butternut circle', city: 'Carver', phone1: '6125542758', zipCode: '55315', lastName: 'Armstrong', billingStateProvince: 'MN', country: 'USA', cvv: '451', emailId: 'donaldjarmstrong@gmail.com', confirmEmail: 'donaldjarmstrong@gmail.com', cardName: 'Donald Armstrong', cardType: 'Visa', cardNumber: '4856200232582182'},
		url: 'https://secure-api.target.com/carts/v2/tenders',
		qs: {key: 'e4NPJGmwANZ4lF1dYsRAPBAPGM8fEdpK'},
		auth: {bearer: accessToken}
	});
}

///carts/v2/applied_tenders
function getTender(accessToken) {
	return request({
		method: 'GET',
		gzip: true,
		json: true,
		url: 'https://secure-api.target.com/carts/v2/applied_tenders',
		qs: {key: 'e4NPJGmwANZ4lF1dYsRAPBAPGM8fEdpK'},
		auth: {bearer: accessToken}
	});
}

///carts/v2/usable_tenders
function getUsableTender(accessToken) {
	return request({
		method: 'GET',
		gzip: true,
		json: true,
		url: 'https://secure-api.target.com/carts/v2/usable_tenders',
		qs: {key: 'e4NPJGmwANZ4lF1dYsRAPBAPGM8fEdpK'},
		auth: {bearer: accessToken}
	});
}

function addTax(accessToken) {
	return request({
		method: 'POST',
		gzip: true,
		json: { "zipCode":"34201" },
		url: 'https://secure-api.target.com/carts/v2/tax',
		qs: {key: 'e4NPJGmwANZ4lF1dYsRAPBAPGM8fEdpK'},
		auth: {bearer: accessToken}
	});
}

function getProduct(id, idType) {
	return request({
		method: 'GET',
		gzip: true,
		json: true,
		url: 'https://api.target.com/products/v3/' + id,
		qs: {key: 'satWWPMVdrDYR2fsLeu8iGaA99QHbkBY', store_id: '2366', id_type: idType, fields: 'ids , descriptions , pricing , availability , in_store_locations , images , internal_images , item_hierarchies , product_hierarchies , variations , reviews , user_attributes , color , size , pattern , license_asset , vendor , extended_core , pos_messages , geographic_compliance , recall , dimensions , brand , relations , entertainment , restrictions , locations , nutrients, , flexible_fulfillment, environmental, pharmacy, limited_segment, prepaid'}
	});
}

function getProductV2(id, idType) {
	return request({
		method: 'GET',
		gzip: true,
		json: true,
		url: 'https://api.target.com/v2/products/' + id,
		qs: {key: 'satWWPMVdrDYR2fsLeu8iGaA99QHbkBY', idType: idType}
	});
}

function getAppliedShippingInfo(accessToken) {
	return request({
		method: 'GET',
		gzip: true,
		json: true,
		url: 'https://secure-api.target.com/carts/v2/applied_shipping_address',
		qs: {key: 'e4NPJGmwANZ4lF1dYsRAPBAPGM8fEdpK'},
		auth: {bearer: accessToken}
	});
}

function checkInventory(dpci, storeId) {
	return request({
		method: 'POST',
		gzip: true,
		json: {
			"products": [
				{
					"product_id": dpci,
					"desired_quantity": 1
				}
			],
			"stores": [{
				"store_id": storeId
			}]
		},
		url: 'https://api.target.com/products/v3/saleable_quantity_by_location',
		qs: {key: 'satWWPMVdrDYR2fsLeu8iGaA99QHbkBY'}
	});

}

function getCartItemShippingDetails(accessToken, productOrderId) {
	return request({
		method: 'GET',
		gzip: true,
		json: true,
		url: 'https://secure-api.target.com/carts/v2/products/' + productOrderId + '/shipping_methods',
		qs: {key: 'e4NPJGmwANZ4lF1dYsRAPBAPGM8fEdpK'},
		auth: {bearer: accessToken}
	});
}

function setShippingDetails(accessToken, productOrderId, shipModeId) {
	return request({
		method: 'POST',
		gzip: true,
		json: {"orderItem": [{"orderItemId": productOrderId, "shipModeId": shipModeId}]},
		url: 'https://secure-api.target.com/carts/v2/shipping_details',
		qs: {key: 'e4NPJGmwANZ4lF1dYsRAPBAPGM8fEdpK'},
		auth: {bearer: accessToken}
	});
}

function updateShippingAddress(accessToken) {
	return request({
		method: 'PUT',
		gzip: true,
		json: {},
		url: 'https://secure-api.target.com/carts/v2/shipping_address',
		qs: {key: 'e4NPJGmwANZ4lF1dYsRAPBAPGM8fEdpK', addressId: '2768', storeId: '10151'},
		auth: {bearer: accessToken}
	});
}

function updateCartFulfillmentMethod(accessToken, productOrderId, storeId) {
	return request({
		method: 'POST',
		gzip: true,
		json: {"orderItemId": productOrderId, "pickUpStoreId": storeId},
		url: 'https://secure-api.target.com/carts/v1/fullfillment_method',
		qs: {key: 'e4NPJGmwANZ4lF1dYsRAPBAPGM8fEdpK'},
		auth: {bearer: accessToken}
	});
}

function setPickupContact(accessToken, firstName, lastName, emailAddress, mobile) {
	return request({
		method: 'PUT',
		gzip: true,
		json: {
			"emailId": emailAddress,
			"mobile": mobile,
			"selfAddress": "N",
			"firstName": firstName,
			"lastName": lastName
		},
		url: 'https://secure-api.target.com/carts/v2/pickup_contacts',
		qs: {key: 'e4NPJGmwANZ4lF1dYsRAPBAPGM8fEdpK'},
		auth: {bearer: accessToken}
	});
}

function getPickupContacts(accessToken) {
	return request({
		method: 'GET',
		gzip: true,
		json: true,
		url: 'https://secure-api.target.com/carts/v2/pickup_contacts',
		qs: {key: 'e4NPJGmwANZ4lF1dYsRAPBAPGM8fEdpK'},
		auth: {bearer: accessToken}
	});
}

module.exports = {
	anonymousLogin: anonymousLogin,
	donnieLogin: donnieLogin,
	getCart: getCart,
	addToCart: addToCart,
	checkout: checkout,
	updateCartFulfillmentMethod: updateCartFulfillmentMethod,
	updateShippingAddress: updateShippingAddress,
	checkInventory: checkInventory,
	getProduct: getProduct,
	cancelOrder: cancelOrder,
	getProductV2: getProductV2,
	getPickupContacts: getPickupContacts,
	setPickupContact: setPickupContact,
	getAppliedShippingInfo: getAppliedShippingInfo,
	getCartItemShippingDetails: getCartItemShippingDetails,
	setShippingDetails: setShippingDetails,
	addTender: addTender,
	getTender:getTender,
	getUsableTender:getUsableTender,
	getPaypalToken:getPaypalToken,
	addPaypalToken: addPaypalToken,
	addTax:addTax,
	initiateCheckout: initiateCheckout,
	getOrderReview:getOrderReview,
	initiatePaypalToken:initiatePaypalToken
};
