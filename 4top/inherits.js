var util = require('util');

//Parent

function Animal(name) {
    this.name = name;
};

Animal.prototype.walk = function () {
    console.log("Walks " + this.name);
};



//Child

function Rabbit(name) {
    this.name = name;
};

util.inherits(Rabbit, Animal);

Animal.prototype.jump = function () {
    console.log("Jumps " + this.name);
};

// using

var rabbit = new Rabbit("our rabbit");
rabbit.walk();
rabbit.jump();