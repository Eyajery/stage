import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;
const Photocopie =db.define('photocopie',{
    prixphoto:{
        type: DataTypes.INTEGER}
    },{
        freezeTableName:true
    });
    export default Photocopie;
    (async()=>{
        await db.sync();
        await Photocopie.create({
     
        prixphoto:'600',
          
            });
    })();
   
    