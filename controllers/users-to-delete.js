const users = require('../models/users-to-delete');

exports.allUsersToDelete = function(request, response){
    users.allUsersToDelete(function(error, files){
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

exports.addUserToDelete = function(request, response){
    let user = {
        name: request.body.name,
        surname: request.body.surname,
        username: request.body.username
    };
    users.addUserToDelete(user, function(error, result){
        if(error){
            console.log(error);
            return response.sendStatus(500);
        }
        response.send(user);
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