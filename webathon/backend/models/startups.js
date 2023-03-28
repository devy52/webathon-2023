import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const startupsModel = sequelize.define("startups",{
    startup_id:{
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement:true,
        primaryKey:true
    },
    startup_name:{
        type: DataTypes.STRING
    },
    startup_short_description:{
        type: DataTypes.STRING
    },
    startup_long_description:{
        type: DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    phone:{
        type:DataTypes.STRING
    }
})

export default startupsModel