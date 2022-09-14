import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;
const Typedossier = db.define('typedossier',{
    nomdossier:{
        type: DataTypes.STRING}
    },{
        freezeTableName:true
    });
    export default Typedossier;
 (async()=>{
        await db.sync();
    })(); 
   