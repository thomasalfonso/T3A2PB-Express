const AdminModel = require('../database/models/admin_model');
const JWTService = require('../services/jwt_service');

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
        res.json({token});
    } else {
        res.json('fail')
    }
}


module.exports={
    AdminLogin,
    AdminCreate
}