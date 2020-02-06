const express = require('express')
const router = express.Router();
const AuthController = require('../controllers/auth_controller');
const {celebrate, Joi} = require('celebrate');

//Admin Login
router.post('/login', celebrate({
    body: {
        email: Joi.string().required(),
        password: Joi.string().required()
    }
}), AuthController.AdminLogin)

module.exports=router;