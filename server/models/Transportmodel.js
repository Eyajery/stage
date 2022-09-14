import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;
const Transport =db.define('transport',{
    montant:{
        type: DataTypes.INTEGER}
    },{
        freezeTableName:true
    });
    export default Transport;
    (async()=>{
        await db.sync();
        await Transport.create({
     
            montant:'600',
           
            });
    })();
   