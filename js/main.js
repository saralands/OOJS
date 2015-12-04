var my_car = {
	brand:'Prius',
	wheels: 4
	isCool: true
	'has-leather': true,
	honk: function(){
		alert('honk honk');
	}
}

// var MYAPP = MYAPP || {}

// MYAPP.brand = 'foo';

var Car = function(brand,wheels){
	this.brand = brand;
	this.wheels = wheels;
	this.doors = doors;
}

var moms_car = new Car('toyota', 3, 4);
var dads_car = new Car('Suziki', 6, 5);


Car.prototype.doors = 2;
Car.prototype.color = 'red';

var User = function(fname, lname){
	this.fname = fname;
	this.lname = lname;
}


var steve = ner User('Steve, "Stevenson');

var Admin = function('fname, lname'){
	this.admin = true;
	User.call(this, fname, lname);
}

var mark = new Admin('Mark', 'Marson');
}


