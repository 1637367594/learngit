const { log } = require("console");
const fs = require("fs")
//调用readFile读取文件内容
fs.readFile('../jishib/成绩.txt', 'utf-8', function (err, dataStr) {
    //判断是否读取成功
    if (err) {
        console.log('读取文件失败' + err.message);
    } else {
        // console.log('读取文件成功' + dataStr);
        //1.先把成绩数据，按照空格进行分割
        //2.循环分割后的数组，对每一项的数组进行字符串的替换操作
        //3.把新数组的每一项进行合并，得到新的字符串
        let newArr = dataStr.split(' ')
        for(let i = 0; i < newArr.length; i++){
            newArr[i] = newArr[i].replace("=",":")
        }
        let newStr = newArr.join('\r\n')//     \r\n代表回车换行
        console.log(newStr);
        fs.writeFile('../jishib/新成绩.txt',newStr,function(err){
            if(err){
              return  console.log('写入文件失败' + err.message);
            }
            console.log('成绩写入成功!' );
        })
    }
}) 