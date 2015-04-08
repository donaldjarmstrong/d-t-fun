var _ = require('lodash');

var collects = {
	"custom_collections": [
		{
		"body_html": "12 Packs",
		"handle": "12-packs",
		"id": 29298277,
		"published_at": "2015-03-16T14:18:00-05:00",
		"published_scope": "global",
		"sort_order": "alpha-asc",
		"template_suffix": null,
		"title": "12 Packs",
		"updated_at": "2015-03-17T19:39:44-05:00"
		},
		{
			"body_html": "12 Packs",
			"handle": "12-packs-for-fun",
			"id": 29298277,
			"published_at": "2015-03-16T14:18:00-05:00",
			"published_scope": "global",
			"sort_order": "alpha-asc",
			"template_suffix": null,
			"title": "12 Packs",
			"updated_at": "2015-03-17T19:39:44-05:00"
		}
	]
};

var g = _.filter(collects.custom_collections, {title: '12 Packs'});

console.log(g);