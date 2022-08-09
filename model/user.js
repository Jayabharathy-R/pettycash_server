const mongoose=require("mongoose");
const bcrypt=require('bcryptjs');

const userSchema=mongoose.Schema({
    firstname:{
        required: true,
        type: String
    },
    lastname:{
        required: true,
        type: String
    },
    email:{
        required: true,
        type: String
    },
    password:{
        required: true,
        type: String
    },
    isAdmin:{
        type: Boolean,
        default: false
    }
})
//hash password
userSchema.pre('save',async function(next){
    if(!this.isModified('password'))
    {
        next();
    }
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
    next();
})
const User=mongoose.model('User', userSchema);

module.exports=User;