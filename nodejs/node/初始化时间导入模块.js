//导入自定义的格式化时间的模块
const time = require('./初始化时间.js')

// 调用方法，进行时间的格式化
const dt = new Date()

console.log(time.dataFormat(dt))
