import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;
const Paramgeneral =db.define('paramgeneral',{
    timbrefiscale:{
        type: DataTypes.INTEGER},
    tva:{
        type: DataTypes.INTEGER}
    },{
        freezeTableName:true
    });
   
    export default Paramgeneral;
    (async()=>{
        await db.sync();
        await Paramgeneral.create({
          
          timbrefiscale:'600',
          tva:'13',
          });
    })();
    