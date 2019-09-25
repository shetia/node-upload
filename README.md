# node-upload
node上传文件，保存路径信息到mysql

##起步
先安装依赖
```
cnpm i
```
然后运行下面的命令，服务就启动了
```
node ./server.js
```

这时候去启动mysql，把表给建上，项目里有个uploadfiles.sql文件，启动一个mysql可视化应用，把表导入，这里我把数据库命名为abc，可以查看一下db.js文件，也可以修改数据库名字。

然后打开upload.html查看演示即可。

