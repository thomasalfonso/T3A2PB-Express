const express = require('express')
const router = express.Router();
const AdminController = require('../controllers/admin_controller')


//Admin Login
router.post('/', AdminController.AdminPost)

//Product CUD
router.post('/product', AdminController.ProductCreate)
router.put('/product', AdminController.ProductUpdate)
router.patch('/product', AdminController.ProductUpdate)
router.delete('/product', AdminController.ProductDelete)

module.exports=router;