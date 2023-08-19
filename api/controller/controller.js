const {express, routes} = require('../controller')
const bodyParser = require('body-parser')
// Import all model's objects
const {users} = require('../model')

//======= User's router =======
routes.get('/users', (req, res)=>{
    users.fetchUsers(req, res)
})
routes.get('/user/:id', (req, res)=>{
    users.fetchUser(req, res)
})
routes.post('/register', bodyParser.json(),
    (req, res)=> {
        users.register(req, res)
    })
routes.put('/user/:id', bodyParser.json(),
    (req, res)=>{
        users.updateUser(req, res)
    })
routes.patch('/user/:id', bodyParser.json(),
    (req, res)=>{
        users.updateUser(req, res)
    })
routes.delete('/user/:id', (req, res)=>{
    users.deleteUser(req, res)
})

module.exports = {
    express, 
    routes
}


// const express = require('express')
// const bodyParser = require('body-parser')
// const routes = express.Router()
// //import all model's objects
// const {users}= require ('../model')

// //user router
// routes.get('/users',(req,res)=>{
//     users.fetchUsers(req,res)
// })
// routes.get('/user/:id',(req,res)=>{
//     users.fetchUser(req,res)
// })
// routes.post('/register',bodyParser.json(),
// (req,res)=>{users.register(req,res)
// })

// routes.put('user/:id',bodyParser.json(),
// (req, res)=>{
//     users.updateUser(req, res)
// })
// routes.patch('user/:id',bodyParser.json(),
// (req, res)=>{
//     users.updateUser(req,res)
// })
// routes.delete('user/:id',(req,res)=>{
//     users.deleteUser(req,res)
// })

// module.exports={
//     express,
//     routes
// }