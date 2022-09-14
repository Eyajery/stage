import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;
const Primegreffier =db.define('primegreffier',{
    libelle:{
        type: DataTypes.STRING},
    montant:{
        type: DataTypes.INTEGER},
    impot:{
        type: DataTypes.INTEGER},
    mensuelle:{
        type: DataTypes.STRING},
    },{
        freezeTableName:true
    });
    export default Primegreffier;
    (async()=>{
        await db.sync();
    })();
