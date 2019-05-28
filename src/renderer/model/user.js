import sequelize from '../db/sequelize'
const Sequelize = require('sequelize');

let user = sequelize.define('user',{
    id:{
        default:0,
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    username:{
        type: Sequelize.STRING(50),
        filed: 'username'
    }

},{
    timestamps: false,  //去除createAt updateAt
    freezeTableName: true,  //使用自定义表名
    // 实例对应的表名
    tableName: 'user'
})

