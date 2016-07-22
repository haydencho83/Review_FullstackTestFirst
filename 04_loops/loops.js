var repeat = function(str, num){
	var result = '';
	for(var i = 0; i < num; i++){
		result += str;
	}
	return result;
}


var sum = function(arr){
	var result = 0;
	for(var i = 0; i < arr.length; i++){
		result += arr[i]
	}
	
	return result;
}

var gridGenerator = function(n){
	var result = '';
	for(var i = 0; i < n; i++){
		for(var j = 0; j < n; j++){
			if((i + j) % 2 === 0){
				result += '#';
			} else {
				result += ' ';
			}
		}
		result += '\n';
	}
	return result;
}


var join = function(arr, del){
	var result = '';
	for(var i = 0; i < arr.length-1; i++){
		result += arr[i];
		result += del || '';
	}
	result += arr[arr.length-1] || '';
	return result;
}


var paramify = function(obj){
	var array = [];
	for(var key in obj){
		if(Object.hasOwnProperty.call(obj, key)){
			array.push(key+'='+obj[key])	
		}
	}
	return array.sort().join('&');
}

