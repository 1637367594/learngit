//使用npm 在项目中安装格式化时间的包  moment
// //导入第三方包的格式化时间的模块
const moment = require('moment')  //导入什么包,就以什么名字接收
//使用moment官方文档
//1.调用moment()方法得到当前时间
//2.针对当前时间，调用format()方法，按照规定的格式进行格式化
const dt = moment().format(`YYYY-MM-DD HH:mm:ss`)
console.log(dt);