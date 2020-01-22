const products = require('../models/products');

exports.allProducts = function(request, response){
    products.allProducts(function(error, files){
        if(error){
            console.log(error);
            return response.sendStatus(500);
        }
        response.send(files);
    })
}

exports.findById = function(request, response){
    products.findById(request.params.id, function(error, file){
        if(error){
            console.log(error);
            return response.sendStatus(500);
        }
        response.send(file);
    })
}

exports.createProduct = function(request, response){
    let product = {
        model: request.body.model,
        price: request.body.price,
        description: request.body.description,
        picture: request.body.picture
    };
    products.createProduct(product, function(error, result){
        if(error){
            console.log(error);
            return response.sendStatus(500);
        }
        response.send(product);
    })
}

exports.updateProduct = function(request, response) {
    products.updateProduct(request.params.id,{$set:{description:request.body.description}}, function(error, result){
        if(error){
            console.log(error);
            return response.sendStatus(500);
        }
        response.sendStatus(200);
    })
}

exports.deleteProduct = function(request, response) {
    products.deleteProduct(request.params.id, function(error, result){
        if(error){
            console.log(error);
            return response.sendStatus(500);
        }
        response.sendStatus(200);
    })
}