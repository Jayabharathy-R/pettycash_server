const express=require('express');
const userRouter=express.Router();
const userCtrl=require('../controllers/userCtrl');


userRouter.post('/register',userCtrl.createUser);
userRouter.post('/login',userCtrl.loginUser);
userRouter.get('/',userCtrl.getUser);

module.exports=userRouter;