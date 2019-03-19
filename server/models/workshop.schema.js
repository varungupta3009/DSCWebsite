const mongoose = require('mongoose')
const Schema = mongoose.Schema

let workshopRegistration = new Schema ({
    studentDetails : {
        name : String,
        usn : String,
        branch : String, 
        email : String,
        semester : Number
    },
    workshopName : String,
    workshopId : Object,
    timeStamp : Date
})

let workshopDetails = new Schema({
    workshop :{
        name : String,
        description : String,
        organizers : Array,
        requirements : Array
    },
    timeStamp: Date,
    workshopOn : Date,
    hours : Number,
})

const WorkshopRegistration = mongoose.model('workshopRegistration', workshopRegistration)
const WorkshopDetails = mongoose.model('workshopDetails',workshopDetails)

module.exports = {WorkshopDetails,WorkshopRegistration}