var express = require("express");
var router  = express.Router({mergeParams: true});
var Item    = require("../models/item");
var Order   = require("../models/order");
var path    = require("path");
var fs      = require("fs");
var multer  = require("multer");
var passport = require("passport");

var storage = multer.diskStorage({
    destination: "public/assets/images/Products",    
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

var upload = multer({ 
    storage: storage 
}).single('image');


// Admin routes
router.get("/", function(req, res){
    Order.find().populate("user").exec(function(err , orders){
        if(err){
            console.log(err);
        }else{
            res.render("admin/index", {orders : orders});
        }
    })
})

router.get("/orders/:id", function(req, res){
    Order.findById(req.params.id, function(err , order){
        if(err){
            console.log(err);
        }else{
            res.render("admin/order", {order : order});
        }
    })
})

router.get("/products", function(req, res){
    Item.find({}, function(err, findItems){
        if(err){
            console.log("Error");
        }
        else{
            res.render("admin/product-list", {findItems: findItems});
        }
    });
})

router.post("/products", upload, function(req, res){
    var item = {
        title: req.body.title,
        price: req.body.price,
        productcode: req.body.productcode,
        category: req.body.category,
        image: req.file.filename,        
        totalnumber: req.body.totalnumber,
        description: req.body.description
    }
    Item.create(item, function(err, newItem){
        if(err){
            console.log("error");
        }
        else{
            res.redirect("/admin/products");            
        }
    })
})


router.get("/products/new", function(req, res){
    res.render("admin/add-product")
})

router.get("/products/:id/edit", function(req, res){
    Item.findById(req.params.id, function(err, findItem){
        if(err){
            console.log("Error");
        }
        else{
            res.render("admin/edit-product", {Item: findItem});
        }
    });
})

router.put("/products/:id", upload, function(req, res){
    var item = {
        title: req.body.title,
        price: req.body.price,
        productcode: req.body.productcode,
        category: req.body.category,
        image: req.file.filename,
        totalnumber: req.body.totalnumber,
        description: req.body.description
    }
    Item.findByIdAndUpdate(req.params.id, item, function(err, updateItem){
        if(err){
            console.log(err);
        }
        else{
            if (updateItem.image == req.file.filename){
                console.log("same image");
                res.redirect("/admin/products");
            }
            else {
                pathToFile = "public/assets/images/Products/" + updateItem.image;
                fs.unlink(pathToFile, function(err) {
                if (err) {
                    throw err
                } else {
                    res.redirect("/admin/products");
                    console.log("Successfully deleted the file.")
                }
                });
            }
        }
    });
});

router.delete("/products/:id", upload, function(req, res){
    Item.findByIdAndRemove(req.params.id, function(err, delBlog){
        if(err){
            res.redirect("/admin/products");
        }
        else{
            res.redirect("/admin/products");
            pathToFile = "public/assets/images/Products/" + delBlog.image;
            fs.unlink(pathToFile, function(err) {
            if (err) {
                throw err
            } else {
                console.log("Successfully deleted the file.")
            }
            });
        }
    });
});

module.exports = router;