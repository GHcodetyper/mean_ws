var util = require('util');

var phrases = {
    "Hello": "Privet",
    "world": "mir"
};

//---------------------------------------------------- step1

// function getPhrase(name) {
//     if (!phrases[name]) {
//         throw new Error("Net takoi frazy: " + name); //HTTP 500
//     }
//     return phrases[name];
// }

// function makePage(url) {
//     if (url != 'index.html') {
//         throw new Error("Net takoi stranitsy"); //HTTP 404
//     }
//     return util.format("%s, %s!", getPhrase("Hello"), getPhrase("world"));
// }

// var page = makePage('index.html');
// console.log(page);


//---------------------------------------------------- step2


function PhraseError(message) {
    this.message = message; // not Error.apply(this, arguments); - superclass ctor
    Error.captureStackTrace(this, PhraseError);
}
util.inherits(PhraseError, Error);
PhraseError.prototype.name = 'PhraseError';

function HttpError(status, message) {
    this.status = status;
    this.message = message;
    Error.captureStackTrace(this, HttpError);
}
util.inherits(HttpError, Error);
HttpError.prototype.name = 'HttpError';

function getPhrase(name) {
    if (!phrases[name]) {
        throw new PhraseError("Net takoi frazy: " + name); //HTTP 500
    }
    return phrases[name];
}

function makePage(url) {
    if (url != 'index.html') {
        throw new HttpError(404, "Net takoi stranitsy"); //HTTP 404
    }
    return util.format("%s, %s!", getPhrase("Hell"), getPhrase("world"));
}

try {
    var page = makePage('index.html'); //'index.html'
    console.log(page);
}
catch (e) {
    if (e instanceof HttpError) {
        console.log(" Oshibka %s\n soobshenie %s\n stack: %s", e.status, e.message, e.stack);
    }
    else {
        console.error(" Oshibka %s\n soobshenie %s\n stack: %s", e.name, e.message, e.stack);
    }
}


