var _ = require('lodash');

var order = {
	"target": {
		"order_lines": [
			{
				"sku": "007-07-0188",
				"description": "PAMPERS Pop-up Package 56 ct",
				"ordered_qty": 1,
				"available_qty": 0,
				"uom": "ea",
				"locations": [
					{
						"block": "N",
						"aisle": 21,
						"block_aisle": "N-21",
						"floor": "01",
						"section": 1,
						"smart_schematic": "1-3-1"
					}
				],
				"image": {
					"created_at": "2015-03-20T12:38:29-05:00",
					"id": 1180834241,
					"position": 1,
					"product_id": 431421461,
					"updated_at": "2015-03-20T12:38:29-05:00",
					"src": "https://cdn.shopify.com/s/files/1/0790/7593/products/15033867_wid_410_hei_410.jpeg?v=1426873109",
					"variant_ids": []
				},
				"flags": {
					"noInventory": true
				}
			},
			{
				"sku": "007-01-0101",
				"description": "up&up 44ct size 1 small pack",
				"ordered_qty": 1,
				"available_qty": 7,
				"uom": "ea",
				"locations": [
					{
						"block": "N",
						"aisle": 22,
						"block_aisle": "N-22",
						"floor": "01",
						"section": 1,
						"smart_schematic": "6-3-1.01"
					}
				],
				"image": {
					"created_at": "2015-03-20T12:38:49-05:00",
					"id": 1180834929,
					"position": 1,
					"product_id": 431421913,
					"updated_at": "2015-03-20T12:38:49-05:00",
					"src": "https://cdn.shopify.com/s/files/1/0790/7593/products/16313655_wid_410_hei_410.jpeg?v=1426873129",
					"variant_ids": []
				},
				"flags": {}
			},
			{
				"sku": "284-04-0314",
				"description": "SIMPLY       LEMONADE 59OZ",
				"ordered_qty": 1,
				"available_qty": 12,
				"uom": "ea",
				"locations": [
					{
						"block": "G",
						"aisle": 53,
						"block_aisle": "G-53",
						"floor": "01",
						"section": 3,
						"smart_schematic": "4-4-1"
					}
				],
				"image": {
					"created_at": "2015-03-20T12:13:08-05:00",
					"id": 1180782525,
					"position": 1,
					"product_id": 431392721,
					"updated_at": "2015-03-20T12:13:08-05:00",
					"src": "https://cdn.shopify.com/s/files/1/0790/7593/products/13183166_wid_410_hei_410.jpeg?v=1426871588",
					"variant_ids": []
				},
				"flags": {}
			},
			{
				"sku": "266-05-0104",
				"description": "AF 3LB HONEYCRISP APPLES",
				"ordered_qty": 1,
				"available_qty": 1,
				"uom": "ea",
				"locations": [
					{
						"block": "G",
						"aisle": 8,
						"block_aisle": "G-8",
						"floor": "01",
						"section": 1,
						"smart_schematic": "1-2-1.05"
					}
				],
				"flags": {}
			},
			{
				"sku": "071-20-0094",
				"description": "7.4-oz. Quaker Chewy Big Bar Chocolate Chip",
				"ordered_qty": 1,
				"available_qty": 13,
				"uom": "ea",
				"locations": [
					{
						"block": "G",
						"aisle": 38,
						"block_aisle": "G-38",
						"floor": "01",
						"section": 1,
						"smart_schematic": "3-6-1.01"
					}
				],
				"image": {
					"created_at": "2015-03-20T11:31:01-05:00",
					"id": 1180718265,
					"position": 1,
					"product_id": 431356709,
					"updated_at": "2015-03-20T11:31:01-05:00",
					"src": "https://cdn.shopify.com/s/files/1/0790/7593/products/14432429_wid_410_hei_410.jpeg?v=1426869061",
					"variant_ids": []
				},
				"flags": {}
			},
			{
				"sku": "071-10-0312",
				"description": "Wheat Thins Garlic Pita Chips 9.1 oz",
				"ordered_qty": 1,
				"available_qty": 0,
				"uom": "ea",
				"locations": [
					{
						"block": "G",
						"aisle": 39,
						"block_aisle": "G-39",
						"floor": "01",
						"section": 5,
						"smart_schematic": "2-4-2.02"
					}
				],
				"flags": {
					"noInventory": true
				}
			},
			{
				"sku": "212-18-0127",
				"description": "CAMPBELLS    FAMILY CHKN NDLE 22.4 OZ",
				"ordered_qty": 1,
				"available_qty": 14,
				"uom": "ea",
				"locations": [
					{
						"block": "G",
						"aisle": 21,
						"block_aisle": "G-21",
						"floor": "01",
						"section": 1,
						"smart_schematic": "1-3-3"
					}
				],
				"image": {
					"created_at": "2015-03-20T11:48:10-05:00",
					"id": 1180742153,
					"position": 1,
					"product_id": 431369145,
					"updated_at": "2015-03-20T11:48:10-05:00",
					"src": "https://cdn.shopify.com/s/files/1/0790/7593/products/14767601_wid_410_hei_410.jpeg?v=1426870090",
					"variant_ids": []
				},
				"flags": {}
			},
			{
				"sku": "288-07-3100",
				"description": "MP ICE CREAM 48-OZ. CHOCOLATE",
				"ordered_qty": 1,
				"available_qty": null,
				"uom": "ea",
				"locations": [
					{
						"block": "G",
						"aisle": 52,
						"block_aisle": "G-52",
						"floor": "01",
						"section": 1,
						"smart_schematic": "4-3-1.01"
					}
				],
				"image": {
					"created_at": "2015-03-20T12:02:56-05:00",
					"id": 1180766365,
					"position": 1,
					"product_id": 431384069,
					"updated_at": "2015-03-20T12:02:56-05:00",
					"src": "https://cdn.shopify.com/s/files/1/0790/7593/products/13473632_wid_410_hei_410.jpeg?v=1426870976",
					"variant_ids": []
				},
				"flags": {
					"noInventory": true
				}
			},
			{
				"sku": "284-10-0758",
				"description": "STONYFIELD   YOKDS SQZR CHRY 8PK2OZ",
				"ordered_qty": 1,
				"available_qty": 2,
				"uom": "ea",
				"locations": [
					{
						"block": "G",
						"aisle": 6,
						"block_aisle": "G-6",
						"floor": "01",
						"section": 5,
						"smart_schematic": "1-5-3"
					}
				],
				"image": {
					"created_at": "2015-03-20T12:08:06-05:00",
					"id": 1180773053,
					"position": 1,
					"product_id": 431387957,
					"updated_at": "2015-03-20T12:08:06-05:00",
					"src": "https://cdn.shopify.com/s/files/1/0790/7593/products/13473201_wid_410_hei_410.jpeg?v=1426871286",
					"variant_ids": []
				},
				"flags": {}
			},
			{
				"sku": "271-10-0624",
				"description": "COKE CHERRY  2 LITER",
				"ordered_qty": 1,
				"available_qty": 1,
				"uom": "ea",
				"locations": [
					{
						"block": "G",
						"aisle": 33,
						"block_aisle": "G-33",
						"floor": "01",
						"section": 1,
						"smart_schematic": "2-4-3"
					}
				],
				"image": {
					"created_at": "2015-03-20T12:14:08-05:00",
					"id": 1180784613,
					"position": 1,
					"product_id": 431393809,
					"updated_at": "2015-03-20T12:14:08-05:00",
					"src": "https://cdn.shopify.com/s/files/1/0790/7593/products/12959414_wid_410_hei_410.jpeg?v=1426871648",
					"variant_ids": []
				},
				"flags": {}
			},
			{
				"sku": "231-16-1368",
				"description": "SWISS MISS   COCOA DIET 8CT",
				"ordered_qty": 1,
				"available_qty": 7,
				"uom": "ea",
				"locations": [
					{
						"block": "G",
						"aisle": 27,
						"block_aisle": "G-27",
						"floor": "01",
						"section": 1,
						"smart_schematic": "4-6-2"
					}
				],
				"image": {
					"created_at": "2015-03-20T12:21:27-05:00",
					"id": 1180802005,
					"position": 1,
					"product_id": 431403293,
					"updated_at": "2015-03-20T12:21:27-05:00",
					"src": "https://cdn.shopify.com/s/files/1/0790/7593/products/12935982_wid_410_hei_410.jpeg?v=1426872087",
					"variant_ids": []
				},
				"flags": {}
			},
			{
				"sku": "210-05-0025",
				"description": "TYSON        22OZ. GRLD CHICKN BRST",
				"ordered_qty": 1,
				"available_qty": 4,
				"uom": "ea",
				"locations": [
					{
						"block": "G",
						"aisle": 16,
						"block_aisle": "G-16",
						"floor": "01",
						"section": 3,
						"smart_schematic": "3-5-2"
					}
				],
				"image": {
					"created_at": "2015-03-20T11:44:26-05:00",
					"id": 1180735465,
					"position": 1,
					"product_id": 431365337,
					"updated_at": "2015-03-20T11:44:26-05:00",
					"src": "https://cdn.shopify.com/s/files/1/0790/7593/products/14777799_wid_410_hei_410.jpeg?v=1426869866",
					"variant_ids": []
				},
				"flags": {}
			},
			{
				"sku": "210-05-0132",
				"description": "Tyson 14oz Gluten Free Chicken Breast Strips",
				"ordered_qty": 1,
				"available_qty": 10,
				"uom": "ea",
				"locations": [
					{
						"block": "G",
						"aisle": 16,
						"block_aisle": "G-16",
						"floor": "01",
						"section": 3,
						"smart_schematic": "3-3-1"
					}
				],
				"image": {
					"created_at": "2015-03-20T11:44:26-05:00",
					"id": 1180735481,
					"position": 1,
					"product_id": 431365349,
					"updated_at": "2015-03-20T11:44:26-05:00",
					"src": "https://cdn.shopify.com/s/files/1/0790/7593/products/14870121_wid_410_hei_410.jpeg?v=1426869866",
					"variant_ids": []
				},
				"flags": {}
			},
			{
				"sku": "071-20-0138",
				"description": "10.4-oz. Kellogg's Nutrigrain Stawberry 8ct",
				"ordered_qty": 1,
				"available_qty": 46,
				"uom": "ea",
				"locations": [
					{
						"block": "G",
						"aisle": 38,
						"block_aisle": "G-38",
						"floor": "01",
						"section": 1,
						"smart_schematic": "4-4-2.03"
					},
					{
						"block": "G",
						"aisle": 38,
						"block_aisle": "G-38",
						"floor": "01",
						"section": 1,
						"smart_schematic": "4-3-1.01"
					}
				],
				"image": {
					"created_at": "2015-03-20T11:38:08-05:00",
					"id": 1180727513,
					"position": 1,
					"product_id": 431361673,
					"updated_at": "2015-03-20T11:38:08-05:00",
					"src": "https://cdn.shopify.com/s/files/1/0790/7593/products/12992474_wid_410_hei_410.jpeg?v=1426869488",
					"variant_ids": []
				},
				"flags": {}
			}
		],
		"reservationId": "ReservationForBasket#1",
		"deliveryDate": "2015-03-26",
		"deliveryTime": "9"
	},
	"shopify": {
		"order": {
			"buyer_accepts_marketing": false,
			"cancel_reason": null,
			"cancelled_at": null,
			"cart_token": "88b90ce234aef1cf2ce1e8088af57dd5",
			"checkout_token": "82b79f58cfde2be855432412d3b84cc1",
			"closed_at": null,
			"confirmed": true,
			"created_at": "2015-03-23T13:18:40-05:00",
			"currency": "USD",
			"device_id": null,
			"email": "donaldjarmstrong@gmail.com",
			"financial_status": "pending",
			"fulfillment_status": null,
			"gateway": "Bill to my room",
			"id": 395010681,
			"landing_site": "/",
			"location_id": null,
			"name": "#1037",
			"note": "These are special instructions for the order",
			"number": 37,
			"processed_at": "2015-03-23T13:18:40-05:00",
			"reference": null,
			"referring_site": "",
			"source_identifier": null,
			"source_url": null,
			"subtotal_price": "52.54",
			"taxes_included": false,
			"test": false,
			"token": "83335ff4bd53372606b816a85d78939b",
			"total_discounts": "0.00",
			"total_line_items_price": "52.54",
			"total_price": "56.15",
			"total_price_usd": "56.15",
			"total_tax": "3.61",
			"total_weight": 8584,
			"updated_at": "2015-03-23T13:18:40-05:00",
			"user_id": null,
			"browser_ip": null,
			"landing_site_ref": null,
			"order_number": 1037,
			"discount_codes": [],
			"note_attributes": [
				{
					"name": "reservationId",
					"value": "ReservationForBasket#1"
				},
				{
					"name": "deliveryDate",
					"value": "2015-03-26"
				},
				{
					"name": "deliveryTime",
					"value": "9"
				}
			],
			"processing_method": "manual",
			"source": "checkout_next",
			"checkout_id": 461830325,
			"source_name": "web",
			"tax_lines": [
				{
					"price": "3.61",
					"rate": 0.06875,
					"title": "MN State Tax"
				}
			],
			"tags": "",
			"line_items": [
				{
					"fulfillment_service": "manual",
					"fulfillment_status": null,
					"gift_card": false,
					"grams": 535,
					"id": 690624945,
					"price": "1.97",
					"product_id": 431421461,
					"quantity": 1,
					"requires_shipping": false,
					"sku": "007-07-0188",
					"taxable": true,
					"title": "Pampers Pop-up Package 56 ct",
					"variant_id": 1136577825,
					"variant_title": "",
					"vendor": "Disney Shop",
					"name": "Pampers Pop-up Package 56 ct",
					"variant_inventory_management": "shopify",
					"properties": [],
					"product_exists": true,
					"fulfillable_quantity": 1,
					"total_discount": "0.00",
					"tax_lines": [
						{
							"price": "0.15",
							"rate": 0.06875,
							"title": "MN State Tax"
						}
					]
				},
				{
					"fulfillment_service": "manual",
					"fulfillment_status": null,
					"gift_card": false,
					"grams": 857,
					"id": 690624949,
					"price": "6.99",
					"product_id": 431421913,
					"quantity": 1,
					"requires_shipping": false,
					"sku": "007-01-0101",
					"taxable": true,
					"title": "up &#38; up&trade; Diapers Small Pack - Size 1 - 44 ct",
					"variant_id": 1136578989,
					"variant_title": "",
					"vendor": "Disney Shop",
					"name": "up &#38; up&trade; Diapers Small Pack - Size 1 - 44 ct",
					"variant_inventory_management": "shopify",
					"properties": [],
					"product_exists": true,
					"fulfillable_quantity": 1,
					"total_discount": "0.00",
					"tax_lines": [
						{
							"price": "0.48",
							"rate": 0.06875,
							"title": "MN State Tax"
						}
					]
				},
				{
					"fulfillment_service": "manual",
					"fulfillment_status": null,
					"gift_card": false,
					"grams": 1669,
					"id": 690624953,
					"price": "2.64",
					"product_id": 431392721,
					"quantity": 1,
					"requires_shipping": false,
					"sku": "284-04-0314",
					"taxable": true,
					"title": "Simply Lemonade 59 oz",
					"variant_id": 1136465945,
					"variant_title": "",
					"vendor": "Disney Shop",
					"name": "Simply Lemonade 59 oz",
					"variant_inventory_management": "shopify",
					"properties": [],
					"product_exists": true,
					"fulfillable_quantity": 1,
					"total_discount": "0.00",
					"tax_lines": [
						{
							"price": "0.18",
							"rate": 0.06875,
							"title": "MN State Tax"
						}
					]
				},
				{
					"fulfillment_service": "manual",
					"fulfillment_status": null,
					"gift_card": false,
					"grams": 1451,
					"id": 690624957,
					"price": "6.29",
					"product_id": 431378977,
					"quantity": 1,
					"requires_shipping": false,
					"sku": "266-05-0104",
					"taxable": true,
					"title": "AF 3LB HONEYCRISP APPLES",
					"variant_id": 1136439369,
					"variant_title": "",
					"vendor": "Disney Shop",
					"name": "AF 3LB HONEYCRISP APPLES",
					"variant_inventory_management": "shopify",
					"properties": [],
					"product_exists": true,
					"fulfillable_quantity": 1,
					"total_discount": "0.00",
					"tax_lines": [
						{
							"price": "0.43",
							"rate": 0.06875,
							"title": "MN State Tax"
						}
					]
				},
				{
					"fulfillment_service": "manual",
					"fulfillment_status": null,
					"gift_card": false,
					"grams": 454,
					"id": 690624961,
					"price": "2.19",
					"product_id": 431356709,
					"quantity": 1,
					"requires_shipping": false,
					"sku": "071-20-0094",
					"taxable": true,
					"title": "Quaker Big Chewy Chocolate Chip Granola Bars 5 ct",
					"variant_id": 1136394617,
					"variant_title": "",
					"vendor": "Disney Shop",
					"name": "Quaker Big Chewy Chocolate Chip Granola Bars 5 ct",
					"variant_inventory_management": "shopify",
					"properties": [],
					"product_exists": true,
					"fulfillable_quantity": 1,
					"total_discount": "0.00",
					"tax_lines": [
						{
							"price": "0.15",
							"rate": 0.06875,
							"title": "MN State Tax"
						}
					]
				},
				{
					"fulfillment_service": "manual",
					"fulfillment_status": null,
					"gift_card": false,
					"grams": 230,
					"id": 690624965,
					"price": "2.89",
					"product_id": 431358585,
					"quantity": 1,
					"requires_shipping": false,
					"sku": "071-10-0312",
					"taxable": true,
					"title": "Wheat Thins Garlic Pita Chips 9.1 oz",
					"variant_id": 1136398701,
					"variant_title": "",
					"vendor": "Disney Shop",
					"name": "Wheat Thins Garlic Pita Chips 9.1 oz",
					"variant_inventory_management": "shopify",
					"properties": [],
					"product_exists": true,
					"fulfillable_quantity": 1,
					"total_discount": "0.00",
					"tax_lines": [
						{
							"price": "0.20",
							"rate": 0.06875,
							"title": "MN State Tax"
						}
					]
				},
				{
					"fulfillment_service": "manual",
					"fulfillment_status": null,
					"gift_card": false,
					"grams": 726,
					"id": 690624969,
					"price": "2.19",
					"product_id": 431369145,
					"quantity": 1,
					"requires_shipping": false,
					"sku": "212-18-0127",
					"taxable": true,
					"title": "Campbell&#39;s Family Chicken Noodle Condensed Soup 26 oz",
					"variant_id": 1136419101,
					"variant_title": "",
					"vendor": "Disney Shop",
					"name": "Campbell&#39;s Family Chicken Noodle Condensed Soup 26 oz",
					"variant_inventory_management": "shopify",
					"properties": [],
					"product_exists": true,
					"fulfillable_quantity": 1,
					"total_discount": "0.00",
					"tax_lines": [
						{
							"price": "0.15",
							"rate": 0.06875,
							"title": "MN State Tax"
						}
					]
				},
				{
					"fulfillment_service": "manual",
					"fulfillment_status": null,
					"gift_card": false,
					"grams": 45,
					"id": 690624973,
					"price": "3.34",
					"product_id": 431384069,
					"quantity": 1,
					"requires_shipping": false,
					"sku": "288-07-3100",
					"taxable": true,
					"title": "Market Pantry Chocolate Ice Cream 1.5 qt",
					"variant_id": 1136448585,
					"variant_title": "",
					"vendor": "Disney Shop",
					"name": "Market Pantry Chocolate Ice Cream 1.5 qt",
					"variant_inventory_management": "shopify",
					"properties": [],
					"product_exists": true,
					"fulfillable_quantity": 1,
					"total_discount": "0.00",
					"tax_lines": [
						{
							"price": "0.23",
							"rate": 0.06875,
							"title": "MN State Tax"
						}
					]
				},
				{
					"fulfillment_service": "manual",
					"fulfillment_status": null,
					"gift_card": false,
					"grams": 533,
					"id": 690624977,
					"price": "3.99",
					"product_id": 431387957,
					"quantity": 1,
					"requires_shipping": false,
					"sku": "284-10-0758",
					"taxable": true,
					"title": "Stonyfield YoKids Squeezers Organic Yogurt 8 ct",
					"variant_id": 1136457429,
					"variant_title": "",
					"vendor": "Disney Shop",
					"name": "Stonyfield YoKids Squeezers Organic Yogurt 8 ct",
					"variant_inventory_management": "shopify",
					"properties": [],
					"product_exists": true,
					"fulfillable_quantity": 1,
					"total_discount": "0.00",
					"tax_lines": [
						{
							"price": "0.27",
							"rate": 0.06875,
							"title": "MN State Tax"
						}
					]
				},
				{
					"fulfillment_service": "manual",
					"fulfillment_status": null,
					"gift_card": false,
					"grams": 454,
					"id": 690624981,
					"price": "1.89",
					"product_id": 431393809,
					"quantity": 1,
					"requires_shipping": false,
					"sku": "271-10-0624",
					"taxable": true,
					"title": "Cherry Coke Soda 2 L",
					"variant_id": 1136467729,
					"variant_title": "",
					"vendor": "Disney Shop",
					"name": "Cherry Coke Soda 2 L",
					"variant_inventory_management": "shopify",
					"properties": [],
					"product_exists": true,
					"fulfillable_quantity": 1,
					"total_discount": "0.00",
					"tax_lines": [
						{
							"price": "0.13",
							"rate": 0.06875,
							"title": "MN State Tax"
						}
					]
				},
				{
					"fulfillment_service": "manual",
					"fulfillment_status": null,
					"gift_card": false,
					"grams": 116,
					"id": 690624985,
					"price": "2.19",
					"product_id": 431403293,
					"quantity": 1,
					"requires_shipping": false,
					"sku": "231-16-1368",
					"taxable": true,
					"title": "Swiss Miss Sensible Sweets Diet Hot Cocoa Mix 8 ct",
					"variant_id": 1136484789,
					"variant_title": "",
					"vendor": "Disney Shop",
					"name": "Swiss Miss Sensible Sweets Diet Hot Cocoa Mix 8 ct",
					"variant_inventory_management": "shopify",
					"properties": [],
					"product_exists": true,
					"fulfillable_quantity": 1,
					"total_discount": "0.00",
					"tax_lines": [
						{
							"price": "0.15",
							"rate": 0.06875,
							"title": "MN State Tax"
						}
					]
				},
				{
					"fulfillment_service": "manual",
					"fulfillment_status": null,
					"gift_card": false,
					"grams": 650,
					"id": 690624989,
					"price": "6.99",
					"product_id": 431365337,
					"quantity": 1,
					"requires_shipping": false,
					"sku": "210-05-0025",
					"taxable": true,
					"title": "Tyson Grilled &#38; Ready Chicken Breast Fillets 22 oz",
					"variant_id": 1136412897,
					"variant_title": "",
					"vendor": "Disney Shop",
					"name": "Tyson Grilled &#38; Ready Chicken Breast Fillets 22 oz",
					"variant_inventory_management": "shopify",
					"properties": [],
					"product_exists": true,
					"fulfillable_quantity": 1,
					"total_discount": "0.00",
					"tax_lines": [
						{
							"price": "0.48",
							"rate": 0.06875,
							"title": "MN State Tax"
						}
					]
				},
				{
					"fulfillment_service": "manual",
					"fulfillment_status": null,
					"gift_card": false,
					"grams": 410,
					"id": 690624993,
					"price": "6.29",
					"product_id": 431365349,
					"quantity": 1,
					"requires_shipping": false,
					"sku": "210-05-0132",
					"taxable": true,
					"title": "Tyson Gluten Free Breaded Chicken Strips 14 oz",
					"variant_id": 1136412913,
					"variant_title": "",
					"vendor": "Disney Shop",
					"name": "Tyson Gluten Free Breaded Chicken Strips 14 oz",
					"variant_inventory_management": "shopify",
					"properties": [],
					"product_exists": true,
					"fulfillable_quantity": 1,
					"total_discount": "0.00",
					"tax_lines": [
						{
							"price": "0.43",
							"rate": 0.06875,
							"title": "MN State Tax"
						}
					]
				},
				{
					"fulfillment_service": "manual",
					"fulfillment_status": null,
					"gift_card": false,
					"grams": 454,
					"id": 690624997,
					"price": "2.69",
					"product_id": 431361673,
					"quantity": 1,
					"requires_shipping": false,
					"sku": "071-20-0138",
					"taxable": true,
					"title": "Kellogg&#39;s Nutri-Grain Strawberry Cereal Bars 8 pk",
					"variant_id": 1136404657,
					"variant_title": "",
					"vendor": "Disney Shop",
					"name": "Kellogg&#39;s Nutri-Grain Strawberry Cereal Bars 8 pk",
					"variant_inventory_management": "shopify",
					"properties": [],
					"product_exists": true,
					"fulfillable_quantity": 1,
					"total_discount": "0.00",
					"tax_lines": [
						{
							"price": "0.18",
							"rate": 0.06875,
							"title": "MN State Tax"
						}
					]
				}
			],
			"shipping_lines": [],
			"billing_address": {
				"address1": "1800 Epcot Resorts Blvd.",
				"address2": null,
				"city": "Lake Buena Vista",
				"company": null,
				"country": "United States",
				"first_name": "Barbera",
				"last_name": "Basket1",
				"latitude": 28.373531,
				"longitude": -81.555311,
				"phone": null,
				"province": "Minnesota",
				"zip": "55315",
				"name": "Barbera Basket1",
				"country_code": "US",
				"province_code": "MN"
			},
			"shipping_address": {
				"address1": "1800 Epcot Resorts Blvd.",
				"address2": null,
				"city": "Lake Buena Vista",
				"company": null,
				"country": "United States",
				"first_name": "Barbera",
				"last_name": "Basket1",
				"latitude": 28.373531,
				"longitude": -81.555311,
				"phone": null,
				"province": "Minnesota",
				"zip": "55315",
				"name": "Barbera Basket1",
				"country_code": "US",
				"province_code": "MN"
			},
			"fulfillments": [],
			"client_details": {
				"accept_language": "en-US,en;q=0.8",
				"browser_height": 1030,
				"browser_ip": "173.160.122.102",
				"browser_width": 859,
				"session_hash": "5d7cbc84421ada0132f43593ee8cbea3",
				"user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.76 Safari/537.36"
			},
			"refunds": [],
			"customer": {
				"accepts_marketing": false,
				"created_at": "2015-03-10T08:07:41-05:00",
				"email": "donaldjarmstrong@gmail.com",
				"first_name": "Donald",
				"id": 365240433,
				"last_name": "Armstrong",
				"last_order_id": 395013065,
				"multipass_identifier": null,
				"note": "Kind of a shady character, watch this one for fraud.",
				"orders_count": 12,
				"state": "disabled",
				"total_spent": "6790.95",
				"updated_at": "2015-03-23T13:27:43-05:00",
				"verified_email": true,
				"tags": "",
				"last_order_name": "#1039",
				"default_address": {
					"address1": "1800 Epcot Resorts Blvd.",
					"address2": null,
					"city": "Lake Buena Vista",
					"company": null,
					"country": "United States",
					"first_name": "Donald",
					"id": 443320569,
					"last_name": "Armstrong",
					"phone": null,
					"province": "Minnesota",
					"zip": "55315",
					"name": "Donald Armstrong",
					"province_code": "MN",
					"country_code": "US",
					"country_name": "United States",
					"default": true
				}
			}
		}
	}
};

var g = order.target.order_lines.reduce(function (prev, curr) {
	var j = { sku: curr.sku, block_aisle: curr.locations[0].block_aisle, section: curr.locations[0].section, smart_schematic: curr.locations[0].smart_schematic};
	prev[curr.sku] = j;
	return prev;
}, {});

var v = _.sortByAll(g, ['block_aisle', 'section', 'smart_schematic']);

var x = v;
console.log(v);
console.log(_.indexOf(v, { sku: '007-01-0101'}));