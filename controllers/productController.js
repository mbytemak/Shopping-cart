const mongoose = require('mongoose');
const shortid = require('shortid');
const ProductModel = mongoose.model('Products')
const Cart = mongoose.model('Cart')
const response = require('./../libs/responseLib')
let getAllProducts = (req, res) => {
//Find all products
    ProductModel.find()
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)

                let apiResponse = response.generate(true, 'Failed To Find product Details', 500, null)
                res.send(apiResponse)
            } else if (result == undefined || result == 'null' || result == '') {

                console.log("no products found");
                let apiResponse = response.generate(true, 'no products found', 404, null)
                res.send(apiResponse)
            } else {
                console.log(result)
                let apiResponse = response.generate(false, 'Details found: ', 200, null)
                res.send(apiResponse)
            }
        })
}// end get all products

//delete a blog
let deleteProduct = (req, res) => {
    if (req.params.prodId == undefined || req.params.prodId == null || req.params.prodId == " ") {
        console.log('productId should be passed')
        res.send("productid should be passed")
    } else {

        ProductModel.remove({ 'productId': req.params.prodId }, (err, result) => {
            if (err) {
                console.log('Error Occured.')

                res.send(err)
            } else if (result == undefined || result == 'null' || result == '') {
                console.log('prod Not Found.')

                res.send("prod not found")
            } else {
                console.log('prod Deletion Success')

                res.send("prod deleted successfulluy")
            }
        })
    }
}

// editing a product
let editProduct = (req, res) => {
    if (req.params.prodId == undefined || req.params.prodId == null || req.params.prodId == " ") {
        console.log('prodId should be passed')
        res.send("prod id should be passesd")
    } else {
        let options = req.body;
        console.log(options);
        ProductModel.update({ 'productId': req.params.prodId }, options, { multi: true }).exec((err, result) => {
            if (err) {
                console.log('Error Occured.')
                res.send(err)
            } else if (result == undefined || result == 'null' || result == '') {

                console.log('product Not Found.')
                res.send("product not found")
            } else {
                console.log('product Edited Successfully')
                res.send(result)
            }
        })
    }
}
// view product by id 


let viewByProdId = (req, res) => {

    if (req.params.prodId == undefined || req.params.prodId == null || req.params.prodId == " ") {
        console.log('prodId should be passed')
        res.send("prod id should be passed")
    } else {
        ProductModel.findOne({ 'productId': req.params.prodId }, (err, result) => {
            if (err) {
                console.log('Error Occured.')
                res.send(err)
            } else if (result == undefined || result == null || result == '') {
                console.log('Blog Not Found.' + result)
                res.send("blog not found")
            } else {
                console.log("blog found ")
                res.send(result)
            }
        })
    }
}

//creating a product 
let createProduct = (req, res) => {
    var today = Date.now()
    let newProduct = new ProductModel({

        productId: req.body.productId,
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        author: req.body.fullName,
        created: today,
        lastModified: today
    })
    newProduct.save((err, result) => {
        if (err) {
            console.log(err)
            response.send(err)
        } else {
            console.log('Success in product creation')
            res.send(result)
        }
    })
}

//adding items in to cart to cart
let addCart = (req, res) => {
    let cart = new Cart({
        cartItems: [{
            productId: req.params.prodId,
            quantity: 0
        }]
    })
    Cart.findOne({ 'cartItems.productId': req.params.prodId }, function (err, userCart) {
        if (err) {
            console.log(err);
        }
        else {
            var carts = JSON.stringify(userCart);
            console.log(carts.length)
            if (carts.length > 5) {
                console.log("Product already present : " + JSON.stringify(userCart));
                res.send("product already present" + userCart);
            }
            else {
                console.log("new product added to cart ")
                // userCart.push(myItem);
                cart.save((err, result) => {
                    if (err) {
                        console.log(err)
                        res.send(err)
                    } else {
                        console.log('Success in product creation')

                        res.send("Product added to cart " + "/n" + result);
                        console.log("TEST: " + JSON.stringify(result));
                    }
                })
            }
        }
    })
}

//Delete item from cart

let deleteCart = (req, res) => {
    Cart.remove({ 'cartItems.productId': req.params.prodId }, function (err, userCart) {
        if (err) {
            console.log(err);
        }
        else {
            var carts = JSON.stringify(userCart);
            //console.log(carts.length)
            if (carts.length < 5) {

                console.log("Product not present : ");

                res.send("product already present");
            }
            else {
                console.log("Product deleted succesfully  ")

                res.send("Product deleted successfully");
            }
        }
    })
}

module.exports = {

    getAllProducts: getAllProducts,
    createProduct: createProduct,
    deleteProduct: deleteProduct,
    editProduct: editProduct,
    viewByProdId: viewByProdId,
    addCart: addCart,
    deleteCart: deleteCart

}