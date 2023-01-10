const db = require("../utils/database")
const Users = require("../models/users.model")
const Todos = require("../models/todos.model")


const users = [
    {username:"Mateo", email:"mateo@gmail.com",password:"123"},
    {username:"Valen", email:"valen@gmail.com",password:"123"},
    {username:"Juan", email:"juan@gmail.com",password:"123"}
]
const todos = [
    {title:"tarea1", description:"llamar", userId: 1},
    {title:"tarea2", description:"llamar a medico", userId: 1},
    {title:"tarea imposible", userId: 2},
    {title:"tarea3", description:"dormir", userId: 3}
]
const categories =[]
const todosCategories = []

db.sync({force:true})
.then(()=>{
    console.log("iniciando sembrado");
    users.forEach((user)=> Users.create(user));
    setTimeout(()=>{
        todos.forEach((todo) => Todos.create(todo))
    },100)
})
.catch((error)=> console.log(error))