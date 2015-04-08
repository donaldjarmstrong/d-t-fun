var _ = require('lodash');

var p = "Baby Feeding	Necesities / accessories	321-98-3121";

var lineRx = /^(.*)\t(.*)\t([0-9]{3}-[0-9]{2}-[0-9]{4})$/;

var lineArr = lineRx.exec(p);

console.log(lineArr);

var l2 = lineArr[1];
var l3 = lineArr[2];
var dpci = lineArr[3];

var token = replaceAll(l2.toLowerCase(), ' ', '_') + '@' + replaceAll(l3.toLowerCase(), ' ', '_');

console.log(token);

/*****
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
 *****/
function escapeRegExp(string) {
	return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

function replaceAll(string, find, replace) {
	return string.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}