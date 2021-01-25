const express = require('express');
const router = express.Router();
module.exports = router;
const app = express();

//加载配置文件
const config = require('../config/mysql.json');
const mysql = require('mysql');
const conn = mysql.createConnection(config);


//获取数据（all方法支持post或get传参方式）
router.all('/getGoodsByType', (req, res) => {
    const type = req.body.type || req.query.type;

    const sqlStr = 'select * from goods ' + (type ? "where type=?" : "")

    conn.query(sqlStr, type, (err, result) => {
        if (err) { return result.json({ code: 404, data: "获取失败" }) }
        res.json({
            code: 200, data: result, msg: ""
        })
    })
})