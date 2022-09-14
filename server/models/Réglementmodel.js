import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Réglement= db.define('réglement',{
    montant:{
        type: DataTypes.INTEGER
    },
    type:{
        type: DataTypes.STRING
    },
    baré:{
        type: DataTypes.STRING
    },
    operation:{
        type: DataTypes.STRING
    },
    banque:{
        type: DataTypes.STRING
    },
    echeance:{
        type: DataTypes.INTEGER
    },
   
   
},{
    freezeTableName:true
});

export default Réglement;
(async()=>{
    await db.sync();
})();