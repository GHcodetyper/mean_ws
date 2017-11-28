//exports
//global
//var

//the order of seeking for modules: .js, .node, .json

var phrases = require('./ru');

function User(name) {
    this.name = name;
}

User.prototype.hello = function (who) {
    console.log(phrases.Hello + ', ' + who.name);
}

console.log("user.js is required");

global.User = User;