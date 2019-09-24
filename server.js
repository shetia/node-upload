/**
 * 创建服务器
 * - 实现文件传输并合理存储
 * - 实现磁盘文件和数据库文件信息的同步一体
 * - 接收文件完毕后自动删除缓存
 * - 可以在前端删除所有文件（同步修改数据库）
 */

/********************************
************ 预定义 **************
*********************************/
//依赖
var express = require('express');
var app = express();
var mysql = require('mysql');
var fs = require('fs'); 
//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});
var bodyParser = require('body-parser');
var multer = require('multer');

var clear = require('./clear');
var db = require('./db');

// 中间件
app.use(bodyParser.urlencoded({ extended: false })); // 只解析请求中的字符串和数组（本例暂时没用到）

// 设置文件缓存的目录
var upload = multer({ dest: './uploadFiles/tmp/'});

/********************************
 ********************************
*********************************/

// 首页
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/' + 'index.html');
});

// 响应文件上传请求 
app.post('/upload_file', upload.array('file'), function (req, res) {
    // 文件信息
    if (req.files[0]){
        console.log("----------接收文件----------\n");
        
        console.log(req.files[0]);
    }
    // 存储
    // var des_file = __dirname + "/uploadFiles/" + req.files[0].fieldname + "/" + req.files[0].originalname;
    var des_file = __dirname + "/uploadFiles/file/" + req.files[0].originalname;
    fs.readFile(req.files[0].path, function (error, data) {
        if (error) {
            return console.error(error);
        }
        fs.writeFile(des_file, data, function (err) {
            if (err) {
                // 接收失败
                console.log("----------接收失败----------\n");
                console.log(err);
            }else {
                // 接收成功
                var response = {
                    status:200,
                    message: 'File uploaded successfully!',
                    filename: req.files[0].originalname
                };
                console.log('\n----------SAVING-----------\n');
                // 删除缓存文件
                fs.unlink(req.files[0].path, function(err){
                    if (err){
                        return console.error(err);
                    }
                    console.log('文件:'+req.files[0].path+'删除成功！');
                })
                // 将文件信息写入数据库
                var time = new Date().toJSON();

                var addSQL = 'INSERT INTO uploadfiles(fieldname, originalName, tmpName, encoding, mimetype, size, path, tmpPath, addTime) VALUES(?,?,?,?,?,?,?,?,?)';
                var addSqlParams = [req.files[0].fieldname, req.files[0].originalname, req.files[0].filename,
                    req.files[0].encoding, req.files[0].mimetype, req.files[0].size, des_file, __dirname + '/' + req.files[0].path, time];
                
                // 插入数据
                db.connection.query(addSQL, addSqlParams, function (err, result) {
                    if (err) {
                        return console.error(err);
                    }else {
                        console.log(JSON.stringify(response));
                        console.log(result);
                        console.log('\n----------SUCCEED----------\n\n');
                        res.json( response );
                    }
                })
            }
        });
    });
});


app.get('/getFliesList',function(req,res){
  db.connection.query('SELECT * FROM uploadfiles',function(err, result){
    let data = {
      status:200,
      data:result,
      msg:'查询成功'
    }
    res.json( data )
  })
})
app.get('/delFile',function(req,res){
  console.log(req)
  let id = req.query.id
  db.connection.query('DELETE FROM uploadfiles WHERE id=?',id,function(err, result){
    let data = {
      status:200,
      data:result,
      msg:'删除成功'
    }
    res.json( data )
  })
})
// 删除所有文件
app.get('/delete_all_file', function (req, res) {
    if (clear.clearAllFile()) {
        console.log('Clear all files successfully!');
        res.send('<h1>Clear all files successfully!</h1>');
    } else {
        res.send('<h1>Error: When clear all files!</h1>');
    }
})

// 删除缓存
app.get('/delete_cache', function (req, res) {
    if (clear.clearCache()) {
        console.log('Clear cache successfully!');
        res.send('<h1>Clear cache successfully!</h1>');
    } else {
        res.send('<h1>Error: When clear cache!</h1>');
    }
})

// 获取本地IPv4
function getLocalIPv4 () {
    interfaces = require("os").networkInterfaces();

    for(var devName in interfaces){//遍历所有连接
        var iface = interfaces[devName];
        for(var i=0; i<iface.length; i++){//遍历每个连接中的不同地址(family为标识)
            var alias = iface[i];
            if(alias.family == 'IPv4' && alias.address != '127.0.0.1' && !alias.internal)//该判断保证为有效的IPv4地址（排除了内部地址和本地地址）
            {
                return alias.address;
            }
        }
    }
} 
// 监听
var server = app.listen(3333, '127.0.0.1', function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('访问地址为：http://%s:%s', host, port);
});