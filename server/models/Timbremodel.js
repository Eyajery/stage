import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;
const Timbre =db.define('timbre',{
    lbelle:{
        type: DataTypes.STRING},
        montant:{
        type: DataTypes.INTEGER}
    },{
        freezeTableName:true
    });
    export default Timbre;

    
    (async()=>{
        await db.sync();
    })();
   