import mysql from "mysql";
import 'dotenv/config'
// create the connection to database
const db = mysql.createConnection({
    host: process.env.dbHost,
    database: process.env.dbName,
    user: process.env.dbUser,
    password: process.env.dbPwd,
    multipleStatements: true,
    connectionLimit: 30
});
  
export default db ;

// require("dotenv").config()
// const {createPool} = require("mysql")
// const connection = createPool({
//     host: process.env.dbHost,
//     database: process.env.dbName,
//     user: process.env.dbUser,
//     password: process.env.dbPwd,
//     multipleStatements: true,
//     connectionLimit: 30
// })
// module.exports = connection;

// require("dotenv").config()
// const {createPool} = require("mysql")
// const connection = createPool({
//     host: process.env.dbHost,
//     database: process.env.dbName,
//     user: process.env.dbUser,
//     password: process.env.dbPwd,
//     multipleStatement:true,
//     connectionLimit:30
// })
// module.exports = connection