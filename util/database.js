const Sequelize =require('sequelize')

const sequelize=new Sequelize('node-complete','root','0123.qwe.',{
    dialect: 'mysql',
    host: 'localhost'
})
module.exports=sequelize;