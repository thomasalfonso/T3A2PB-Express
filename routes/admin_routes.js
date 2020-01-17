const express = require('express')
const router = express.Router();
const AdminController = require('../controllers/admin_controller')

router.get('/', AdminController.Test)

module.exports=router;