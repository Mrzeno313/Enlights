var express = require("express");
var router  = express.Router({mergeParams: true});
var passport = require("passport");
var Item = require("../models/item");
var User = require("../models/user");
var Cart = require("../models/cart");
var Order = require("../models/order");
var nodemailer = require('nodemailer');

router.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.totalprice;
    res.locals.email;
    res.locals.cart;
    next();
})

// User routes

router.get("/", function(req, res){
    res.render("user/index")
})

router.get("/contact", function(req, res){
    res.render("user/contact")
})

router.get("/profile", isLoggedIn, function(req, res){
    User.findById(req.user._id, function(err , user){
        if(err){
            console.log(err);
        }
        else {
            res.render("user/profile", {user : user});
        }
    }); 
})

router.get("/categories", function(req, res){
    Item.find({}, function(err, findItems){
        if(err){
            console.log("Error");
        }
        else{
            res.render("user/products", {findItems: findItems});
        }
    });
})

router.get("/categories/:category", function(req, res){
    Item.find({category: req.params.category}, function(err, findItems){
        if(err){
            console.log("Error");
        }
        else{
            res.render("user/products", {findItems: findItems});
        }
    });
})

router.get("/products/:id", function(req, res){
    Item.findById(req.params.id, function(err, findItem){
        if(err){
            console.log("Error");
        }
        else{
            res.render("user/product-detail", {findItem: findItem});
        }
    });
})

router.get("/cart", isLoggedIn, function(req, res){
    User.findById(req.user._id).populate("cart").exec(function(err , user){
        if(err){
            console.log(err);
        }else{
            cart = user;
            email = user.email;
            var price = 0;
            user.cart.forEach(function(item){
                price += parseInt(item.price);
            });
            totalprice = price;
            res.render("user/cart", {user : user});
        }
    }) 
})

router.post("/cart/:id", isLoggedIn, function(req, res){
    // Adding an item to cart
    Item.findById(req.params.id, function(err, cartItem){
        if(err){
            console.log("Error");
        }
        else{
            var price = parseInt(cartItem.price) * parseInt(req.body.quantity);
            Cart.create({
                title: cartItem.title,
                price: price,
                image: cartItem.image,
                quantity: req.body.quantity,
            }, function(err, cartItem){
                if (err){
                    console.log(err);
                }
                else{
                    User.findById(req.user._id, function(err, finduser){
                        if(err){
                            console.log(err);
                        }
                        else {
                            cartItem.user.id = req.user._id;
                            cartItem.user.username = req.user.username;
                            cartItem.save();
                            finduser.cart.push(cartItem);
                            finduser.save();
                            res.redirect("/cart");
                        }
                    })                    
                }
            })
        }
    });
})

router.get("/cart/checkout", isLoggedIn, function(req, res){
    res.render("user/checkout");
})

router.get("/cart/order-success", isLoggedIn, function(req, res){
    // saving order details
    var paymentMethod = "Cash On Delivery";
    Cart.find({
        "user.id" : req.user._id
    }, function(err , cartItem){
        if(err){
            console.log(err);
        }else{
            Order.create({
                method: paymentMethod,
                address: cart.address,
                number: cart.number,
                cart: cartItem,
                status: "On the way"
            }, function(err, newOrder){
                if(err){
                    console.log(err);
                }
                else{
                    newOrder.totalprice = totalprice + 20;
                    newOrder.user.id = req.user._id;
                    newOrder.user.username = req.user.username;
                    newOrder.save();
                    console.log(newOrder);
                    res.render("user/order-success", {newOrder_Id: newOrder._id});
                    
                    var source = "<!DOCTYPE html>" +
                    "<html>" +
                    "<head>" +
                    "<style>" +
                    "#customers {" +
                      "font-family: Arial, Helvetica, sans-serif;" +
                      "border-collapse: collapse;" +
                      "width: 100%;" +
                    "}" +
                    "#customers td, #customers th {" +
                      "border: 1px solid #ddd;" +
                      "padding: 8px;" +
                    "}" +
                    "#customers tr:nth-child(even){background-color: #f2f2f2;}" +                    
                    "#customers tr:hover {background-color: #ddd;}" +                    
                    "#customers th {" +
                      "padding-top: 12px;" +
                      "padding-bottom: 12px;" +
                      "text-align: left;" +
                      "background-color: #a15d10;" +
                      "color: white;" +
                    "}" +
                    "</style>" +
                    "</head>" +
                    "<body>" +
                    "<p>Hi, " + req.user.username + "</p>" + 
                    "<p>Just to let you know — we've received your order # 60dc8ff92367262b40687cfb , and it is now being processed:</p>" +
                    "<p>Pay with cash upon delivery. The Products will be delivered withing 2-4 business days after confirmation call!</p>" +
                    "<table id='customers'>" +
                      "<tr>" +
                        "<th>Product Name</th>" +
                        "<th>Price</th>" +
                        "<th>Quantity</th>" +
                      "</tr>";

                    cart.cart.forEach(function(Item){
                        source += "<tr>" +
                                    "<td>" + Item.title + "</td>" +
                                    "<td>" + Item.price + "</td>" +
                                    "<td>" + Item.quantity + "</td>" +
                                  "</tr>" 
                    })

                    source += "</table>" +
                    "<h2>Total Price: " + totalprice + "</h2>"            
                    "</body>" +
                    "</html>";

                    var transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: 'muhammad.tufail199913@gmail.com',
                            pass: 'rtaah2004'
                        }
                    });
                
                    var mailOptions = {
                        from: 'muhammad.tufail199913@gmail.com',
                        to: email,
                        subject: 'Your Traditional Bakers order has been received!',
                        html: source
                    };
                
                    transporter.sendMail(mailOptions, function(error, info){
                        if (error) {
                            console.log(error);
                        } else {
                            console.log('Email sent: ' + info.response);
                        }
                    });
                    // emptying the cart
                    Cart.deleteMany({
                        "user.id" : req.user._id
                    }, function(err, removedItems){
                        if(err){
                            console.log(err);
                        }
                        else {
                            console.log(removedItems);
                        }
                    });
                    User.findById(req.user._id, function(err , user){
                        if(err){
                            console.log(err);
                        }
                        else {
                            user.cart.splice(0,user.cart.length)
                            user.save();
                        }
                    }); 
                }
            });
            
        }
    })
})

router.get("/about-us", function(req, res){
    res.render("user/about-us")
})


router.get("/register", function(req, res){
    res.render("user/register")
})

router.post("/register", function(req, res){
    User.register(new User({
        email: req.body.email,
        username: req.body.username,
        number: req.body.number,
        address: req.body.address,
    }), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("user/register");
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/");
        });
    });
});

router.get("/login", function(req, res){
    res.render("user/login");
});

router.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login"
}), function(req, res){
    
});

router.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
})

function isLoggedIn(req, res, next){
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;
