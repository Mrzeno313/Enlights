var mongoose = require("mongoose");

var orderSchema = new mongoose.Schema({
    totalprice: String,
    method: String,
    number: String,
    address: String,
    status: String,
    cart: [
        
    ],
    user: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String,
    }
})

module.exports = mongoose.model("Order", orderSchema);