/**
 * 文件清理 + 缓存清理
 */
// 依赖
var fs = require('fs');
var db = require('./db');

var clearAllFile = function () {
    fs.readdir('./uploadFiles/file', function (error, files) {
        if (error) {
            return console.error(error);
        }
        for (var i=0; i<files.length; i++) {
            fs.unlink(__dirname + "/uploadFiles/file/" + files[i].toString(), function (err) {
                if (err) {
                    return console.error(err);
                }
            })
            // 在数据库中删除文件信息
            var dropSql = 'delete from uploadfiles where originalName=\''+ files[i].toString()+'\'';
            db.connection.query(dropSql, function (err, result) {
                if (err) {
                    return console.error(err);
                }
            })
        }
    })
    return true;
}

var clearCache = function () {
    fs.readdir('./uploadFiles/tmp', function (error, files) {
        if (error) {
            return console.error(error);
        }
        for (var i=0; i<files.length; i++) {
            fs.unlink(__dirname + "/uploadFiles/tmp/" + files[i].toString(), function (err) {
                if (err) {
                    return console.error(err);
                }
            })
        }
    })
    return true;
}

exports.clearAllFile = clearAllFile;
exports.clearCache = clearCache;