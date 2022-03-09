//1.1导入http模块
const http = require("http")
//1.1导入path模块
const path = require('path')
//1.1导入fs模块
const fs = require("fs")
//2.1创建web服务器
const server = http.createServer()
//2.2监听web服务器的request事件
server.on('request', (req, res) => {
    //3.1获取到客户端请求的 url 地址
    const url = req.url
    //3.2把请求的 url 地址，映射为本地文件的存放路径
    const fpath = path.join(__dirname,'clock', url) //把根目录和 url 拼接
    //设置响应头，来处理中文乱码问题
    // res.setHeader('Content-Type', 'text/html;charset=utf-8')
     //4.1根据映射到的文件路径，读取内容
    fs.readFile(fpath, 'utf-8', function (err, dataStr) {
        //判断是否读取成功
        if (err) {
            res.end('<h1>404 Not found</h1>')
        } else {
            res.end(dataStr)
         }
    })
})
//2.3启动服务器
server.listen(80, () => {
    console.log('http server running at http://127.0.0.1')
})
