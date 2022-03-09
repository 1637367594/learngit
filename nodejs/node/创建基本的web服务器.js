//①导入http模块
const http = require("http")
//②创建web服务器实例
//调用   http.createSverver()  方法，即可快速创建web服务器实例
const server = http.createServer()
//③为服务器实例绑定request事件，监听客户端请求
server.on('request',(req,res) =>{    //'request'事件名称
//只要有客户端来请求服务器，就会触发request 事件，从而调用这个事件处理函数
// console.log('Someone visit our web server');
console.log(req.method)
// console.log(req.url)
let str = 'Someone visit our web server'
res.end(str)
})
//④启动服务器
//调用服务器实例的 .listen() 方法，即可启动服务器
server.listen(80,() =>{  //80表示端口号
console.log('http server running at http://127.0.0.1')
})
