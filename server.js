
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

var user = require('./user');

var vasya = new user.User("Vasya");
var petya = new user.User("Petya");

vasya.hello(petya);