const mongoose = require('mongoose')
const Schema = mongoose.Schema

let workshopRegistration = new Schema ({
    studentDetails : {
        name : String,
        usn : String,
        branch : String, 
        semester : Number
    },
    workshopName : String,
    timeStamp : Date
})

module.exports = mongoose.model('workshopRegistration', workshopRegistration)