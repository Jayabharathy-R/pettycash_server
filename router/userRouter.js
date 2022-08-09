const express=require('express');
const userRouter=express.Router();
const userCtrl=require('../controllers/userCtrl');

userRouter.get('/',userCtrl.getUser);
userRouter.post('/register',userCtrl.createUser);

module.exports=userRouter;