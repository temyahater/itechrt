var mdb = require('../mdb/mdb');
exports.allUsers = function(answ){
    mdb.get().collection('Users').find().toArray(function(error, files){
        answ(error, files);
    })
}

exports.findByUsername = function(username, answ){
    mdb.get().collection('Users').findOne({ username: username}, function(error, file){
        answ(error, file);
    })
}

exports.createUser = function(user, answ){
    mdb.get().collection('Users').insert(user, function(error, result){
        answ(error, result);
    })
}

exports.updateUser = function(username, newUsername, answ){
    mdb.get().collection('Users').updateOne({username: username},newUsername, function(error, result){
       answ(error, result);
    })
}

exports.deleteUser = function(username, answ){
    mdb.get().collection('Users').deleteOne({username: username}, function(error, result){
        answ(error, result);
    })
}