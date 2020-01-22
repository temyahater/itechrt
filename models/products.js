const mdb = require('../mdb/mdb');
const ObjectId = require('mongodb').ObjectID;

exports.allProducts = function(answ){
    mdb.get().collection('Products').find().toArray(function(error, files){
        answ(error, files);
    })
}

exports.findById = function(id, answ){
    mdb.get().collection('Products').findOne({ _id: ObjectId(id)}, function(error, file){
        answ(error, file);
    })
}

exports.createProduct = function(product, answ){
    mdb.get().collection('Products').insertOne(product, function(error, result){
        answ(error, result);
    })
}

exports.updateProduct = function(id, newDescription, answ){
    mdb.get().collection('Products').updateOne({_id: ObjectId(id)},newDescription, function(error, result){
       answ(error, result);
    })
}

exports.deleteProduct = function(id, answ){
    mdb.get().collection('Products').deleteOne({_id: ObjectId(id)}, function(error, result){
        answ(error, result);
    })
}