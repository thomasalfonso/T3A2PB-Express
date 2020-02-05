const express = require('express');
const router = express.Router();
const {celebrate, Joi} = require('celebrate');
const AdminController = require('../controllers/admin_controller');
const multer = require('multer');
const multerS3 = require('multer-s3');
const s3 = require('./../config/aws');
const upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: process.env.S3_BUCKET_NAME,
      metadata: function (req, file, cb) {
        cb(null, {fieldName: file.fieldname});
      },
      key: function (req, file, cb) {
        cb(null, Date.now().toString())
      }
    })
  })


//Product CUD
router.post('/product', celebrate({
    body: {
        name: Joi.string().required(),
        size: Joi.string().required(),
        price: Joi.number().min(0).required(),
        count: Joi.number().min(0).required(),
        available: Joi.boolean().required(),
        description: Joi.string().required(),
        size: Joi.string().required()
    }
}), AdminController.ProductCreate)

router.put('/product'
, celebrate({
    body:{
        id: Joi.string().required(),
        size: Joi.string().required(),
        name: Joi.string().required(),
        price: Joi.number().min(0).required(),
        size: Joi.string().required(),
        count: Joi.number().min(0).required(),
        available: Joi.boolean().required(),
        description: Joi.string().required()
    }
})
,AdminController.ProductUpdate)

router.delete('/product/:id',AdminController.ProductDelete)

//Orders
router.get('/order', AdminController.OrderGet)

router.put('/order', AdminController.OrderPut)

//Image
router.post('/image', upload.single('file'), AdminController.ImageUpload)

// const { validateImage } = require("./../middleware/celebrate");
// celebrate(validateImage);

module.exports=router;