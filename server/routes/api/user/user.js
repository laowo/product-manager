const express = require('express');
const router = express.Router();

//数据加密模块
const md5 = require('md5');

//操作数据库
const Db = require('../../../modules/db.js');
const ObjectId = Db.ObjectId;

//查询用户列表
router.get('/', (req, res) => {
    //查询用户列表
    Db.find('user',{},(error, data) => {
        let jsonData;
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

//增加用户
router.post('/add', (req, res) => {
    const { values } = req.body;
    values['password'] = md5('123456');
    Db.insert('user', values, (error, data) => {
        let jsonData = {};
        if(!error) {
            jsonData = { status: 1 };
        }else {
            jsonData = { status: 0 };
        }
        res.send(jsonData);
    })
});

//删除用户
router.delete('/delete', (req, res) => {
    const id = req.body.id;
    Db.removeOne('user', {
        '_id': new ObjectId(id)
    }, (error, data) => {
        let jsonData = {};
        if(!error) {
            jsonData = { status: 1 };
        }else {
            jsonData = { status: 0 };
        }
        res.send(jsonData);
    })
});

//修改用户信息
router.put('/update', (req, res) => {
    const { id, values } = req.body;
    Db.update('user', {
        '_id': new ObjectId(id)
    }, values, (error, data) => {
        let jsonData = {};
        if(!error) {
            jsonData = { status: 1 };
        }else {
            jsonData = { status: 0 };
        }
        res.send(jsonData);
    })
});

//修改密码
router.put('/updatepwd', (req, res) => {
    const { id, oldpwd, newpwd } = req.body;
    Db.find('user', {
        '_id': new ObjectId(id)
    }, (error, data) => {
        if(!error) {
            if(data[0].password === md5(oldpwd)) {
                Db.update('user', {
                    '_id': new ObjectId(id)
                }, {
                    'password': md5(newpwd)
                }, (err, data) => {
                    if(!err) {
                        res.send({
                            status: 1,
                            msg: '密码修改成功！'
                        });
                        return;
                    }
                    res.send({
                        status: 0,
                        msg: '密码修改失败！'
                    });
                })
            }else{
                res.send({
                    status: 0,
                    msg: '原始密码不正确！'
                });
            }
        }
    });
});

module.exports = router;