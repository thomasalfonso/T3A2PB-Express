const express = require('express')
const router = express.Router();
const AdminController = require('../controllers/admin_controller')

router.get('/', AdminController.Test)
router.post('/', AdminController.AdminPost)

module.exports=router;