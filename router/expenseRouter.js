const express=require('express');
const { addExpense, fetchAllExpense, updateExpense, deleteExpense, fetchUserExpense } = require('../controllers/expenseCtrl');
const { authMiddleware } = require('../middleware/authMiddleware');
const expenseRouter=express.Router();


expenseRouter.post('/',authMiddleware,addExpense);
expenseRouter.get('/allExpense',authMiddleware,fetchAllExpense);
expenseRouter.get('/userExpense',authMiddleware,fetchUserExpense);
expenseRouter.put('/:id',authMiddleware,updateExpense);
expenseRouter.delete('/:id',authMiddleware,deleteExpense);

module.exports=expenseRouter;
