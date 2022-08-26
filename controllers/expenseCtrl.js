const expressAsyncHandler = require("express-async-handler");
const { Error } = require("mongoose");
const Expense = require("../model/expense");

module.exports.addExpense = expressAsyncHandler(async (req, res) => {
    const {type,title,amount,description}=req.body;
    try {
  
      const expense = await Expense.create({ 
        type,
        title,
        amount,
        description,
        user: req?.user?._id,
      });
      res.status(200).json(expense);
    }
    catch (err) {
      res.json(err);
    }
  });

  module.exports.fetchAllExpense = expressAsyncHandler(async (req, res) => {
    try {
  
      const expense = await Expense.find().populate('user');
      res.status(200).json(expense);
    }
    catch (err) {
      res.json(err);
    }
  });

  module.exports.fetchUserExpense = expressAsyncHandler(async (req, res) => {
    // const id=req?.user?._id;
    console.log(req.user);
    
    try {
  
      const expense = await Expense.find({user:req.user});
      res.status(200).json(expense);
    }
    catch (err) {
      res.json(err);
    }
  });

  module.exports.updateExpense = expressAsyncHandler(async (req, res) => {
    const {id}=req.params;
    const {title,amount,description}=req.body;
    
    try {
  
      const expense = await Expense.findByIdAndUpdate(
        id,
        {
            title,
            amount,
            description
        },
        {new:true}
      );
      res.status(200).json(expense);
    }
    catch (err) {
      res.json(err);
    }
  });
   
  module.exports.deleteExpense = expressAsyncHandler(async (req, res) => {
    const {id}=req.params;
    try {
  
      const expense = await Expense.findByIdAndDelete(id);
      res.status(200).json(expense);
    }
    catch (err) {
      res.json(err);
    }
  });