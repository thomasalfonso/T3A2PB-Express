const ProductModel = require('../database/models/product_model');
const OrderModel = require('../database/models/order_model');

///Products
async function ProductCreate(req,res){
    const {name,price,count,available, description, size} = req.body;
    let status, error;
    try{
        await ProductModel.create({name,price,count,available, description, size});
        status = 'success';
    } catch (err){
        status = 'fail';
        error = err;
    }
    res.json({error, status})
}

async function ProductUpdate(req,res){
    const {name,price,count,available, description, size, id} = req.body;
    let status, error;
    try {
        await ProductModel.findByIdAndUpdate(id, {name,price,count,available, description, size});
        status = 'success';
    } catch (err){
        status = 'fail';
        error = err;
    }
    res.json({error, status})
}

async function ProductDelete(req,res){
    const {id} = req.params;
    let status, error, products;
    try{
        await ProductModel.findByIdAndDelete(id);
        products = await ProductModel.find();
        status = 'success';
    } catch (err) {
        status = 'fail';
        error = err;
    }
    res.json({error, status, products})
}

//Orders 
async function OrderGet(req,res){
    let status, error, orders;
    try {
        orders = await OrderModel.find();
        status = 'success';
    } catch (err) {
        status = 'fail';
        error = err;
    }
    res.json({error, status, orders});
}

async function OrderPut (req, res){
    const {_id, resolved} = req.body
    let status, error, orders;
    try {
        await OrderModel.findByIdAndUpdate(_id, {resolved})
        orders = await OrderModel.find(); 
        status = 'success';
    } catch (err) {
        status = 'fail';
        error = err;
    }
    res.json({error, status, orders});
}

async function ImageUpload (req, res) {
    const {key} = req.file;
    const {id} = req.body;
    let status, error;
    try {
        await ProductModel.findByIdAndUpdate(id, {image: key});
        status = 'success';
    } catch (err) {
        status = 'fail';
        error = err;
    }
    res.json({error, status});
};

module.exports={
    ProductCreate,
    ProductUpdate,
    ProductDelete,
    OrderGet,
    OrderPut,
    ImageUpload
}