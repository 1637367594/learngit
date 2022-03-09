
//1、导入 mysql 模块
const mysql = require('mysql')

//2、 建立 mysql 模块与 MySQL 数据库的连接
const db = mysql.createPool({
    port: '3306',            //端口号
    host: '127.0.0.1',     //  数据库的ip地址
    user: 'root',          //  登录数据库的账号
    password: '',          //  登录数据库的密码
    database: 'myfristdb'    //  指定操作哪个数据库
})

//3、 检测 mysql 模块是否能正常工作 ，调用db.query()
// db.query('SELECT 1', (err, results)=>{
//     if(err) return console.log(err.message)
//     // 只要能打印出[ RowDataPacket { '1' : 1 } ] 的结果，就证明数据库连接正常
//     console.log(results)
// })

// 4、查询 uesr 表中的所有数据
// const sqlStr = 'SELECT * FROM uses'
// db.query('SELECT * FROM user', (err, results) => {
//     // 查询失败
//     if (err) return console.log(err.message)
//     // 查询成功
//     console.log(results)    //SELECT  查询语句 得到的结果是一个数组
// })

// 5、向 表中插入数据
// const user = { name: 'snp', age: 18 }   //要插入表中的数据对象
// // 执行SQL语句，?表示占位符
// const sqlStr = 'insert into user (name, age) values (?,?)'
// //   使用数组的形式，依次为 ? 占位符提供具体的值
// db.query(sqlStr, [user.name, user.age], (err, results) => {
//     // 插入失败
//     if (err) return console.log(err.message)
//     // 插入成功后 ressults 里面的 affectedRows 属性为1
//     if (results.affectedRows === 1) console.log('插入数据成功！')  
// })

// 6、 如果数据对象的每个属性和数据表上的一一对应，则可以通过如下方式快速插入数据
// const user = { name: 'zy', age: 19 }   
// // 直接将数据对象当作占位符的值
// const sqlStr = 'insert into user SET ?'
// db.query(sqlStr, user, (err, results) => {
//     // 插入失败
//     if (err) return console.log(err.message)
//     // 插入成功后 ressults 里面的 affectedRows 属性为1
//     if (results.affectedRows === 1) console.log('插入数据成功！')  
// })

// // 7、 更新表中的数据
// const user = { id : 2 , name: 'csy', age: 18 }   
// // 要执行的 sql 语句
// const sqlStr = 'UPDATE user SET name  = ? , age = ? WHERE id = ?'
// db.query(sqlStr,[user.name , user.age , user.id], (err, results) => {
//     // 更新失败
//     if (err) return console.log(err.message)
//     // 更新成功，插入成功后 ressults 里面的 affectedRows 属性为1
//     if (results.affectedRows === 1) console.log('更新数据成功！')  
// })

// 8、 如果数据对象的每个属性和数据表上的一一对应，则可以通过如下方式快速插入数据
// const user = { id : 3 , name: 'zxh', age: 20 }   
// // 直接将数据对象当作占位符的值
// const sqlStr = 'update user SET ? where id = ?'
// db.query(sqlStr,[ user , user.id] , (err, results) => {
//     // 更新失败
//     if (err) return console.log(err.message)
//     // 更新成功后 ressults 里面的 affectedRows 属性为1
//     if (results.affectedRows === 1) console.log('更新数据成功！')  
// })

// 9、 删除表里的数据
const sqlStr = 'delete from user where id = ?'
db.query(sqlStr,3 , (err, results) => {
    // 删除失败
    if (err) return console.log(err.message)
    // 删除成功后 ressults 里面的 affectedRows 属性为1
    if (results.affectedRows === 1) console.log('删除数据成功！')  
})