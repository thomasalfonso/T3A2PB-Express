const express = require('express')
const router = express.Router();
const PaymentController = require('../controllers/payment_controller');
const {celebrate, Joi} = require('celebrate');

router.post('/', celebrate({
    body:{
        tokenId: Joi.string().required(),
        total: Joi.number().required(),
        description: Joi.string().required()
    }
}),PaymentController.Checkout);

module.exports=router;