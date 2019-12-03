const MongoClient = require('mongodb').MongoClient;
const data = {
    mdb: null
};

exports.connect = function(url , answ) {
    if(data.mdb) return answ();

    MongoClient.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true }, function(error, mdb){
        if(error) return answ(error);
        data.mdb = mdb.db('eshop');
        answ();
    })
}

exports.get = function(){
    return data.mdb;
}