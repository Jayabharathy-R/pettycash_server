const expressAsyncHandler = require("express-async-handler");
const { Error } = require("mongoose");
const CashIn = require("../model/cashIn");

module.exports.addCashIn = expressAsyncHandler(async (req, res) => {
    const {title,amount,description,user}=req.body;
    try {
  
      const cashIn= await CashIn.create({ 
        title,
        amount,
        description,
        user
      });
      res.status(200).json(cashIn);
    }
    catch (err) {
      res.json(err);
    }
  });

  module.exports.fetchAllCashIn = expressAsyncHandler(async (req, res) => {
    try {
  
      const cashIn = await CashIn.find().populate('user');
      res.status(200).json(cashIn);
    }
    catch (err) {
      res.json(err);
    }
  });

  module.exports.fetchSingleCashIn = expressAsyncHandler(async (req, res) => {
    const {id}=req.params;
    try {
  
      const cashIn = await CashIn.findById(id);
      res.status(200).json(cashIn);
    }
    catch (err) {
      res.json(err);
    }
  });

  module.exports.updateCashIn = expressAsyncHandler(async (req, res) => {
    const {id}=req.params;
    const {title,amount,description}=req.body;
    
    try {
  
      const cashIn = await CashIn.findByIdAndUpdate(
        id,
        {
            title,
            amount,
            description
        },
        {new:true}
      );
      res.status(200).json(cashIn);
    }
    catch (err) {
      res.json(err);
    }
  });
   
  module.exports.deleteCashIn = expressAsyncHandler(async (req, res) => {
    const {id}=req.params;
    try {
  
      const cashIn = await CashIn.findByIdAndDelete(id);
      res.status(200).json(cashIn);
    }
    catch (err) {
      res.json(err);
    }
  });