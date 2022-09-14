import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;
const Archive =db.define('archive',{

    emplacement:{
        type: DataTypes.STRING},
        
    },{
        freezeTableName:true
    });
    export default Archive;

    (async()=>{
        await db.sync();
    })();
   
  