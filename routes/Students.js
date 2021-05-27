const Student = require('../models/Student')
const express = require('express')
const studentRouter = express.Router()
studentRouter.use(express.urlencoded({extended : true}))

studentRouter.post('/api/students', (req, res) => {
    Student
    .create({name : 'Doe', first_name : 'John', email : 'john@doe.com'})
    .then(student => res.json(student))
    .catch(err => res.json(err))
})

studentRouter.get('/api/students', (req, res) => {
    Student
    .find()
    .then(student => res.json(student))
    .catch(err => res.json(err))
})

studentRouter.put('/api/students', (req, res) => {
    Student
    .updateOne({first_name : 'John'}, {$set : { first_name : 'Bob', email : 'bob@doe.com' }})
    .then(student => res.json(student))
    .catch(err => res.json(err))
})





module.exports = studentRouter

