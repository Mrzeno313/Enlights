var mongoose = require("mongoose");

var itemSchema = new mongoose.Schema({
    title: String,
    price: String,
    productcode: String,
    category: String,
    image: String,
    totalnumber: String,
    description: String
})

module.exports = mongoose.model("Item", itemSchema);