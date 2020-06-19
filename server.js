const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const passwordHash = require("password-hash");
const session = require("express-session");
const multer = require('multer');




var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "src", "static", "images", "clothes"))
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
   
  var upload = multer({ storage: storage })


//Mongo
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
//End of Mongo Dependancies

//IVE INSTALL MULTER WATCH THE REST OF THE VIDEO
//MADE BY ACADEMIND ON HOW TO UPLOAD IMAGES IN NODE.JS
//IMPORTANT!!!

           
let status = {
    status: "null"
}

let global_choice;

let user_inputs = {
    choice: global_choice
}

var result_array = [];

// const mongodb_atlas_connection = 'mongodb+srv://haseeb:khan123@dentalcluster-sdul0.mongodb.net/test?retryWrites=true&w=majority';

let session_status = {
    status: "not verified",
    id: "null",
    userName: "null",
    email: "null"
}

console.log(status);

console.log(session_status);

const connection = mongoose.connect('mongodb+srv://haseeb:khan123@dentalcluster-sdul0.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});



            //Shopping Cart Schema
const ShoppingCartSchema = new mongoose.Schema({
    name: String,
    qty: { type: Number, default: 1 },
    price: Number,
    image: String,
    account_holder_id: String

});

const Cart = mongoose.model("Cart", ShoppingCartSchema);

            //PRODUCTS SCHEMA

const ProductsSchema = new mongoose.Schema({
    name: String,
    description: String,
    tags: String,
    category: String,
    product_category: String,
    price: Number,
    image: String,
    date_created: {type: Date, default: Date.now},
});

const Product = mongoose.model("Product", ProductsSchema);

            //PRODUCTS SCHEMA END

                //USER SCHEMA
const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    number: String,
    date_created: {type: Date, default: Date.now},

});

const User = mongoose.model("User", UserSchema);
            // USER SHCHEMA AND MODEL END

            // ORDERS SCHEMA 
const OrderSchema = new mongoose.Schema({
    user_name: String,
    amount_paid: Number,
    date_created: {type: Date, default: Date.now},
    account_holder_id: String
})


const Order = mongoose.model("order", OrderSchema);



// //Final Price for each user Schema
const FinalPriceSchema = new mongoose.Schema({
    finalPrice: Number,
    account_holder_id: String
});

const FinalPrice = mongoose.model("finalPrice", FinalPriceSchema);


app.use(express.static(path.join(__dirname, "build")));
app.use(session({secret: "TEO IS THE BEST ELLO SECRET KEY", 
cookie: { maxAge: 8*60*60*1000 },
resave: false ,
saveUninitialized: true, 
store: new MongoStore({mongooseConnection: mongoose.connection})
}))

app.use(bodyParser.urlencoded({extended: true}));




app.get("/people", (req,res) => {
    let people = {
        name: "hello",
        app: "hello"
    }
    res.send(people);
})

app.get("/redirect", function(req,res) {
    res.send(status);

});

app.get("/status", function(req,res) {
    res.send(session_status);
});

app.get("/user-input", (req,res) => {
    res.send(user_inputs);
})

// result.username.toLowerCase() === username.toLowerCase() &&  
//Login route


let ssn;

app.post("/login", (req,res) => {
    let username = req.body.username;
    let password = req.body.password;
    ssn = req.session;
    const names = {
        value: 1,
    }

    User.findOne({
        username: username,
    }, function(err, result){
 
        if(result) {
            if(passwordHash.verify(password, result.password) && result.username.toLowerCase() === username.toLowerCase()) {
                res.status(200);
                status.status = "null";
                ssn.username = result.username;
                ssn.user_id = result._id;
                session_status.userName = result.username;
                session_status.id = ssn.user_id;
                session_status.email = result.email;
                if(ssn.username) {
                    session_status.status = "verified";
                    res.redirect('/');
                } else {
                    status.status = "invalid";
                    session_status.status = "not verified";
                    res.redirect("/login");
                }
            } else {
                status.status = "invalid";
                session_status.status = "not verified";
                res.redirect("/login");
            }
        } else {
            //If no entry set status to no entry so that error message can be displayed
            status.status = "no entry found";
            //redirect to login route so that user can try again
            res.redirect("/login");

        }


    });
});


// Add Product Route
app.post("/admin/add-product", upload.single('image') ,function(req,res) {
    console.log(req.file);
    let product_name = req.body.product_name;
    let categories = req.body.cat_select;
    let tags = req.body.product_tags;
    let desc = req.body.desc;
    let price = req.body.product_price;
    let image = req.file.originalname;
    let product_cat = req.body.product_cat_select;

    let product = new Product({
        name: product_name,
        description: desc,
        product_category: product_cat.toLowerCase(),
        tags: tags,
        category: categories,
        price: price,
        image: image,
    });


    if(product.save()) {

        res.redirect("/admin/add-product");

    } else {
        res.redirect("/admin/add-product");
    }

});

//Show Users
app.get("/admin/users/all", function(req,res) {
    User.find((err, result) => {
        res.send(result);
    });
})

