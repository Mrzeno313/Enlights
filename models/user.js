var mongoose               = require("mongoose"),
    passportLocalMongoose  = require("passport-local-mongoose")

var userSchema = new mongoose.Schema({
    email: String,
    username: String,
    number: String,
    address: String,
    password: String,
    cart: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Cart"
        }
    ]
})

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);