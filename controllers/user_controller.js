const ProductModel = require('../database/models/product_model')
const s3 = require('./../config/aws');

async function ProductIndex (req, res){
    let error, status, products;
    try {
        products = await ProductModel.find();
        status = 'success';
    } catch (err){
        status = 'error';
        error = err
    }
    res.json({error, status, products});
}

async function ImageShow (req, res) {
    const { id } = req.params;
    let status, error;
    try {
        const stream = s3.getObject({Key: id, Bucket:process.env.S3_BUCKET_NAME}).createReadStream()    
        stream.pipe(res);
    } catch (err){
        status = 'fail';
        error = err;
        res.json({error, status})
    };
  }

module.exports = {
    ProductIndex,
    ImageShow
}