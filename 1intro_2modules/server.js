
// const os = require('os');
// console.log(os.cpus());

// const express = require('express')
// const app = express()


// //operation
// function operation(q) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (q === 'u') {
//                 //return 'Hello World';
//                 resolve('Hello World');
//             } else {
//                 //return 'hello world'
//                 reject('hello world');
//             }

//         }, 1000);
//     })
// }


// app.get('/', function (req, res) {
//     const q = req.query.q || 'test';
//     operation(q)
//         .then((value) => {
//             res.send(value);
//         })
//         .catch((value) => {
//             res.send(value);
//         })
//     //res.send(operation(q));
// })

// // app.post('/softdev', function (req, res) {
// //     const returnData = {title: 'Hello World, SoftDev!'};
// //   res.send(returnData)
// // })
// app.listen(3000, function () {
//     console.log('Example app listening on port 3000!')
// })

console.log(process.mainModule.paths[0].split('node_modules')[0].slice(0, -1));

var db = require('_mym/db'); //the unified path relating a project root
db.connect();

var log = require('_mym/logger')(module);


//var user = require('./user');
var User = require('./user');


function run() {

    //var vasya = new user.User("Vasya");
    //var petya = new user.User("Petya");

    var vasya = new User("Vasya");
    var petya = new User("Petya");

    vasya.hello(petya);
    log(db.getPhrase("Run successful"));

    //console.log(global);
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}
