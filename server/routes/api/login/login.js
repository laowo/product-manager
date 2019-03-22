const express = require('express');
const router = express.Router();

//数据加密模块
const md5 = require('md5');

//操作数据库
const Db = require('../../../modules/db.js');
const ObjectId = Db.ObjectId;

router.post('/', (req, res) => {
    const { username, password } = req.body;
    Db.find('user', {
        'username': username,
        'password': md5(password)
    }, (error, data) => {
        if(!error) {
            let jsonData = {};
            if(data.length) {
                req.session.userinfo = data[0];
                jsonData = {
                    status: 'ok'
                };
            }else{
                jsonData = {
                    status: '登陆失败'
                }
            }
            res.send(jsonData);
        }
    });
});

//退出登陆
router.get('/logout', (req, res) => {
    //销毁session
    req.session.destroy();
    res.send({status: true, loginStatus: false});
});

module.exports = router;