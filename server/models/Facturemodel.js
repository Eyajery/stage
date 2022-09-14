import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;
const Facture =db.define('facture',{
    num_facture:{
        type: DataTypes.INTEGER},
    emailavocat:{
            type: DataTypes.STRING},
    emailclient:{
                type: DataTypes.STRING}
        }
    ,{
        freezeTableName:true
    },
    
    );
    export default Facture;

    
    (async()=>{
        await db.sync();
    })();