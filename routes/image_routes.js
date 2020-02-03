const express = require("express");
const router = express.Router();
const ImageController = require("../controllers/image_controller");

//Setup the POST route to upload a file
router.post('/', ImageController.uploadImage);


module.exports = router;