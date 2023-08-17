require("dotenv").config()
const {createpool} = require("mysql")
const connection = createpool({
    host: process.env.dbHost,
    database: process.env.dbName,
    user: process.env.dbUser,
    password: process.env.dbPwd,
    multipleStatement:true,
    connectionLimit:30
})
module.exports = connection