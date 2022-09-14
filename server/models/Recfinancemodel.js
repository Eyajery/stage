import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;
const Recettefinance =db.define('recettefinance',{
    lbelle:{
        type: DataTypes.STRING},
     montant:{
        type: DataTypes.INTEGER}
    },{
        freezeTableName:true
    });
    export default Recettefinance;

    
    (async()=>{
        await db.sync();
    })();
    