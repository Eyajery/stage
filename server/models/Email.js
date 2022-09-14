import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;
const Email =db.define('email',{
   
    emailavocat:{
            type: DataTypes.STRING},
    emailclient:{
                type: DataTypes.STRING}
        }
    ,{
        freezeTableName:true
    },
    
    );
    export default Email;

    
    (async()=>{
        await db.sync();
        await Email.create({
          
           emailclient:'',
            emailavocat:'',
            });
    })();