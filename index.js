const express=require("express");
const dotenv=require("dotenv");
const mongo=require('./db');
const { errorHandler, notFound } = require("./middleware/errorMiddleware");
const userRouter = require("./router/userRouter");
const app=express();

app.use(express.json());

dotenv.config();

mongo();  

const PORT=process.env.port||3002;

// app.use(function(req, res, next) {
//    res.header('Access-Control-Allow-Origin', '*');
//    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//    next();
//  });

//router 
app.use('/pettycash/users',userRouter);
   


//middleware
app.use(notFound);
app.use(errorHandler);

app.listen(PORT,(req,res)=>{
   console.log(`server is running on port ${PORT}`);
});
