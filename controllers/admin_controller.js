const AdminModel = require('../database/models/admin_model');
const ProductModel = require('../database/models/product_model');
const OrderModel = require('../database/models/order_model');
const JWTService = require('../services/jwt_service');

///Admins 

async function AdminCreate (req,res){
    const {email, password} = req.body;
    const Admin = await AdminModel.create({email, password});
    const AdminAccounts = await AdminModel.find();
    res.json(AdminAccounts);
}

async function AdminLogin (req,res){
    const {email, password} = req.body;
    const Admin = await AdminModel.findOne({email});
    const valid = await Admin.verifyPassword(password);
    if (valid){
        const token = JWTService.generateToken(Admin)
        res.json(token);
    } else {
        res.json('fail')
    }
}

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
    AdminLogin,
    AdminCreate,
    ProductCreate,
    ProductUpdate,
    ProductDelete
}