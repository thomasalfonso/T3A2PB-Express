const {Schema}=require('mongoose');

const OrderSchema = new Schema({
    email:{
        type:String,
        trim: true
    },
    name:{
        type: String,
        trim: true
    },
    line1:{
        type: String,
        trim: true
    },
    line2:{
        type: String,
        trim: true
    },
    city:{
        type: String,
        trim: true
    },
    postcode:{
        type: String,
        trim: true
    },
    state:{
        type: String,
        trim: true
    },
    country:{
        type: String,
        trim: true
    },
    description:{
        type: String,
        trim: true
    },
    amount:{
        type: Number
    },
    receipt_url:{
        type: String,
        trim: true
    },
    resolved:{
        type: Boolean,
        default: false
    }
});

module.exports = OrderSchema;