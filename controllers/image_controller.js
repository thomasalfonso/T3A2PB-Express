const s3 = require('./../config/aws');
const ImageModel = require("./../database/models/image_model");

//Create a multer instance and set the destination folder. The code below uses /public folder.

const uploadImage = function(req, res, next) {
  console.log(req.file);
  res.send("");
};

const show = function(req, res) {
  console.log(req.params);
  const { id } = req.params;
  const stream = s3.getObject({Key: id, Bucket:process.env.S3_BUCKET_NAME}).createReadStream()
  stream.pipe(res);
}

module.exports = {
    uploadImage,
    show
};
