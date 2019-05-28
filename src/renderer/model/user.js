import sequelize from '../db/sequelize'
const Sequelize = require('sequelize');

let user = sequelize.define('user',{
    id:{
        type:Sequelize.STRING(50),
        primaryKey:true
    },
    username:{
        type: Sequelize.STRING(50),
        filed: 'user_name'
    }

},{
    // Model 对应的表名将与model名相同
    freezeTableName:true
})

