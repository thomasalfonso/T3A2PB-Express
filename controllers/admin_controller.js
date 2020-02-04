const ProductModel = require('../database/models/product_model');
const OrderModel = require('../database/models/order_model');

///Products
async function ProductCreate(req,res){
    const {name,price,count,available, description, size} = req.body;
    let status, error;
    try{
        await ProductModel.create({name,price,count,available, description, size})
        status='success'
    } catch (err){
        status='fail'
        error=err
    }
    res.json({error, status})
}

async function ProductUpdate(req,res){
    const {name,price,count,available, description, size, id} = req.body;
    let status, error;
    try {
        await ProductModel.findByIdAndUpdate(id, {name,price,count,available, description, size});
        status='success'
    } catch (err){
        status='fail'
        error=err
    }
    res.json({error, status})
}

async function ProductDelete(req,res){
    const {id} = req.params;
    await ProductModel.findByIdAndDelete(id);
    const Products = await ProductModel.find();
    res.json(Products)
}

async function OrderGet(req,res){
    const Orders = await OrderModel.find();
    res.json(Orders);
}

async function OrderPut (req, res){
    const {_id, resolved} = req.body
    await OrderModel.findByIdAndUpdate(_id, {resolved})
    const Orders = await OrderModel.find(); 
    res.json(Orders);
}

module.exports={
    ProductCreate,
    ProductUpdate,
    ProductDelete,
    OrderGet,
    OrderPut
}