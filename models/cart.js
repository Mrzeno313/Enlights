var mongoose = require("mongoose");

var cartSchema = new mongoose.Schema({
    title: String,
    price: String,
    image: String,
    quantity: String,
    user: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String,
    }
})

module.exports = mongoose.model("Cart", cartSchema);