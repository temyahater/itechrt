const users = require('../models/users');

exports.allUsers = function(request, response){
    users.allUsers(function(error, files){
        if(error){
            console.log(error);
            return response.sendStatus(500);
        }
        response.send(files);
    })
}

exports.findByUsername = function(request, response){
    users.findByUsername(request.params.username, function(error, file){
        if(error){
            console.log(error);
            return response.sendStatus(500);
        }
        response.send(file);
    })
}

exports.createUser = function(request, response){
    let user = {
        name: request.body.name,
        surname: request.body.surname,
        username: request.body.username
    };
    users.createUser(user, function(error, result){
        if(error){
            console.log(error);
            return response.sendStatus(500);
        }
        response.send(user);
    })
}

exports.updateUser = function(request, response) {
    users.updateUser(request.params.username,{$set:{username:request.body.username}}, function(error, result){
        if(error){
            console.log(error);
            return response.sendStatus(500);
        }
        response.sendStatus(200);
    })
}

exports.deleteUser = function(request, response) {
    users.deleteUser(request.params.username, function(error, result){
        if(error){
            console.log(error);
            return response.sendStatus(500);
        }
        response.sendStatus(200);
    })
}