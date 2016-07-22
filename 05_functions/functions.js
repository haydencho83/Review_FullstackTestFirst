var concatString = function(){
	var finalString = '';
	for(var i = 0; i < arguments.length; i++){
		finalString += arguments[i];
	}
	return finalString;
};


var yourFunctionRunner = function(){
	var finalString = "";
	for(var i = 0; i < arguments.length; i++){
		finalString += arguments[i]();	
	}
	return finalString;
};


var makeAdder = function(n){
	//adderFunction still uses 'n', closes over 'n' variable
	return function(m){
		return m + n;
	};
};


var once = function(fnToRunOnceOnly){
	var hasRan = false;

	return function(){
		if(hasRan === false){
			fnToRunOnceOnly();
			hasRan = true;
		}
	}
}


var createObjectWithClosures = function () {
	var total = 0;

	return {
		oneIncrementer : function () {
	        total ++;
	    },
	    tensIncrementer: function () {
			total += 10;
	    },
	    getValue: function () {
	    	return total;
	    }
	}
};