const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    title: { required: true, type: String },
    author: { required: true, type: String },
    type: String,
});

module.exports = mongoose.model("Book", BookSchema);