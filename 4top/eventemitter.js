var EventEmitter = require('events').EventEmitter;

var server = new EventEmitter;

server.on('request', function (request) { //1
    request.approved = true;
});

server.on('request', function (request) { //2 - in the order of assignment
    console.log(request);
});


server.emit('request', { from: "Client" });

server.emit('request', { from: "Another client" });

// server.on('error', function (err) { //prevents any exception generating for the 'error' event
//     console.log(err);
// });

server.emit('error', new Error("Server error"));