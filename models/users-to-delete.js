const mdb = require('../mdb/mdb');
exports.allUsersToDelete = function(answ){
    mdb.get().collection('Users to Delete').find().toArray(function(error, files){
        answ(error, files);
    })
}

exports.findByUsername = function(username, answ){
    mdb.get().collection('Users to Delete').findOne({ username: username}, function(error, file){
        answ(error, file);
    })
}

exports.addUserToDelete = function(user, answ){
    mdb.get().collection('Users to Delete').insertOne(user, function(error, result){
        answ(error, result);
    })
}

exports.deleteUser = function(username, answ){
    mdb.get().collection('Users to Delete').deleteOne({username: username}, function(error, result){
        answ(error, result);
    })
}

