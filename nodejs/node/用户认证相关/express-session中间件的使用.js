// 1、 导入 express-session 中间件
const session = require('express-session')

const express = require('express')

const app = express()

// 2、 配置 session 中间件
app.use(session({
    secret : 'keyboard cat' ,     //secret属性值可以为任意字符串
    resave : false ,              //固定写法
    saveUninitialized : true      //固定写法
}))

// 3、当把  session  中间件配置成功后，就可以通过 req.session 来访问和使用 session 对象 来储存用户的信息
app.post('/login',(req,res)=>{
    if(req.query.username != 'admin' || req.query.password != '000000'){
        return res.send( { status : 1 ,msg : '登录失败' } )
    }
    
    // 验证成功后
    req.session.user = req.query    // 将用户信息储存到 session 中
    req.session.islogin = true     // 将用户的登录状态储存到 session 中

    res.send( { status : 0 ,msg : '登录成功' } )

})

// 4、 从 session 中取数据
app.get('/login',(req,res)=>{
    //判断用户是否登录
    if( !req.session.islogin ){
        return res.send( { status : 1 ,msg : 'fail' } )
    }
    res.send( { status : 0 ,msg : 'success',username : req.session.user.username } )
})

// 5、 用户希望退出登录，就需要清空session里存储的信息
app.post('/logout',(req,res)=>{
    // 清空当前客户端对应的 session 信息
    req.session.destroy()

    res.send( { status : 0 ,msg : '退出登录成功' } )
})

app.listen(80,()=>{
    console.log('http://127.0.0.1');
})