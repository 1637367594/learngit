const express = require('express') // 1. 导入express模块

const router = express.Router()  // 2. 创建路由对象

// GET接口
router.get('/get', (req, res) => { 
    //获取到客户端通过查询 字符串，发送到服务器的数据
    const query = req.query
    //调用 res.send()方法 ，把数据响应给客户端
    res.send({
        status: 0,            // 状态：0表示成功 ，1表示失败
        msg: 'GET请求成功!',    // 状态描述
        data: query            // 需要响应给客户端的具体数据
    })
})

// POST接口
router.post('/post', (req, res) => { 
    //获取到客户端通过请求体，发送到服务器的 URL-encoded 数据
    const body = req.body
    //调用 res.send()方法 ，把数据响应给客户端
    res.send({
        status: 0,            // 状态：0表示成功 ，1表示失败
        msg: 'POST请求成功!',    // 状态描述
        data: body            // 需要响应给客户端的具体数据
    })
})

module.exports = router  // 5. 向外导出路由对象