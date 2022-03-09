const path = require('path')

//将多个路径片段合并成一个完整的路径字符串   ../会删除前面一个
const newStr = path.join('/a','/b/c','../','/d','/e/f')
// console.log(newStr);
const newStr1 = path .join(__dirname, '/path中的方法.js ')//__dirname 当前完整的路径
// console.log(newStr1);

const pathBase = path.basename(newStr1) //可以得到文件名  ，   截取最后一段路径
const pathBase1 = path.basename(newStr1,'.js')
// console.log(pathBase);
// console.log(pathBase1);

const pathExt = path.extname(newStr1)  //   得到路径中文件的拓展名  （.js）
console.log(pathExt);