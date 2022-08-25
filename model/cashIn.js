const mongoose=require("mongoose");

const cashInSchema=mongoose.Schema({
    title:{
        required: [true,"Title is required"],
        type: String
    },
    amount:{
        required:  [true,"Amount is required"],
        type: Number
    },
    type:{
        type: String,
        default: "CashIn"
    },
    description:{
        required:  [true,"Description is required"],
        type: String
    },
   
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:[true,"User ID is required"],
    },
},
{
    timestamp: true,
    toJSON:{
        virtuals:true,
    },
    toObject:{
        virtuals:true,
    }
});

const CashIn=mongoose.model('CashIn', cashInSchema);

module.exports=CashIn;