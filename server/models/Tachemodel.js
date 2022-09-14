import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Taches = db.define('taches',{
    tache:{
        type: DataTypes.STRING
    },
    id_dossier :{
        type:DataTypes.INTEGER
       },
    date_critique:{
        type: DataTypes.DATE
    },
    date_rappel:{
        type: DataTypes.DATE
    },
    resolu:{
        type: DataTypes.STRING
    },
    personne_chargé:{
        type: DataTypes.STRING
    },
    greffier:{
        type: DataTypes.STRING
    },
    course:{
        type: DataTypes.STRING
    },
    lieux:{
        type: DataTypes.STRING
    },
    service:{
        type: DataTypes.STRING
    },
    date_audience:{
        type: DataTypes.DATE
    },
    date_echeance:{
        type: DataTypes.DATE
    },
   
   
},{
    freezeTableName:true
});

export default Taches;
(async()=>{
    await db.sync();
})();