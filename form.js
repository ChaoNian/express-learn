const express = require('express')
const bodyParser = require('body-parser')


// 创建应用对象
const app = express()

var jsonParser = bodyParser.json() // 解析json数据

var urlencodedparse = bodyParser.urlencoded({extended:false}) // 解析json数据

app.get('/login', (req,res) => {
    console.log(req.get('accept'));
    // 响应HTML文件内容
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/login', urlencodedparse,(req,res) => {
    // 响应HTML文件内容
    res.send(req.body)
})

app.post('/api/user', jsonParser,(req,res) => {
    //解析json数据
    console.log(req.body);
})

// 监听端口
app.listen(3000, () => {
    console.log("服务已启动... http://127.0.0.1:3000");
})