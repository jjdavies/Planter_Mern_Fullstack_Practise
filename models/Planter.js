const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PlanterSchema = new Schema({
    gridrow:{
        type:Number,
        required:true
    },
    gridcol:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    change:{
        type:Number,
        required:true
    },
    newstatus:{
        type:String,
        required:true
    },
    owner:{
        type:String,
        required:true
    },

})

module.exports = Planter = mongoose.model("Planter", PlanterSchema)