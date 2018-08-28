const express = require('express');
const app = express();
const moment = require('moment')
//导入cors模块,该模块为跨域所用
const cors = require('cors');
app.use(cors());

//解析表单的插件
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))


//创建数据库连接对象
const mysql = require('mysql');
const conn = mysql.createConnection({
	host: '127.0.0.1',//数据库地址
	user: 'root',//账号
	password: 'root',//密码
	database: 'mydb_12_9',//库名
	multipleStatements: true //允许执行多条语句
})
