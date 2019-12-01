var express = require('express');
var bparser = require('body-parser');
// var ObjectId = require('mongodb').ObjectID;
var usersController = require('../controllers/users.js');
var mdb = require('../mdb/mdb.js');
var server = express();
server.use(bparser.json());
server.use(bparser.urlencoded({extended:true}));

server.get('/', function(request, response){
    response.send('Server');
})

mdb.connect('mongodb://localhost:27017/eshop', function(error){
    if(error) return console.log(error);
    server.listen(3000, function(){
        console.log('Server started');
    })
})

server.get('/users', usersController.allUsers);

server.get('/users/:username', usersController.findByUsername);

server.post('/users', usersController.createUser);

server.put('/users/:username', usersController.updateUser);

server.delete('/users/:username', usersController.deleteUser);