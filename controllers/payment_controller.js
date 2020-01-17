const OrderModel = require('../database/models/order_model');

async function Test(req,res){
    res.json('payment')
}

async function StripePost (req,res){
    res.json('payment')
}

async function StripeReceive (req,res){
    res.json('payment')
}

module.exports = {
    Test,
    StripePost,
    StripeReceive
}

