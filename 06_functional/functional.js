var doubler = function(el){
	return el * 2;
};


var map = function(arr, iteratorFunc){
	var mapArr = [];
	arr.forEach(function(el){
		mapArr.push(iteratorFunc(el))
	});
	return mapArr;
};


var filter = function(arr, filterFunc){
	var filterArr = [];
	arr.forEach(function(el){
		if(filterFunc(el)){
			filterArr.push(el)	
		}
	})
	return filterArr;
};


var contains = function(collection, searchValue){
	for(key in collection){
		if(collection.hasOwnProperty(key)){
			if(collection[key] === searchValue){
				return true;
			}	
		}
	}
	return false;
};


var countWords = function(str){
	return str.split(' ').length;
};


var reduce = function(arr, init, combiner){
	var curr = init;

	for (var i = 0; i < arr.length; i++) {
		curr = combiner(curr, arr[i]);
	}

	return curr;
};


var countWordsInReduce = function(curr, sentence){
	return curr + countWords(sentence);	
	
};


var sum = function(arr){
	return reduce(arr, 0, function(curr, next){
		return curr + next;
	});
};


var every = function(arr, checkFunc){
	return reduce(arr, true, function(acc, cur){
		return acc && checkFunc(cur)})

	// var everyIterator = function(currentVal, nextVal){
	// 	return currentVal && checkFunc(nextVal);
	// }
	// return reduce(arr, true, everyIterator)
};


var any = function(arr, checkFunc){
	return reduce(arr, false, function(acc, cur){
		return acc || checkFunc(cur)})
};


