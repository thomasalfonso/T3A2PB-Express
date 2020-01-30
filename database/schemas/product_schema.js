const {Schema}=require('mongoose');

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    size: {
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    count: {
        type: Number,
        required: true,
        trim: true
    },
    available: {
        type: Boolean,
        required: true,
        trim: true
    }
})

module.exports = ProductSchema;