//Show Products
app.get("/admin/products/show-all", function(req,res) {
    
    Product.find(function(err, result) {
        res.send(result);
    });

});

//Show Coats Specifically
app.get("/products/coat", (req,res) => {
    Product.find({product_category: "coat"}, (err,result) => {
        res.send(result);
    });
})

//Show Shirts Specifically
app.get("/products/shirt", (req,res) => {
    Product.find({product_category: "shirt"}, (err,result) => {
        res.send(result);
    })
})

//Show Shoes Specifially
app.get("/product/shoe", (req,res) => {
    Product.find({product_category: "shoe"}, (err, result) => {
        res.send(result);
    })
})

//Show Watch Specifically
app.get("/product/watch", (req,res) => {
    Product.find({product_category: "watch"}, (err, result) => {
        res.send(result);
    })
})


app.post("/add-to-cart/:item_id", (req,res) => {
   let product_id = req.params.item_id;

   if(ssn) {
    Product.findById(product_id, function(err, result) {
    
        if(result) {
            const cartItem = new Cart({
                name: result.name,
                qty: 1,
                price: result.price,
                image: result.image,
                account_holder_id: ssn.user_id
           });

           Cart.find({name: result.name, account_holder_id: ssn.user_id}, function(err, result) {
                if(result.length === 0) {
                    cartItem.save();
                    res.send(true);
                } else {
                    res.send("Sorry you have already added this item to cart")
                }
           })

        } else {
            res.send("No Such Product exists in database");
        }
    })
    
} else {
    res.send("Session is not set");
}
});


//Set Criteria From Products Page
var result_array = [];
app.post("/products/:choice", (req,res) => {


    let choice = req.params.choice;
    
    Product.find((err,result) => {
        result.map((item) => {
            if(item.tags.includes(choice)) {
                Product.findById(item._id, (err,result) => {
                    console.log(result);
                    result_array.push(result);
                })
            }
        });
       
        res.send(result_array);
    });

});






//Shopping Cart
app.get("/shopping-cart/all-items", (req,res) => {
    Cart.find({account_holder_id: ssn.user_id}, function(err, result) {
        if(result) { 
            console.log(result.length);
            res.send(result);


        } else {
            res.send(false);
        }
    })
})

//Shopping Cart Delete Cart Item
app.post("/shopping-cart/delete-item/:id", (req,res) => {
    let product_id = req.params.id;
    if(ssn) {
        Cart.find({account_holder_id: ssn.user_id}, function(err, result) {
            Cart.deleteOne({_id: product_id}, function(err) {
                res.send("item deleted");
            });
        });
    } else {
        res.redirect("/login");
    }
});

//Shopping Cart Update Final Price
app.post("/changeFinalPrice/:finalPrice", (req,res) => {
    let finalPrice = req.params.finalPrice;

    //STAYS COMMENTED OUT
    // FinalPrice.find({ account_holder_id: ssn.user_id, finalPrice: finalPrice },(err,result) => {
    //     if(result) {

    //         FinalPrice.findOneAndUpdate({_id: result._id, account_holder_id: ssn.user_id, })


    // } else {
    //     const newFinalPrice = new FinalPrice({

    //     });

    //     if(ssn) {
    //     newFinalPrice.save();
    //     } else {

    //     }

    // }
    // })
    //STAYS COMMENTED OUT

    FinalPrice.findOneAndUpdate({account_holder_id: ssn.user_id, finalPrice: finalPrice}, {finalPrice: finalPrice}, { new: true, upsert: true }, (err,result) => {
        res.send(result);
    });


})

app.post("/eraseCart", (req,res) => {
    if(ssn) {
        Cart.deleteMany({account_holder_id: ssn.user_id}, (err,result) => {
            res.send(true);
        })
    }
})


app.get("/db-count/cart", function(req,res) {
    let db_name = req.params.name;

    if(ssn) {
        Cart.find({account_holder_id: ssn.user_id}, (err,result) => {
            res.send(result);
        })
    }

})

                //DB Count Routes
// Count Cart Items
app.get("/dbCount/cart", (req,res) => {

    User.find((err,result) => {
        res.send(result);
    })
})

//Products Count
app.get("/dbCount/products", (req,res) => {
    Product.find((err,result) => {
        res.send(result);
    })
})


//Delete User 

app.post("/deleteUser/:id", (req,res) => {
    let userId = req.params.id;
    User.deleteOne({_id: userId}, (err,result) => {
        res.send(true);
    });
})

//Delete Product
app.post('/deleteProduct/:id', (req,res) => {
    let productId = req.params.id;

    Product.deleteOne({_id: productId}, (err, result) => {
        res.send(true);
    })
})

//Create an account route
app.post("/create-an-account", (req,res) => {

    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    let number = req.body.number;

    hashed_password = passwordHash.generate(password);

    let new_user = new User({
        username: username,
        password: hashed_password,
        email: email,
        number: number,
    });
    if(new_user.save()) {
        status.status="new account created";
        res.redirect("/login");
    }

    
}); 

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname+"/build/index.html"));
});

let port = process.env.PORT;

app.listen(port || 5000, () => {
    console.log("Server has been started successfully " + port);
});