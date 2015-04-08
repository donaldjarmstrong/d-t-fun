var _ = require('lodash');

var v3APIProduct = {
	"image": {
	"internal_primary_image_url": null,
	"internal_alt_image_url": null,
	"internal_thumbnail_image_url": null,
	"internal_swatch_image_url": null,
	"external_primary_image_url": null,
	"external_alt_image_url": null
}};

var x = {
	images: getImages(v3APIProduct)
		.map(function (image) {
			return {src: image};
		})
};

function getImages(product) {
	if (product.image) {
		if (product.image.internal_primary_image_url) {
			return product.image.internal_primary_image_url;
		} else {
			if (product.image.external_primary_image_url) {
				return product.image.external_primary_image_url;
			} else {
				return [];
			}
		}

	} else {
		return [];
	}
}

console.log(x);