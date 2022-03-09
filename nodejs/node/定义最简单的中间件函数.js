const express = require('express')

const app = express()

const mw = function (req, res, next) {               // 常量  mw  所指向的，就是一个中间件函数
    console.log('这是一个最简单的中间件函数')
    next()
}
// const mw = (req, res, next)=> {               // 常量  mw  所指向的，就是一个中间件函数
//     console.log('这是一个最简单的中间件函数')
//     next()
// }
app.use(mw)      //注册一个全局生效的中间件

app.get('/', (req, res) => {
    res.send('Home page')
})
app.post('/', (req, res) => {
    res.send('User page')
})

app.listen(80, () => {
    console.log('http://127.0.0.1')
})