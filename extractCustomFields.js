var _ = require('lodash');

var x = {
	note_attributes: [
		{
			"name": "reservationid",
			"value": "Reservation_for_basket#3"
		},
		{
			"name": "date",
			"value": "2015-03-26"
		},
		{
			"name": "deliveryTime",
			"value": "15"
		}
	]
};

var f = _.transform(x.note_attributes, function(result, n) {
	result[n.name] = n.value;
	return 1;
}, {});
console.log(f);

var g = x.note_attributes.reduce(function(prev, curr, idx, arr) {
	prev[curr.name] = curr.value;
	return prev;
}, {});
console.log(_.merge({donnie: 'hello'}, g));

//console.log(_.findWhere(x.note_attributes, {name: 'reservationid'}));

