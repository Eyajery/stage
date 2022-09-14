import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;
const Greffier =db.define('greffier',{
    nom:{
        type: DataTypes.STRING},
    prenom:{
        type: DataTypes.STRING},
    adresse:{
        type: DataTypes.STRING},
    cin:{
        type: DataTypes.INTEGER},
    tel:{
        type: DataTypes.INTEGER}
    },{
        freezeTableName:true
    });
    export default Greffier;
    (async()=>{
        await db.sync();
    })();
