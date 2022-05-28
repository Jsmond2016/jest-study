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
  res.send('404');
});

app.listen('8000', () => {
    console.log('监听端口 8000...')
})