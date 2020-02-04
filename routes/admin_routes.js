const express = require('express');
const router = express.Router();
const {celebrate, Joi} = require('celebrate');
const AdminController = require('../controllers/admin_controller');


//Product CUD
router.post('/product', celebrate({
    body: {
        name: Joi.string().required(),
        size: Joi.string().required(),
        price: Joi.number().min(0).required(),
        count: Joi.number().min(0).required(),
        available: Joi.boolean().required()
    }
}), AdminController.ProductCreate)

router.put('/product', celebrate({
    body:{
        id: Joi.string().required(),
        size: Joi.string().required(),
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

router.delete('/product/:id',AdminController.ProductDelete)

//Order GET
router.get('/order', AdminController.OrderGet)

router.put('/order', AdminController.OrderPut)

module.exports=router;