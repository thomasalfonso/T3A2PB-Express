const AdminModel = require('./models/admin_model');
require('dotenv').config({ path: './../.env' })
const email = process.env.ADMIN_EMAIL;
const password = process.env.ADMIN_PASSWORD;
AdminModel.create({email, password}).then(console.log('Admin creation')).catch((err)=>{console.log(err)})
 