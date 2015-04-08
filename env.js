'use strict';

var assert = require('assert');

exports.required = function required (requiredVariables, checkIfTrue) {
	if (checkIfTrue === undefined) {
		checkIfTrue = function () {
			return true;
		};
	}

	if (checkIfTrue() && requiredVariables.length > 0) {
		var missingVariables = requiredVariables.filter(function (requiredVariable) {
			if (!process.env[requiredVariable]) {
				return requiredVariable;
			}
		});

		return assert(missingVariables.length <= 0, "Missing required environment variables " + missingVariables);
	}
};
