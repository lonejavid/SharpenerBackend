const mysql=require('mysql2');
const pool=mysql.createPool({
    host: 'localhost',
    user: 'root',
    database :'node-complete',
    password: '0123.qwe.'
})

module.exports=pool.promise()