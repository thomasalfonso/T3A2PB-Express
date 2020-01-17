const {Schema}=require('mongoose');

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    }
})

module.exports = ProductSchema;
