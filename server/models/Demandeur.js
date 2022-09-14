import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Demandeur = db.define('demandeur',{
    nom:{
        type: DataTypes.STRING
    },
    cin:{
        type: DataTypes.INTEGER
    },
    adress:{
        type: DataTypes.STRING
    },
    adress_designé:{
        type: DataTypes.STRING
    },
    tel:{
        type: DataTypes.INTEGER
    },
    fax:{
        type: DataTypes.INTEGER
    },
    email:{
        type: DataTypes.STRING
    },
   
   
},{
    freezeTableName:true
});

export default Demandeur;
(async()=>{
    await db.sync();
})();