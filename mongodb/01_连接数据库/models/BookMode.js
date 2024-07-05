const mongoose = require('mongoose')
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
module.exports = BookModel