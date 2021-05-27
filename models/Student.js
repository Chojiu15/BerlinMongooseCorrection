const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Student = new Schema({
    name: {
        type : String, required : true
    },
    first_name : String,
    email : String,
   
})

module.exports = mongoose.model('Student', Student)