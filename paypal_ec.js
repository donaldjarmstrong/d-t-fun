var request = require('co-request');

function SetExpressCheckout() {
	return request({
		method: 'POST',
		form: {
			USER: 'donaldjarmstrong-facilitator_api1.gmail.com',
			PWD: 'LVH9Q6TZCASNU8AJ',
			SIGNATURE: 'AZhwnzb1juKwtWIEVLEmtD5sRkBTANlW2JeAZN83.aSq1Nc38wZSUQib',
			METHOD: 'SetExpressCheckout',
			VERSION: '119',
			PAYMENTREQUEST_0_AMT:'10',
			PAYMENTREQUEST_0_CURRENCYCODE:'USD',
			PAYMENTREQUEST_0_ITEMAMT: '9',
			PAYMENTREQUEST_0_PAYMENTACTION:'Authorization',
			PAYMENTREQUEST_0_SHIPPINGAMT: '.50',
			PAYMENTREQUEST_0_TAXAMT: '.50',
			PAYMENTREQUEST_0_DESC: 'A sweet basket',
			PAYMENTREQUEST_n_CUSTOM: 'sweet basket vendor notes',
			L_PAYMENTREQUEST_0_NAME0: 'A sweet product',
			L_PAYMENTREQUEST_0_AMT0: '9',
			L_PAYMENTREQUEST_0_NUMBER0: '123123',
			L_PAYMENTREQUEST_0_QTY0: '1',
			L_PAYMENTREQUEST_0_TAXAMT0: '.50',

			// already existing
			CANCELURL:'https://bird-squalid.usefinch.us/cancel.html',
			RETURNURL:'https://bird-squalid.usefinch.us/success.html',

			// mandatory
			SOLUTIONTYPE: 'Sole',
			LANDINGPAGE: 'Billing',
			BRANDNAME: 'Yo Yo', // <--- this cannot be target.com as it is on the main site
			CUSTOMERSERVICENUMBER: '1-800-buy-cars',
			NOSHIPPING: '1',
			EMAIL: 'fred@jack.com',

			// optional, desired
			//PAGESTYLE: 'donniestyle', // <--- this will need paypal login help to build

			// OR
			LOGOIMG: 'http://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/042011/new_york_rangers__20607.png',
			CARTBORDERCOLOR: 'FF6666',
			HDRIMG: 'https://www.epicseats.com/images_user/minnesota_wild_header.jpg',
			HDRBORDERCOLOR: '0099CC',
			HDRBACKCOLOR: '339966',
			PAYFLOWCOLOR: 'FFCC99',

			LOCALECODE: 'en_US',
			ALLOWNOTE: '1' // <-- will WCS handle this field?,
		},
		url: 'https://api-3t.sandbox.paypal.com/nvp'
	});
}

function GetExpressCheckoutDetails(token) {
	return request({
		method: 'POST',
		form: {
			USER: 'donaldjarmstrong-facilitator_api1.gmail.com',
			PWD: 'LVH9Q6TZCASNU8AJ',
			SIGNATURE: 'AZhwnzb1juKwtWIEVLEmtD5sRkBTANlW2JeAZN83.aSq1Nc38wZSUQib',
			METHOD: 'GetExpressCheckoutDetails',
			VERSION: '119',
			TOKEN: token
		},
		url: 'https://api-3t.sandbox.paypal.com/nvp'
	});
}

function DoExpressCheckoutPayment(token, payerId) {
	return request({
		method: 'POST',
		form: {
			USER: 'donaldjarmstrong-facilitator_api1.gmail.com',
			PWD: 'LVH9Q6TZCASNU8AJ',
			SIGNATURE: 'AZhwnzb1juKwtWIEVLEmtD5sRkBTANlW2JeAZN83.aSq1Nc38wZSUQib',
			METHOD: 'DoExpressCheckoutPayment',
			VERSION: '119',
			PAYERID: payerId,
			TOKEN: token,
			PAYMENTREQUEST_0_AMT: '10'
		},
		url: 'https://api-3t.sandbox.paypal.com/nvp'
	});
}
module.exports = {
	SetExpressCheckout: SetExpressCheckout,
	GetExpressCheckoutDetails: GetExpressCheckoutDetails,
	DoExpressCheckoutPayment:DoExpressCheckoutPayment
};