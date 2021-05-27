const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 3002 || process.env.port
require('dotenv').config()
const studentRouter = require('./routes/Students')

app.use(studentRouter)


mongoose.connect(process.env.MONGO_URI, {useNewUrlParser : true, useUnifiedTopology : true})

app.listen(port, console.log('Connected'))

