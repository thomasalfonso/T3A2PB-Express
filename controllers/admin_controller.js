const ProductModel = require('../database/models/product_model');
const OrderModel = require('../database/models/order_model');

///Products

async function ProductCreate(req,res){
    const {name,price,count,available} = req.body;
    await ProductModel.create({name,price,count,available})
    res.redirect('/user')
}

async function ProductUpdate(req,res){
    const {name,price,count,available, id} = req.body;
    await ProductModel.findByIdAndUpdate(id, {name,price,count,available});
    res.redirect('/user')
}

async function ProductDelete(req,res){
    const {id} = req.body;
    await ProductModel.findByIdAndDelete(id);
    res.redirect('/user')
}

module.exports={
    ProductCreate,
    ProductUpdate,
    ProductDelete
}