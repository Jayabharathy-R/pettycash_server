const mongoose=require("mongoose");

const expenseSchema=mongoose.Schema({
    title:{
        required: [true,"Title is required"],
        type: String
    },
    amount:{
        required:  [true,"Amount is required"],
        type: Number
    },
    type:{
        required:  [true,"Type is required"],
        type: String,
       
    },
    description:{
        required:  [true,"Description is required"],
        type: String
    },
    date : { 
        type : Date,
         default: Date.now },
   
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
}
);

const Expense=mongoose.model('Expense', expenseSchema);

module.exports=Expense;