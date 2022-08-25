const express=require('express');
const { addCashIn, fetchAllCashIn, fetchSingleCashIn, updateCashIn, deleteCashIn } = require('../controllers/cashInCtrl');
const { authMiddleware } = require('../middleware/authMiddleware');
const cashInRouter=express.Router();



cashInRouter.post('/',authMiddleware,addCashIn);
cashInRouter.get('/',authMiddleware,fetchAllCashIn);
cashInRouter.get('/:id',authMiddleware,fetchSingleCashIn);
cashInRouter.put('/:id',authMiddleware,updateCashIn);
cashInRouter.delete('/:id',authMiddleware,deleteCashIn);

module.exports=cashInRouter;