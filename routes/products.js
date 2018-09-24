const express=require('express')
const productController=require('./../controllers/productController');
const appConfig=require('./../config/appConfig')



let setRouter = (app) => {
   

    app.get('/all',productController.getAllProducts);
    app.post('/create',productController.createProduct);
    app.post('/delete/:prodId',productController.deleteProduct);
    app.put('/edit/:prodId',productController.editProduct);
    app.get('/view/:prodId',productController.viewByProdId);
    app.get('/addCart/:prodId',productController.addCart);
    app.get('/deleteCart/:prodId',productController.deleteCart);
}// end setRouter function 

module.exports = {
    setRouter: setRouter
}