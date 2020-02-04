const s3 = require('./../config/aws');
const ProductModel = require('./../database/models/product_model')
//Create a multer instance and set the destination folder. The code below uses /public folder.

const uploadImage = async function(req, res, next) {
  const {key} = req.file;
  const {id} = req.body;
  await ProductModel.findByIdAndUpdate(id, {image: key});
  console.log(req.body)
  console.log('id:', {id});
  console.log('key: ', {key})
  res.send("");
};

const show = function(req, res) {
  // console.log(req.params);
  const { id } = req.params;
  const stream = s3.getObject({Key: id, Bucket:process.env.S3_BUCKET_NAME}).createReadStream()
  stream.pipe(res);
}

module.exports = {
    uploadImage,
    show
};
