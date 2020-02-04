const express = require("express");
const passport = require("passport");
const multer = require("multer");
const multerS3 = require("multer-s3");
const router = express.Router();
// const upload = multer({ dest: 'uploads/' })
// const { celebrate } = require("celebrate");
const ImageController = require("./../controllers/image_controller");
// const { validateImage } = require("./../middleware/celebrate");
const s3 = require("./../config/aws");

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

//Setup the POST route to upload a file
// router.post('/', ImageController.uploadImage);

router.post('/', upload.single('file'), function (req, res, next) {
    console.log(req.file);
    res.send("");
  })

// POST image

// router.post(
//     "/",
//     upload.array("files"),
//     // celebrate(validateImage),
//     // passport.authenticate("jwt", { session: false }),
//     ImageController.create,
//   );

// GET ROUTE

router.get('/:id', ImageController.show);

module.exports = router;