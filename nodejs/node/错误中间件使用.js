
const express = require('express')

const app = express()




app.get('/', (req, res) => {
    throw new Error('服务器内部发生了错误！')     //人为制造错误
    res.send(xxxx)                          //错误之后这句话根本响应不到客户端，就需要 用错误中间件
})
app.use((err, req, res, next) => {
    console.log('发生了错误' + err.message)           //在服务器打印错误信息
    res.send('Error!' + err.message)                        //向客户端响应错误的相关内容
})                         //错误中间件必须写在所有路由之后

app.listen(80,()=>{
    console.log('http://127.0.0.1')
})