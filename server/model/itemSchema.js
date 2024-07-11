const mongoose=require('mongoose');
const {Schema}=mongoose
const ItemSchema=new Schema({
    itemName:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now
    },
    status:{
        type:String
    }
})
module.exports=mongoose.model("Items",ItemSchema)