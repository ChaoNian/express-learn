const express = require('express')

// 2 创建路由对象 
const router= express.Router()

// 定义路由中间件
// router.use((req,res,next) => {...})

// 后台路由


// 后台设置
router.get('/home', (req,res) => {
    res.send('后台首页')
})
router.get('/search', (req,res) => {
    res.send('内容搜索')
})


// 导出路由
module.exports = router