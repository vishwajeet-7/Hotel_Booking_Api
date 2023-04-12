const mongoose = require('mongoose')

const HotelSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    type:{
        type:String,
        required:true,
    },
    country:{
        type:String,
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
    },
    distance:{
        type:[String],
    },
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        min:0,
        max:5,
        required:true
    },
    rooms:{
        type:[String],
    },
    cheapestPrice:{
        type:Number,
        required:true
    },
    featured:{
        type:Boolean,
        default:false
    },
},{timestamps:true})

const Hotel = mongoose.model('hotel',HotelSchema)

module.exports = Hotel