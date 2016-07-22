var Mammal = function(name){
	this.name = name;
	this.offspring = [];
};


Mammal.prototype.sayHello = function(){
	return "My name is " + this.name + ", I'm a " + this.constructor.name;
};


Mammal.prototype.haveBaby = function(){
	var mamBaby = new this.constructor("Baby " + this.name, arguments[0]);//insted of Mammal
	this.offspring.push(mamBaby);
	return mamBaby;
}


var Cat = function(name, color){
	Mammal.call(this, name);
	this.color = color;
}

Cat.prototype = Object.create(Mammal.prototype);
Cat.prototype.constructor = Cat;


Cat.prototype.haveBaby = function(color){
	return Mammal.prototype.haveBaby.call(this, color);
	// var catBaby = new Cat("Baby "+this.name, color);
	// this.offspring.push(catBaby);
	// return catBaby;
}
