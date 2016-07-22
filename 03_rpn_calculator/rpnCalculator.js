function RPNCalculator(){
	this.stack = [];
}

RPNCalculator.prototype.push = function(n){
	this.stack.push(n);
}

RPNCalculator.prototype.calculate = function(func){
	if(this.stack.length < 2){
		throw "rpnCalculator is empty";
	} else {
		var n1 = this.stack.pop();
		var n2 = this.stack.pop();
		this.stack.push(func(n1, n2))
	}
};

RPNCalculator.prototype.value = function(){
	return this.stack[this.stack.length-1];
};

RPNCalculator.prototype.plus = function(){
	this.calculate(function(n1, n2){ return n2 + n1 })
};

RPNCalculator.prototype.minus = function(){
	this.calculate(function(n1, n2){ return n2 - n1 })
};

RPNCalculator.prototype.times = function(){
	this.calculate(function(n1, n2){ return n2 * n1 })
};

RPNCalculator.prototype.divide = function(){
	this.calculate(function(n1, n2){ return n2 / n1 })
};

