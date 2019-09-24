/**
 * 连接数据库
 */
var mysql = require('mysql');

var connection = mysql.createConnection({
    user: 'root',
    password: 'root',
    database: 'abc'
});
connection.connect();

exports.connection = connection;