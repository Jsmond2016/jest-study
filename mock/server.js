// 参考来源：https://www.jianshu.com/p/990e7a97806d

let express = require('express');   //引入express

let app = express();        //实例化express
// 跨域访问
app.use('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

//  使用路由 /index 是路由指向名称
app.use('/api', require('./router'))

app.use(function (req, res) {
  res.status(404).send('404');
});

app.listen(8000, () => {
    console.log('服务器已启动，监听地址为：http://localhost:8000')
})

