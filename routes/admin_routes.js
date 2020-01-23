const express = require('express');
const router = express.Router();
const {celebrate, Joi} = require('celebrate');
const AdminController = require('../controllers/admin_controller');


//Admin Login
router.post('/login', celebrate({
    body: {
        email: Joi.string().required(),
        password: Joi.string().required()
    }
}), AdminController.AdminLogin)

//Admin Create
router.post('/create', celebrate({
    body: {
        email: Joi.string().required(),
        password: Joi.string().required()
    }
}), AdminController.AdminCreate)

//Product CUD
router.post('/product', celebrate({
    body: {
        name: Joi.string().required(),
        price: Joi.number().min(0).required(),
        count: Joi.number().min(0).required(),
        available: Joi.boolean().required()
    }
}), AdminController.ProductCreate)

router.put('/product', celebrate({
    body:{
        id: Joi.string().required(),
        name: Joi.string().required(),
        price: Joi.number().min(0).required(),
        count: Joi.number().min(0).required(),
        available: Joi.boolean().required()     
    }
}),AdminController.ProductUpdate)


router.patch('/product', celebrate({
    body:{
        id: Joi.string().required(),
        name: Joi.string().required(),
        price: Joi.number().min(0).required(),
        count: Joi.number().min(0).required(),
        available: Joi.boolean().required()     
    }
}), AdminController.ProductUpdate)

router.delete('/product', celebrate({
    body:{
        id: Joi.string().required()     
    }
}), AdminController.ProductDelete)

module.exports=router;