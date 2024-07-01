const express = require('express')
// 创建应用对象
const app = express()

// 导入路由模块
const adminRouter = require('./routes/adminRouter')
const homegRouter = require('./routes/homeRouter')

app.use((req,res,next) => {
    // 检测请求头中的 referer 是否为 127.0.0.1
    // 获取 referer(引用的意思）
    let referer = req.get('referer')
    // 实例化
    if (referer) {
    const {hostname} = new URL(referer)
    console.log(hostname);
       if (hostname !== '127.0.0.1') {
        res.status(404).send('404 not Found')
        return
       }
    }
    next() 
})

// 注册路由
 app.use(adminRouter)
 app.use(homegRouter)

// 静态资源中间件设置
app.use(express.static(__dirname + '/public')) //页面首页

app.all('*', (req, res) => {
   res.send('404')
})


// 监听端口
app.listen(3000, () => {
    console.log("服务已启动... http://127.0.0.1:3000");
})