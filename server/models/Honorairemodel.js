import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;
const Honoraire =db.define('honoraire',{
    lbelle:{
        type: DataTypes.STRING},
    lbelle_francais:{
            type: DataTypes.STRING},
    montant:{
        type: DataTypes.INTEGER}
    },{
        freezeTableName:true
    });
    export default Honoraire;

    
    (async()=>{
        await db.sync();
    })();
   