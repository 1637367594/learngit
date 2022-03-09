//定义格式化时间的方法
function dataFormat(dtStr){
    const dt = new Date(dtStr)

    const y = dt.getFullYear()   //年
    const m = padZero(dt.getMonth() + 1)  //月  +1
    const d = padZero(dt.getDate() )  //日
    const hh = padZero(dt.getHours() )  //时
    const mm = padZero(dt.getMinutes() )  //分
    const ss = padZero(dt.getSeconds() )  //秒

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

//定义补零的函数
function padZero(n){
   return  n > 9 ? n : '0' + n
}

//暴露函数
module.exports = {
    dataFormat
}