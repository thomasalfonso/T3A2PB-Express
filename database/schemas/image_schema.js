const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    key: {
        type: String,
        required: true,
    }
});

module.exports = ImageSchema;