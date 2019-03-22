const MongoClient = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'product';

function __connectDb(callback) {
    MongoClient.connect(url, (error, client) => {
        if(error) {
            console.log('数据库连接失败!');
            return;
        }
        const db = client.db(dbName);
        if(callback && typeof callback === 'function') {
            callback(client, db);
        }
    })
}

exports.ObjectId = ObjectId;

exports.find = (collectionName, json, callback) => {
    __connectDb((client, db) => {
        const result = db.collection(collectionName).find(json);
        result.toArray((error, data) => {
            callback(error, data);
            //关闭数据库连接
            client.close();
        });
    });
}

exports.insert = (collectionName, json, callback) => {
    __connectDb((client, db) => {
        db.collection(collectionName).insert(json, (error, data) => {
            callback(error, data);
            //关闭数据库连接
            client.close();
        });
    });
}

exports.removeOne = (collectionName, json, callback) => {
    __connectDb((client, db) => {
        db.collection(collectionName).remove(json, (error, data) => {
            callback(error, data);
            //关闭数据库连接
            client.close();
        });
    });
}

exports.update = (collectionName, json1, json2, callback) => {
    __connectDb((client, db) => {
        db.collection(collectionName).update(json1, {$set: json2}, (error, data) => {
            callback(error, data);
            //关闭数据库连接
            client.close();
        })
    });
}