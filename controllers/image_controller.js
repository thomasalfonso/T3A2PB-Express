const s3 = require('./../config/aws');

// const multer = require('multer');


//Create a multer instance and set the destination folder. The code below uses /public folder.

const uploadImage = function(req, res) {
    
    // upload(req, res, function (err) {
    //        if (err instanceof multer.MulterError) {
    //            return res.status(500).json(err)
    //        } else if (err) {
    //            return res.status(500).json(err)
    //        }
    //   return res.status(200).send(req.file)

    // })

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
