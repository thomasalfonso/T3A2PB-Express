const ProductModel = require('../database/models/product_model')

async function ProductIndex (req, res, next){
    const Products = await ProductModel.find()
    const DummyProducts = [
        {_id:'1', name: 'Extra Virgin Olive Oil 250ml', price: 11.00, count: 10, available: true },
        {_id:'2', name: 'Extra Virgin Olive Oil 500ml', price: 16.00, count: 10, available: true },
        {_id:'3', name: 'Extra Virgin Olive Oil 3l', price: 65.00, count: 10, available: true },
        {_id:'4', name: 'Extra Virgin Olive Oil 20l', price: 230.00, count: 10, available: false },
        {_id:'5', name: 'Jar of Black Olives 200g', price: 8.00, count: 10, available: true },
        {_id:'6', name: 'Jar of Green Olives 200g', price: 8.00, count: 10, available: true }
    ]
    res.json(Products);
}

module.exports = {
    ProductIndex
}