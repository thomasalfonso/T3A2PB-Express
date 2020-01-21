const AdminModel = require('../database/models/admin_model');
const ProductModel = require('../database/models/product_model');
const OrderModel = require('../database/models/order_model');

async function Test (req,res){
    res.json('hello')
}


async function AdminPost (req,res){
    res.json(req.body)
}

module.exports={
    Test,
    AdminPost
}