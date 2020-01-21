const ProductModel = require('../database/models/product_model')

async function ProductIndex (req,res){
    const Products = await ProductModel.find()
    res.json(Products)
}

module.exports = {
    ProductIndex
}