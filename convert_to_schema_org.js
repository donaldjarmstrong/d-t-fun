var api = require('./api.js');
var co = require('co');
var _ = require('lodash');
var readline = require('readline');
var fs = require('fs');
var H = require('highland');

var expectedKeys = ['@context', '@type', 'aggregateRating', 'brand', 'depth', 'gtin13', 'gtin14', 'height', 'itemCondition', 'logo', 'manufacturer', 'model', 'mpn', 'offers', 'productID', 'sku', 'weight', 'width', 'description', 'image', 'name', 'url']

//var file = require("promised-io/fs").open('dpci.txt', 'r');
//file.forEach(function(chunk){
//	console.log('chunk \t' + chunk.toString());
//});

//var rl = readline.createInterface({
//	input: fs.createReadStream('dpci.txt'),
//	output: process.stdout,
//	terminal: false
//});
//
//var apis = [];
//
//rl.on('line', function (line) {
//	apis.push(api.getProductV2(line, 'dpci'));
//});

//co(function *() {
//	var j = yield apis;

	//var lds = rf.map(function (dpci) {
	//	return api.getProductV2(dpci, 'dpci');
	//});
	//
	//var j = yield lds;
	//
//	var k = j.map(createProductFromV2);
//}).catch(function (err) {
//	console.error(err);
//});

//rl.close();

var input = fs.createReadStream('dpci.txt', 'r');
var docs = db.createReadStream();

// or, pipe in a node stream directly:
var through = _.pipeline(_.filter(isBlogpost));
docs.pipe(through).pipe(output);

function findIdentifier(array, identifier) {
	var attr = array.find(function (attribute) {
		return attribute.identifier === identifier;
	});

	if (attr) {
		return attr;
	} else {
		return {value: ['UNDEFINED']};
	}
}

function findName(array, name) {
	var attr = array.find(function (attribute) {
		return attribute.name === name;
	});

	if (attr) {
		return attr;
	} else {
		return {value: ['UNDEFINED']};
	}
}

function createProductFromV2(v2APIReponse) {
	var product = v2APIReponse.body.CatalogEntryView[0];

	try {
		var productLD = {
			"@context": "http://schema.org",
			"@type": "Product",
			aggregateRating: {
				"@type": "AggregateRating",
				ratingValue: product.CustomerReview[0].consolidatedOverallRating,
				reviewCount: product.CustomerReview[0].totalReviews
			},
			//audience: {
			//	"@type": "Audience"
			//},
			brand: {
				"@type": "Brand",
				name: findIdentifier(product.ItemAttributes[0].Attribute, "MANUFACTURING_BRAND").value[0]
			},
			// color: 'red',
			depth: findName(product.PackageDimension, "length").value + ' ' + findName(product.PackageDimension, "length").unit.toLocaleLowerCase(),
			gtin13: (product.UPC.length === 12) ? '0' + product.UPC : product.UPC,
			gtin14: findIdentifier(product.ItemAttributes[0].Attribute, "GTIN").value[0],
			// gtin8: '',
			height: findName(product.PackageDimension, "height").value + ' ' + findName(product.PackageDimension, "height").unit.toLocaleLowerCase(),
			//isAccessoryOrSparePartFor: '',
			//isConsumableFor: '',
			//isRelatedTo: '',
			//isSimilarTo: '',
			itemCondition: 'http://schema.org/NewCondition',
			logo: product.Images[0].ThumbnailImage[0].image,
			manufacturer: {
				"@type": "Organization",
				name: product.manufacturer
			},
			model: findIdentifier(product.ItemAttributes[0].Attribute, "MODEL_NUMBER").value[0],
			mpn: product.manufacturerPartNumber,
			offers: {
				"@type": "Offer",
				availability: "http://schema.org/InStock",
				price: product.Offers[0].OfferPrice[0].priceValue,
				priceCurrency: product.Offers[0].OfferPrice[0].currencyCode
			},
			productID: 'tcin:' + product.partNumber,
			//releaseDate: '',
			// review: {},
			sku: product.DPCI,
			weight: findName(product.PackageDimension, "weight").value + ' ' + findName(product.PackageDimension, "weight").unit.toLocaleLowerCase(),
			width: findName(product.PackageDimension, "width").value + ' ' + findName(product.PackageDimension, "width").unit.toLocaleLowerCase(),

			//
			// from Thing
			//additionalType: '',
			//alternateName: '',
			description: product.shortDescription,
			image: product.Images[0].PrimaryImage[0].image,
			name: product.title,
			//potentialAction: '',
			//sameAs: '',
			url: product.dynamicKitURL
		};
	} catch (err) {
		console.log('Trapped an error reading attributes for DPCI - ', product.DPCI, err);

		return null;
	}

	// compare keys
	var keysDiff = _.difference(Object.keys(productLD), expectedKeys);

	if (keysDiff.length > 0) {
		console.log('Missing properties for DPCI ' + product.DPCI + '{' + keysDiff + '}');
	}

	return productLD;
}

module.exports = {
	createProductFromV2: createProductFromV2
};
