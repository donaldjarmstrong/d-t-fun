var _ = require('lodash');

var f = {
	"classification_hierarchy": [
		{
			"type_code": "prod",
			"node": {
				"id": "0L",
				"description": "GROCERY",
				"status_code": "ACTV",
				"node": {
					"id": "012",
					"description": "VEGETABLES AND FRUITS",
					"status_code": "ACTV",
					"node": {
						"id": "0001",
						"description": "fruit and vegetables",
						"status_code": "ACTV",
						"node": {
							"id": "028P",
							"description": "fruit",
							"status_code": "ACTV"
						}
					}
				}
			}
		},
		{
			"type_code": "merch",
			"node": {
				"id": "0010",
				"description": "GROCERY",
				"node": {
					"id": "0030",
					"description": "PERISHABLES",
					"node": {
						"id": "0062",
						"description": "PRODUCE",
						"node": {
							"id": "267",
							"description": "BULK FRUIT",
							"status_code": "ACTV",
							"node": {
								"id": "00",
								"description": "BANANAS",
								"status_code": "ACTV",
								"node": {
									"id": "0001",
									"description": "BANANAS",
									"status_code": "ACTV",
									"node": {
										"id": "AAA00",
										"description": "BULK",
										"status_code": "ACTV"
									}
								}
							}
						}
					}
				}
			}
		},
		{
			"type_code": "gpc",
			"node": {
				"id": "000000226",
				"description": "Food/Beverage/Tobacco",
				"node": {
					"id": "000000311",
					"description": "Fruits - Unprepared/Unprocessed (Fresh)",
					"node": {
						"id": "000001729",
						"description": "Bananas",
						"node": {
							"id": "000009094",
							"description": "Bananas"
						}
					}
				}
			}
		}
	]
};

var o = {
	"type_code": "prod",
	"node": {
		"id": "0L",
		"description": "GROCERY",
		"status_code": "ACTV",
		"node": {
			"id": "013",
			"description": "BAKERY AND DESSERTS",
			"status_code": "ACTV",
			"node": {
				"id": "0004",
				"description": "cookies, brownies and bars",
				"status_code": "ACTV",
				"node": {
					"id": "02AY",
					"description": "cookies and bars",
					"status_code": "ACTV"
				}
			}
		}
	}
};

function getNode(node) {
	if (node.node) {
		return getNode(node.node);
	} else {
		return node;
	}
}

var h = {
	"unstructured_data3": {
		"image": [
			{
				"use_type_code": "ITEM",
				"file_name": "http://imn.target.com/imnimages/8/5/18/000000011238518_003.png",
				"image_resolution": "200X200",
				"file_size": "2000",
				"is_thumbnail": false,
				"is_primary": false
			},
			{
				"use_type_code": "ITEM",
				"file_name": "http://imn.target.com/imnimages/8/5/18/000000011238518_003_004.jpg",
				"image_resolution": "100X100",
				"file_size": "1000",
				"is_thumbnail": true,
				"is_primary": false
			},
			{
				"use_type_code": "ITEM",
				"file_name": "http://imn.target.com/imnimages/0000000011238518_00005.jpg",
				"image_resolution": "759X956",
				"file_size": "112127",
				"is_thumbnail": false,
				"is_primary": true
			},
			{
				"use_type_code": "ITEM",
				"file_name": "http://imn.target.com/imnimages/0000000011238518_00005_00006.jpg",
				"image_resolution": null,
				"file_size": "",
				"is_thumbnail": true,
				"is_primary": true
			}
		]
	},
	"images": {
		"internal_primary_image_url": [
			"http://scene7.targetimg1.com/is/image/Target/12959727?wid=410&hei=410"
		],
		"internal_alt_image_url": [
			"http://scene7.targetimg1.com/is/image/Target/12959727?wid=410&hei=410"
		],
		"internal_thumbnail_image_url": null,
		"internal_swatch_image_url": [
			"http://scene7.targetimg1.com/is/image/Target?layer=0&size=40,40&layer=1&src=12959727"
		],
		"external_primary_image_url": [
			"http://scene7.targetimg1.com/is/image/Target/12959727?wid=410&hei=410"
		],
		"external_alt_image_url": [
			"http://scene7.targetimg1.com/is/image/Target/12959727?wid=410&hei=410"
		]
	}
};

