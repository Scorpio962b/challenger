// import express
import express from "express";
// import cors
import cors from "cors";
 
import bodyParser from "body-parser";
 
// import routes
import Router from "./routes/routes.js";
  
// init express
const app = express();
  
// use express json
app.use(express.json());
  
// use cors
app.use(cors());
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
  
// use router
app.use(Router);
app.get('/', (req, res)=>{
    res.json({
        status: res.statusCode,
        msg: "You're home"
    })
    res.sendFile()
})
app.listen(3000, () => console.log('Server running at http://localhost:3000'));


// const  routes = require('./routes/routes');
// const path = require('path')
// //import routes from "./controller/controller.js" ;
// // // import path from 'path'
// const express = require('express');
// const app = express();
// const port = +process.env.PORT || 3000
// //static
// app.use(express.static('./static'))
// app.use(
//     express.urlencoded({
//         extended: false
//     }),
//     // routes
    
// );


// app.get('^/$|/challenger', 
//     (req, res)=> {
//     res.sendFile(path.resolve(__dirname, 
//         './static/html/index.html'))
//  })
// app.get("/", (req, res) => {
//     res.json({
//         message:"Awe"
//     })
// })

// app.listen(port, ()=>{
//     console.log(`The server is running on port ${port}`)
// });



// const {express, routes} = require('./controller/controller.js')
// const path = require('path')
// const app = express()
// const port = +process.env.PORT || 3000
// static
// app.use(express.static('./static'))
// app.use(
//     express.urlencoded({
//         extended: false
//     }),
//     routes
// )
// routes.get('^/$|/challenger',
// (req, res)=>{
//     res.sendFile(path.resolve(__dirname,
//         './static/index.html'))
// })

// app.listen(port,()=>{
//     console.log(`the server is running on port https://${port}`)
// })