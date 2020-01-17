const {Schema}=require('mongoose');

const OrderSchema = new Schema({
    stripe_id:{
        type:String,
        required: true
    },
    metadata:{
        type: String,
        required: true
    }
})

module.exports = OrderSchema;