const express = require('express');
//实例化express
const app = express();

const history = require('connect-history-api-fallback');
//path模块
const path = require('path');

// app.use('/', express.static(path.join(__dirname, 'dist')));
// app.use(history({
//     rewrites: [ { from: /.*\/list\?.*/, to: './dist/index.html' } ],
//     disableDotRule: true,
//     verbose: false
// }));
app.use('/', express.static(path.join(__dirname, 'dist')));

// app.use("/**", function (req, res) {
//     res.sendfile("./dist/index.html", {maxAge: 0});
// });

//保存用户信息
const session = require("express-session");
//配置中间件  固定格式
app.use(session({
    secret :  'secret', // 对session id 相关的cookie 进行签名
    resave : true,
    saveUninitialized: false, // 是否保存未初始化的会话
    cookie : {
        maxAge : 1000 * 60 * 30, // 设置 session 的有效时间，单位毫秒
    },
    rolling: true
}));

const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//设置允许跨域处理请求
const allowCrossDomain = function(req, res, next) {
    //设置可跨域的站点
    res.header('Access-Control-Allow-Origin', 'http://localhost:8000');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials','true');
    next();
};
app.use(allowCrossDomain);

//自定义模块
app.use((req, res, next) => {
    const { url } = req;
    if(url === '/api/login' || url === '/api/login/logout') {
        next();
    }else{
        console.log(req.session.userinfo);
        if(req.session.userinfo && req.session.userinfo.username !== '') {
            next();
        }else{
            //跳回主页
            // res.redirect('/');
            res.send(403);
        }
    }
});

//引入后台路由模块
const api = require('./routes/api/api.js');

//后台路由
app.use('/api',api);

//前端静态资源
// app.use(history({
//     rewrites: [ { from: /.*\/list\?.*/, to: './dist/index.html' } ],
//     disableDotRule: true,
//     verbose: false
// }));
app.use('/', express.static(path.join(__dirname, 'dist')));

app.listen('8001', () => {
    console.log('服务启动成功');
});