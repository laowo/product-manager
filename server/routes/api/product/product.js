const express = require('express');
const router = express.Router();

//数据加密模块
const md5 = require('md5');

//操作数据库
const Db = require('../../../modules/db.js');
const ObjectId = Db.ObjectId;

//查询产品列表
router.get('/', (req, res) => {
    Db.find('products', {}, (error, data) => {
        if(error) {
            jsonData = {
                status: 0,
                data: null
            };
        }else{
            jsonData = {
                status: 1,
                data
            };
        }
        res.send(jsonData);
    });
});

//创建产品
router.post('/add', (req, res) => {
    const { values } = req.body;
    Db.insert('products', values, (error, data) => {
        let jsonData = {};
        if(error) {
            jsonData = { status: 0 };
        }else{
            jsonData = { status: 1 };
        }
        res.send(jsonData);
    })
});

//修改产品
router.put('/update', (req, res) => {
    const { id, values } = req.body;
    Db.update('products', {
        '_id': new ObjectId(id)
    }, values, (error, data) => {
        let jsonData = {};
        if(error) {
            jsonData = { status: 0 };
        }else{
            jsonData = { status: 1 };
        }
        res.send(jsonData);
    })
});

//删除产品
router.delete('/delete', (req, res) => {
    const { id } = req.body;
    Db.removeOne('products', {
        '_id': new ObjectId(id)
    }, (error, data) => {
        let jsonData = {};
        if(error) {
            jsonData = { status: 0 };
        }else{
            jsonData = { status: 1 };
        }
        res.send(jsonData);
    });
});

module.exports = router;