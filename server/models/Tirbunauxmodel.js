import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;
const Tirbunaux =db.define('tribunaux',{
    lieux:{
        type: DataTypes.STRING}
    },{
        freezeTableName:true
    });
    export default Tirbunaux;

    
    (async()=>{
        await db.sync();
    })();