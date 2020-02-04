const express = require('express')
const router = express.Router();
const Passport = require('passport');
const UserRoutes = require('./user_routes');
const AdminRoutes = require('./admin_routes');
const AuthRoutes = require('./auth_routes');
const PaymentRoutes = require('./payment_routes');
const ImageRoutes = require('./image_routes');

router.use('/user', UserRoutes);
router.use('/admin', Passport.authenticate('jwt',{session:false}) , AdminRoutes);
router.use('/orders',PaymentRoutes);
router.use('/auth', AuthRoutes);
router.use('/upload', ImageRoutes);


module.exports = router;