var createCalculator = function(){
	var calc = {
		total : 0,
		value : function(){ return this.total },
		add : function(n){ return this.total += n},
		subtract : function(n) { return this.total -= n}
	};
	
	return calc;
};

