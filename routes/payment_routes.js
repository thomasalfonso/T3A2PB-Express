const express = require('express')
const router = express.Router();
const PaymentController = require('../controllers/payment_controller');

router.post('/', PaymentController.Checkout);

module.exports=router;