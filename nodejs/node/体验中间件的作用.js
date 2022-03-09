const express = require('express')

const app = express()

const mw = function (req, res, next) {     
    res.a = {
        name : 'zs',
        age : 20
    }     
    const time = Date.now() //获取到请求服务器的时间
    req.startTime = time
    console.log('这是一个最简单的中间件函数')
    next()
}

app.use(mw)   

// app.get('/', mw,(req, res) => {     //不使用app.use() 。以参数的形式的中间件就是局部中间件，只在这个
//     res.send(req.startTime)
// }) 

//  不同中间件他们公用一个 req 和res ，可以在上游中间件中定义一些方法和属性
app.get('/', (req, res) => {
    res.send(req.startTime)
})
app.post('/', (req, res) => {
    res.send(res.a)
})

app.listen(80, () => {
    console.log('http://127.0.0.1')
})