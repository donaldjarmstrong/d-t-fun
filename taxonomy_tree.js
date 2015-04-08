var _ = require('lodash');

var f = {
	"store_product_type_hierarchy": {
		"node": {
			"id": "0L",
			"description": "GROCERY",
			"type_code": "PROD_TYPE",
			"node": {
				"id": "00A",
				"description": "BEVERAGE",
				"type_code": "PROD_STYPE",
				"node": {
					"id": "000G",
					"description": "coffee, tea and chocolate drinks",
					"type_code": "MDSE_TYPE",
					"node": {
						"id": "027Q",
						"description": "tea beverage",
						"type_code": "ITEM_TYPE"
					}
				}
			}
		}
	}
};

function buildTags (accum, node) {
	accum.push(node.description.toLowerCase());
	if (node.node) {
		return buildTags(accum, node.node);
	} else {
		return accum;
	}
}

var tags = buildTags([], f.store_product_type_hierarchy.node);
console.log(tags);