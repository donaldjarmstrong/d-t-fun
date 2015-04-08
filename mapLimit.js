mapLimit([1,2,3,4,5,6,7,8,9,0], 3, function (it) {
	console.log(it);
});

function mapLimit (arr, limit, func) {
	var batches = arr.reduce(function (last, next, index) {
		if (index % limit == 0) {
			last.push([next]);
		} else {
			last[last.length-1].push(next);
		}
		return last;
	}, []);

	console.log(batches);

	var currentPromise = Q()
	var promises = batches.map(function (batch) {
		return currentPromise = currentPromise
			.then(function () {
				var batchPromises = batch.map(function (el) { return func(el) })
				return Q.all(batchPromises)
		})
	})
}