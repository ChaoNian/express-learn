const mongoose = require('mongoose')
const {connect, connection} = mongoose

const url = 'mongodb://root:123456@127.0.0.1:27017/admin'
// const url = 'mongodb://127.0.0.1:27017/admin'
// // 链接数据库
connect(url)
// mongoose.connect('mongodb://localhost/admin') // 这样会连接失败 ？？？

// mongoose command insert requires authentication
/**
 * 解释：

这个错误表明你正在尝试使用Mongoose库在MongoDB数据库中执行插入操作，
但是数据库要求进行身份验证才能执行这个操作。MongoDB在2.6版本后默认启用了身份验证机制，除非你在启动mongod服务时指定了--noauth选项。

解决方法：

确保你已经在MongoDB中创建了用户和密码，并且该用户有权限对相应数据库进行读写操作。

在连接字符串中指定用户名和密码。例如，如果你的MongoDB运行在本地默认端口并使用了名为myDB的数据库，用户名为user，密码为pass，你可以这样连接：
 */
// mongoose.connect('mongodb://user:pass@localhost:27017/myDB', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   });

// 设置回调函数
// mongoose.connection.on('open', () => {
//     console.log('链接成功');
// })


connection.once('open', () => { // 推荐实践， 数据库服务掉线，不会重新连接， 
    // 创建文档对象
    // 设置集合汇总文档的属性以及属性值的类型
    let BookSchema = new mongoose.Schema({
        name:String,
        author: String,
        Price: Number,
        is_host:Boolean,
        tags: Array,
        pub_time: Date,
        test: mongoose.Schema.Types.Mixed,
        obj: mongoose.Schema.Types.ObjectId // 文档ID 用在外健， 当需要用到另外一个文档是可以通过这个id 来连接获取 
    })

    // 创建模型对象，对文档操作的封装对象
    let BookModel = mongoose.model('books', BookSchema)

    // 新增
    BookModel.create({
        name:' 西游记',
        author: 'xxx',
        price: 19.9,
        is_host: true,
        tags: [1,2,3,4],
        pub_time: new Date(),
        test: new Date(), // 任何类型值都可以
    }).then((data) => {
        console.log(data, '333');
    }).catch(err => {
        console.log(err, 'err--');
    })

    // 关闭数据库连接 项目运行过程中 不会添加该代码
    // mongoose.disconnect() // 打开了启动会一直提示 需要连接数据库
})

connection.on('error', () => {
    console.log('链接失败');
})

connection.on('close', () => {
    console.log('链接关闭');
})
// 手动关闭 mongodb 连接
// setTimeout(() => {
//     mongoose.disconnect()
// },2000)

