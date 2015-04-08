var _ = require('lodash');

var rows = [
	{1: {'1': 'TCIN', '2': 'Category', '3': 'Meta Tags', '4': 'Virtual Parent', '5': 'Virtual Child', '6': 'Virtual Child Color', '7': 'Own Brand', '8': 'Search Tags', '9': 'Alt Image URL'}},
	{2: {'1': '271-90-0014', '2': 'Paint', '6': 'Red', 11: 'greg1'}},
	{3: {'1': '271-90-0024', '2': 'Paint', '6': 'Red', 11: 'greg2'}},
	{4: {'1': '271-90-0034', '2': 'Paint', '6': 'Red', 11: 'greg3'}}
];

function convertRowToObject(headerRow, dataRow) {
	return _.keys(dataRow).reduce(function (previousValue, currentValue) {
		var k = headerRow[currentValue] || currentValue; // if no header, then use column number from row
		var v = dataRow[currentValue];

		return _.assign(previousValue, _.zipObject([k], [v]));
	}, {});
}

var headers = _.result(_.head(rows), '1');
_.rest(rows).map(function (row) {
	console.log(convertRowToObject(headers, _.head(_.values(row))));
});
