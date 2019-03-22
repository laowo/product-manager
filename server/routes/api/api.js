const express = require('express');
const router = express.Router();

//登陆模块
const login = require('./login/login.js');
//用户模块
const user = require('./user/user.js');
//产品模块
const product = require('./product/product.js');

//挂载路由句柄
router.use('/user', user);
router.use('/product', product);
router.use('/login', login);

module.exports = router;