
const express = require('express');
const app = express();

//导入moment模块,时间 moment().format('YYYY-MM-DD HH:mm:ss')//格式化日期
const moment = require("moment")

//导入cors模块,该模块为跨域所用
const cors = require('cors');
app.use(cors())

app.listen(3000, () => {
    // 打印一下接口用例地址
    console.log('http://127.0.0.1/user/select')
})
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

//设置跨域访问
// app.all('*', function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By", ' 3.2.1')
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });

//加入前端需要访问的接口API名称

const getGoodsByType = require('./api/getGoodsByType');
app.use('/goods', getGoodsByType);

// const area = require('./api/area');
// app.use('/area', area);