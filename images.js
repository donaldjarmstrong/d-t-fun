var _ = require('lodash');

var v3APIProduct = {
	"image": {
		"internal_primary_image_urls": [
			"http://scene7.targetimg1.com/is/image/Target/12953662?wid=410&hei=412"
		],
		"internal_alt_image_url": [
			"http://scene7.targetimg1.com/is/image/Target/12953662?wid=410&hei=410"
		],
		"internal_thumbnail_image_url": null,
		"internal_swatch_image_url": [
			"http://scene7.targetimg1.com/is/image/Target?layer=0&size=40,40&layer=1&src=12953662"
		],
		"external_primary_image_url": [
			"http://scene7.targetimg1.com/is/image/Target/12953662?wid=410&hei=410",
			"http://scene7.targetimg1.com/is/image/Target/12953662?wid=410&hei=411"
		],
		"external_alt_image_url": [
			"http://scene7.targetimg1.com/is/image/Target/12953662?wid=410&hei=410"
		]
	}
};

var g = {
	images: (
		_.has(v3APIProduct, 'image')
			?
			_.result(v3APIProduct.image, 'external_primary_image_url',
				_.result(v3APIProduct.image, 'internal_primary_image_url', [])
			)
			: []).map(function (image) {
			return {src: image};
		})
};

console.log(g);
