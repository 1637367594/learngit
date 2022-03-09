//1、导入 express
const express = require('express')
//2、创建web服务器
const app = express()
//4、监听客户端的GET和POST请求，并向客户端响应具体的内容
app.get('/user',(req,res)=>{
    //调用express提供的res.send()方法，向客户端响应一个 json对象
    res.send({name : 'zx',age : 20})
})
app.post('/user',(req,res)=>{
    //可以响应一个json对象，也可以响应一个普通的文本
    res.send('请求成功')
})
// app.get('/?name=zs&age=20',(req,res)=>{
//     console.log(req.query);//通过req.query可以得到url中携带的参数，默认情况下是个空对象
//     res.send(req.query)
// })
app.get('/:id/:name',(req,res)=>{
    console.log(req.params);//通过req.params   里面存放的通过 ：动态匹配到的参数值，默认情况下是个空对象
    res.send(req.params)
})
//3、调用app.listen(端口号，启动成功后的回调函数) ，启动服务器
app.listen(80,() =>{  //80表示端口号
console.log('express server running at http://127.0.0.1')
})

