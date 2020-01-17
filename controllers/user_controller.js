const ProductModel = require('../database/models/product_model')

async function ProductIndex (req,res){
    res.json('placeholder for products information')
}

module.exports = {
    ProductIndex
}