//exports
//global
//var

//the order of seeking for modules: .js, .node, .json

//module.exports = exports = this

var db = require('_mym/db'); //the unified path relating a project root
//db.connect();

var log = require('_mym/logger')(module);

function User(name) {
    this.name = name;
}

User.prototype.hello = function (who) {
    log(db.getPhrase("Hello") + ', ' + who.name);
}

log("user module has been imported");

//exports.User = User;
module.exports = User;
