var _ = require('lodash');

var f = {
	"ItemDescription": [
		{
			"features": [
				"<strong>Manufacturer's Suggested Age:</strong> Newborn and Up",
				"<strong>Includes:</strong> Rings",
				"<strong>Features:</strong> Music",
				"<strong>Textile Material:</strong> 100% <strong> </strong> Polyester",
				"<strong>Fill Material:</strong> 100% <strong> </strong> Polyester",
				"<strong>Educational Focus:</strong> Music",
				"<strong>Number of Pieces:</strong> 1",
				"<strong>Dimensions:</strong> 6.0 \" H  x 3.2 \" W  x 11.5 \" L ",
				"<strong>Product Weight:</strong> 0.33 Lb.",
				"<strong>Care and Cleaning:</strong> Machine Wash Warm, Tumble dry low"
			]
		}
	]
};

function fromFeaturesToMetafields(features) {
	return features.reduce(function (builtSoFar, feature) {
		var regEx = /<strong>([^<]*)<\/strong>([^<]*)/g;
		var match = regEx.exec(feature);

		if (!match) {
			// with no match on the regex, we'll default to placing the feature into a general bucket
			var misc = _.findWhere(builtSoFar, {key: 'Other Features'});
			if (!misc) {
				misc = { key: 'Other Features', value: '', value_type: 'string', namespace: 'global', value_array: []};
				builtSoFar.push(misc);
			}

			// add values to a tmp array so we can build up the string for the real value
			misc.value_array.push(feature);
			misc.value = misc.value_array.join(', ');
		}

		while (match !== null) {
			var key = _.trim(match[1].replace(':', ''));

			if (_.trim(key)) {
				builtSoFar.push({
					key: _.trim(key),
					value: match[2],
					value_type: 'string',
					namespace: 'global'
				});
			} else {
				// we have an empty key value, take the value portion and append to previous key/value pair
				var last = builtSoFar.pop();
				last.value = last.value + _.trim(match[2]);

				builtSoFar.push(last);
			}

			match = regEx.exec(feature);
		}

		return builtSoFar;
	}, []);
}

//fromFeaturesToMetafields(v2APIProduct.ItemDescription[0].features),

console.log(fromFeaturesToMetafields(f.ItemDescription ? f.ItemDescription[0].features : []));

var match = /^DONOTUSE(.*)$/i.exec('DONOTUSEFresh vegetables');
if (match) {
	console.log(match[1]);
}
