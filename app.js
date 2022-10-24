var express         = require("express"),
multer              = require("multer"),
bodyParser          = require("body-parser"),
mongoose            = require("mongoose"),
methodOverride      = require("method-override"),
expressSanitizer    = require("express-sanitizer"),
app                 = express(),
passport            = require("passport"),
LocalStrategy       = require("passport-local")

var User = require("./models/user");

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.totalprice;
    res.locals.cart;
    next();
})

var adminRoutes     = require("./routes/admin"),
    userRoutes  = require("./routes/user")

//mongoose.connect("mongodb://localhost/TraditionalBakers", { useNewUrlParser: true , useUnifiedTopology: true , useFindAndModify :false, useCreateIndex: true});
mongoose.connect("mongodb+srv://asad:rtaah2004@traditionalbakers.ch2nr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true , useUnifiedTopology: true , useFindAndModify :false, useCreateIndex: true});

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(require("express-session")({
    secret: "I love you",
    resave: false,
    saveUninitialized: false,
}));
 
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));
app.use(expressSanitizer());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use("/", userRoutes);
app.use("/admin", adminRoutes);

app.get("*", function(req, res){
    res.send("Error Not Working");
})

app.listen(process.env.PORT || 3000, function(){
    console.log("The server has started");
})