import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Administration = db.define('administration',{
    nom:{
        type: DataTypes.STRING
    },
    lundi:{
        type: DataTypes.STRING
    },
    mardi:{
        type: DataTypes.STRING
    },
    mercredi:{
        type: DataTypes.STRING
    },
    jeudi:{
        type: DataTypes.STRING
    },
    vendredi:{
        type: DataTypes.STRING
    },
    samedi:{
        type: DataTypes.STRING
    },
    idtrib:{
        type:DataTypes.INTEGER
    }
},{
    freezeTableName:true
});
export default Administration;
(async()=>{
    await db.sync();
})();
