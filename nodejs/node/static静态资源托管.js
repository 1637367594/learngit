//1、导入express
const express = require('express')

//2、创建web服务器
const app = express()

//4、托管静态资源
app.use(express.static('./clock'))
app.use('/clock',express.static('./clock'))   //如果希望挂载路径前缀

//3、调用服务器实例的 .listen() 方法，即可启动服务器
app.listen(80, () => {

    console.log('express server running at http://127.0.0.1')
})
