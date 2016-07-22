function setPropertiesOnObjLiteral(obj){
	obj.x = 7;
	obj['y'] = 8;
	obj.onePlus = function(n){
		return n + 1;
	}
}

function setPropertiesOnArrayObj(arrObj){
	arrObj.hello = function(){
		return 'Hello!';
	};
	arrObj['full'] = 'stack';
	arrObj[0] = 5;
	arrObj.twoTimes = function(n){
		return n * 2;
	}
}

function setPropertiesOnFunctionObj(funcObj){
	funcObj.year = 2015;
	funcObj.divideByTwo = function(n){
		return n / 2;
	}
	funcObj.prototype.helloWorld = function(){
		return "Hello World";
	}
}