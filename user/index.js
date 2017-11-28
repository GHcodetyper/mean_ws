//exports
//global
//var

//the order of seeking for modules: .js, .node, .json

//module.exports = exports = this

var db = require('_mym/db'); //the unified path relating a project root
//db.connect();

function User(name) {
    this.name = name;
}

User.prototype.hello = function (who) {
    console.log(db.getPhrase("Hello") + ', ' + who.name);
}

console.log("user.js is required");

module.exports = User;