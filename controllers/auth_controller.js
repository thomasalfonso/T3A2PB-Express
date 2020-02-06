const AdminModel = require('../database/models/admin_model');
const JWTService = require('../services/jwt_service');

async function AdminLogin (req,res){
    const {email, password} = req.body;
    let status, error, token;
    try {
        const Admin = await AdminModel.findOne({email});
        const valid = await Admin.verifyPassword(password);
        if (valid){ token = JWTService.generateToken(Admin)} 
        else {throw new Error('Invalid Token')}
    } catch (err){
        status = 'fail';
        error = err;
    }
    res.json({error, status, token})
}


module.exports={
    AdminLogin
}