var j = {
	"alternate_descriptiond": [
		{
			"type": "ADSG",
			"value": "Beats by Dre on-the-ear headphones",
			"type_description": "Ad Signage Description"
		},
		{
			"type": "POS",
			"value": "BEATS BY DRE",
			"type_description": "POS Desc"
		},
		{
			"type": "SHLF",
			"value": "SOLO 2 DARK BLUE",
			"type_description": "Shelf Desc"
		},
		{
			"type": "VEND",
			"value": "Beats Solo 2 Dark Blue",
			"type_description": "Vendor Description"
		},
		{
			"type": "DETL",
			"value": "Titanium-coated driver technology ensures Beats Solo HD on-ear headphones preserve sound and accurately reproduce all the details of your music. Every pair is constructed of durable, flexible material, and reinforced with a metal strip. The unique folding design makes these headphones perfect for life on the road. Switch easily between songs and incoming calls with the matching in-line control and mic.",
			"type_description": "Online Detailed Description"
		}
	]
};

var dim = {
	"packaging_level_code": "ITEM",
	"weight": 1,
	"weight_unit_of_measure_code": "POUND",
	"height": 1,
	"width": 1,
	"depth": 1,
	"dimension_unit_of_measure_code": "INCH",
	"displayed_weight_unit_of_measure_code": "",
	"net_contents": 14.3,
	"unit_package_quantity": 1,
	"units_per_package_unit_of_measure_code": "",
	"net_contents_unit_of_measure_code": "OUNCE"
};

var sp = {
	"store_product": [
		{
			"location_data": {
				"location_id": 2370,
				"status_code": "A",
				"status_update_date": "2009-05-12T05:00:00Z",
				"expected_inventory_outage": null,
				"is_product_recalled_for_store": false,
				"is_pos_weight_required": false,
				"tare_weight_code": null
			},
			"price": {
				"current_price_type_code": null,
				"current_price": null,
				"original_price": 2.49,
				"display_original_price": "2.49"
			},
			"tax_classification_code": "F",
			"selling_constraint": [
				{
					"compliance_program_code": "UPRUOM",
					"value": "POUND"
				}
			],
			"flexible_fulfillment_capability": {
				"is_hold": false,
				"is_ship_to_guest": false,
				"is_rush": false,
				"is_ship_to_store": false
			},
			"inventory_determination_indicator": 0,
			"is_kill_switch_enabled": false
		}
	]
};

var us = {
	"images": {
		"internal_primary_image_url": [
			"http://scene7.targetimg1.com/is/image/Target/14770107?wid=410&hei=410"
		],
		"internal_alt_image_url": [
			"http://scene7.targetimg1.com/is/image/Target/14770107?wid=410&hei=410"
		],
		"internal_thumbnail_image_url": null,
		"internal_swatch_image_url": [
			"http://scene7.targetimg1.com/is/image/Target?layer=0&size=40,40&layer=1&src=14770107"
		],
		"external_primary_image_url": [
			"http://scene7.targetimg1.com/is/image/Target/14770107?wid=410&hei=410"
		],
		"external_alt_image_url": [
			"http://scene7.targetimg1.com/is/image/Target/14770107?wid=410&hei=410"
		]
	},
	"unstructured_data": {
		"image": [
			{
				"use_type_code": "ITEM",
				"file_name": "http://imn.target.com/imnimages/6/8/17/000000011316817_001.png",
				"image_resolution": "200X200",
				"file_size": "2000",
				"is_thumbnail": false,
				"is_primary": true
			},
			{
				"use_type_code": "ITEM",
				"file_name": "http://imn.target.com/imnimages/6/8/17/000000011316817_001_002.jpg",
				"image_resolution": "100X100",
				"file_size": "1000",
				"is_thumbnail": true,
				"is_primary": true
			}
		]
	}
}

var dpciRe = /^([0-9]{3}-[0-9]{2}-[0-9]{4}).*/g;
var dpciAr = dpciRe.exec('321-32-4312')


console.log( dpci
);