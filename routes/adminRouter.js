const express = require('express')

// 2 创建路由对象 
const router= express.Router()

// 定义路由中间件
// router.use((req,res,next) => {...})

// 后台路由


// 后台设置
router.get('/admin', (req,res) => {
    res.send('后台首页')
})
router.get('/setting', (req,res) => {
    res.send('设置页面')
})

// 导出路由
module.exports = router