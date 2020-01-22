const express = require('express');
const bparser = require('body-parser');
// var ObjectId = require('mongodb').ObjectID;
const usersController = require('../controllers/users.js');
const productsController = require('../controllers/products.js')
const userToDeleteController = require('../controllers/users-to-delete.js')
const mdb = require('../mdb/mdb.js');
const server = express();
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
server.get('/userstodelete', userToDeleteController.allUsersToDelete);
server.get('/products', productsController.allProducts);

server.get('/users/:username', usersController.findByUsername);
server.get('/userstodelete/:username', userToDeleteController.findByUsername);
server.get('/products/:id', productsController.findById);

server.post('/users', usersController.createUser);
server.post('/userstodelete', userToDeleteController.addUserToDelete);
server.post('/products', productsController.createProduct);

server.put('/users/:username', usersController.updateUser);
server.put('/products/:id', productsController.updateProduct);

server.delete('/users/:username', usersController.deleteUser);
server.delete('/userstodelete/:username', userToDeleteController.deleteUser);
server.delete('/products/:id', productsController.deleteProduct);