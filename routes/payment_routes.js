const express = require('express')
const router = express.Router();
const PaymentController = require('../controllers/payment_controller');

router.get('/', PaymentController.Test);
router.post('/send', PaymentController.StripePost);
router.post('/receive', PaymentController.StripeReceive);

module.exports=router;