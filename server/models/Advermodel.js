import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Adversaire = db.define('adversaire',{
    nom:{
        type: DataTypes.STRING
    },
    registre:{
        type: DataTypes.STRING
    },
    adresse:{
        type: DataTypes.STRING
    },
    adresse_designé:{
        type: DataTypes.STRING
    },
    avocat:{
        type: DataTypes.STRING
    },
    adresse_avocat:{
        type: DataTypes.STRING
    },

},{
    freezeTableName:true
});

export default Adversaire;
(async()=>{
    await db.sync();
})();