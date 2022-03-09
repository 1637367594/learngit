//1、创建基本的服务器
const express = require('express')

const app = express()

// 导入cors 跨域中间件
const cors = require('cors')

//注册 cors 跨域中间件
app.use(cors())

// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended : false }))

//导入 路由 模块
const router = require('./基本接口的路由.js')

//注册路由
app.use('/index',router)

app.listen(80,()=>{
    console.log('http://127.0.0.1');
})