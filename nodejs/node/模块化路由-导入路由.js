const express = require('express')

const app = express()

const router = require('./模块化路由.js')       // 1. 导入路由模块

app.use(router)                                // 2. 注册路由模块
// app.use('/api',router)    统一添加 /api 的访问前缀

app.listen(80,()=>{
    console.log('Router server running at http://127.0.0.1')
})