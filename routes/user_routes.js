const express = require('express')
const router = express.Router();
const UserController = require('../controllers/user_controller')

router.get('/', UserController.ProductIndex)

router.get('/:id', UserController.ImageShow);

module.exports=router;