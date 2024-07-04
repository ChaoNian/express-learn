
// 引入依赖
const express = require('express')

const ejs = require('pug')

const path = require('path')

const app  = express()

// 1设置Pug模板引擎
app.set('view engine', 'pug'); // pug twing

// 2、设置模版文件存放位置 模版文件： 具有模版语法内容的文件
app.set('views', path.resolve(__dirname, './views'))


// const data = {
//     userbio: '<script>alert("XSS attack!");</script>'
// };
// const escapedBio = ejs.escapeXML(data.userbio);

// console.log(escapedBio); // Outputs: &lt;script&gt;alert(&quot;XSS attack!&quot;);&lt;/script&gt;

app.get('/pug', (req, res) => {

    // 3、render 响应
    // res.render('模版的文件名'， ‘数据’)

    // 声明变量
    const username = 'Alice';
    const messages = ['Message 1', 'Message 2', 'Message 3'];
    
    // 渲染index.pug模板，并传递数据
    res.render('home', { username, messages });

// 4、创建 模版文件
})


app.listen(3001, () => {
    console.log("服务已启动... http://127.0.0.1:3001");
})