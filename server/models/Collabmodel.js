import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Collab = db.define('collab',{
    nom:{
        type: DataTypes.STRING
    },
    cin:{
        type: DataTypes.INTEGER
    },
    ville:{
        type: DataTypes.STRING
    },
    rue:{
        type: DataTypes.STRING
    },
    num:{
        type: DataTypes.INTEGER
    },
    code_postale:{
        type: DataTypes.INTEGER
    },
    activité:{
        type: DataTypes.STRING
    },
    tel:{
        type: DataTypes.INTEGER
    },
    fax:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    matricule:{
        type: DataTypes.INTEGER
    },
    mode_reglement:{
        type: DataTypes.STRING
    },
    part:{
        type: DataTypes.INTEGER
    },
    type_reglement:{
        type: DataTypes.STRING
    },
   
},{
    freezeTableName:true
});

export default Collab;