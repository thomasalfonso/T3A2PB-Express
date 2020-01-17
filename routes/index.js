const express = require('express')
const router = express.Router();
const UserRoutes = require('./user_routes');
const AdminRoutes = require('./admin_routes');

router.use('/user', UserRoutes);
router.use('/admin', AdminRoutes)

module.exports = router;