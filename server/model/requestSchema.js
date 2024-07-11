const mongoose=require('mongoose');
const {Schema}= mongoose
const ReqSchema=new Schema({
    reqItem:{
        type:String,
    },
    desc:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    },
    status:{
        type:String
    }
})
module.exports=mongoose.model("Requests",ReqSchema)