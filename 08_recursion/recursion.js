var factorialIterative = function(n){
	var result = 1;
	for(var i=2; i<=n; i++){
		result = result * i;
	}
	return result;
};


var factorial = function(n){
	if(n === 0){
		return 1;
	}
	return n * factorial(n-1);
	
};


var fib = function(n){
	if(n <= 1){
		return 1;
	}
	
	return fib(n-1)+fib(n-2);
};


var type = function(obj){
	return Object.prototype.toString.call(obj).slice(8, -1);	
};


var stringify = function(obj){
	if(type(obj) === 'Array'){
		return "[" +
			obj.map(function(el){
				return stringify(el);
			}).join(",") + "]";
	} else if(type(obj) === 'Object'){
		var result=[];
		//return an array of all the keys of obj
		Object.keys(obj).forEach(function(key){
			var val = stringify(obj[key]);
			if(val !== null){
				result.push('"' + key + '": ' + val);
			}
		});
		return "{" + result.join(',') + "}";
	} else if(type(obj) === 'String'){
		return '"'+obj+'"';	
	}
	else {
		return (obj)+'';
	}
};