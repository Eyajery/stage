import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;
const Empdossier =db.define('empdossier',{
    nomdossier:{
        type: DataTypes.STRING}
    },{
        freezeTableName:true
    }
    );
    export default Empdossier;

    
    (async()=>{
        await db.sync();
    })();
   