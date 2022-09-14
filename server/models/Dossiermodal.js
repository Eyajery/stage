import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Dossier = db.define('dossier',{
    adress:{
        type: DataTypes.STRING 
    },
    email:{
        type: DataTypes.STRING
    },
    cin:{
        type: DataTypes.INTEGER 
    },
    num_affaire:{
        type: DataTypes.STRING  
    },
    emplacement:{
        type: DataTypes.STRING
    },
    client:{
        type: DataTypes.STRING
    },
    tel:{
        type: DataTypes.STRING
    },
   
    mission:{
        type: DataTypes.STRING
    },
    adversaire:{
        type: DataTypes.STRING
    },
    reste:{
        type: DataTypes.TEXT
    }
},{
    freezeTableName:true
});

export default Dossier;
(async()=>{
    await db.sync();
})();
