// 1.导入express
const express = require("express");
const fs = require("fs");
const path = require("path");

// 通过 require 获取暑假见 const ss = require(‘xxx.json’）
// 2. 创建应用对象
const app = express();

// 声明 全局中间件
function recordMiddleware(req, res, next) {
  //    获取url 和ip
  let { url, ip } = req;
  console.log(url);
  //   收集到的信息 保存在一个文件里， 场景 日志记录
  fs.appendFileSync(path.resolve(__dirname, "./access.log"), `${url} ${ip}\r\n`)
  // 调用next
  next(); // 继续执行下一个方法
}

// 使用中间件（注册）
app.use(recordMiddleware);

// 设置响应
app.get("/response", (req, res) => {
  // 原生
  //     res.statusCode = 404
  //     res.statusMessage = 'love'
  //     res.setHeader('ccc', 'er')
  //     res.write('hello rdpress ')
  //     res.end('response')

  // express
  //  res.status(500)
  //  res.set('aaa', 'sdsds')
  //  res.send('你好 上帝说废话') //  send 方法会自动添加 content-type tetx/html；charset-utf-8

  // 第二种写法
  // res.status(500).set('aaa', 'sdsds').send('你好 上')

  // express其他响应设置

  // 重定向
  // res.redirect('http://atguigu.com') 重定向到这个网站

  // 下载响应
  // console.log(__dirname); // 当前文件的文件夹
  // res.download(__dirname + '/package.json') 绝对路径， 场景 下载电影 下载音乐  文件

  // JSON响应   返回json 给到浏览器
  // res.json({
  //     name: '测试JSON响应',
  //     slogon: '2345676'
  // })
  // 响应一个网站
  res.sendFile(__dirname + "/index.html"); // 返回一个HTML path.resolve
});

// 获取动态的路由参数
app.get("/:id.html", (req, res) => {
  // 获取动态的路由参数
  console.log(req.params.id); // id 对于路由定义的id
  res.setHeader("content-type", "text/html;charset=utf-8");
  res.end("商品详情");
});

app.get("/home", (req, res) => {
  res.end("hellow, espress");
});
app.get("/quest", (req, res) => {
  // 获取请求头 原生操作
  // console.log(req.method);
  // console.log(req.url);
  // console.log(req.httpVersion);
  // console.log(req.headers);

  // express 操作
  console.log(req.path);
  console.log(req.query);
  console.log(req.ip);

  // 方法 后去请求特定属性
  console.log(req.get("host"));

  res.end("quest, espress");
});

app.get("/", (req, res) => {
  res.end("home");
});

app.post("/login", (req, res) => {
  res.end("login in");
});

app.all("/test", (req, res) => {
  res.end("test");
});
// 兜底
app.all("*", (req, res) => {
  res.end(" 404 Not Found");
});

// 4. 监听端口 启动服务
app.listen(3000, () => {
  console.log("服务已启动... http://127.0.0.1:3000");
});
