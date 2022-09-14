import {Sequelize} from "sequelize";

const db = new Sequelize('factures','root','',{
    host: "localhost",
    dialect: "mysql"
});

export default db;