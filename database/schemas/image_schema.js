const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    img: {
        type: String,
        required: true,
      },
    ref: {
        type: String,
        required: true,
    }
});

module.exports = ContactSchema;