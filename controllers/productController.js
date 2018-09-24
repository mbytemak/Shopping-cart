const mongoose = require('mongoose');
const shortid = require('shortid');
const ProductModel = mongoose.model('Products')
const Cart=mongoose.model('Cart')

let getAllProducts = (req, res) => {

ProductModel.find()
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
               
               
                res.send(err)
            } else if (result==undefined||result=='null'||result=='') {
            
               console.log("no products found");
                res.send('no products found')
            } else {
                
                res.send(result)
            }
        })
}// end get all blogs


            //delete a blog


            let deleteProduct = (req, res) => {

                if (req.params.prodId==undefined||req.params.prodId==null||req.params.prodId==" ") {
            
                    console.log('productId should be passed')
                   
                    res.send("productid should be passed")
                } else {
            
                   ProductModel.remove({ 'productId': req.params.prodId }, (err, result) => {
                        if (err) {
                            console.log('Error Occured.')
                         
                            res.send(err)
                        } else if (result==undefined||result=='null'||result=='') {
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

    if (req.params.prodId==undefined||req.params.prodId==null||req.params.prodId==" ") {

        console.log('prodId should be passed')
       
        res.send("prod id should be passesd")
    } else {

        let options = req.body;
        console.log(options);
        ProductModel.update({ 'productId': req.params.prodId }, options, { multi: true }).exec((err, result) => {

            if (err) {

                console.log('Error Occured.')
               
                res.send(err)
            } else if (result==undefined||result=='null'||result=='') {

                console.log('product Not Found.')
                
                res.send("product not found")
            } else {
                console.log('product Edited Successfully' )
               
                res.send(result)
            }
        })
    }
}
// view product by id 


let viewByProdId = (req, res) => {

    if (req.params.prodId==undefined||req.params.prodId==null||req.params.prodId==" ") {

        console.log('prodId should be passed')
       
        res.send("prod id should be passed")
    } else {

        ProductModel.findOne({ 'productId':req.params.prodId }, (err, result) => {

            if (err) {

                console.log('Error Occured.')
                
                res.send(err)
            } else if (result==undefined||result==null||result=='') {

                console.log('Blog Not Found.'+result)
               
                res.send("blog not found")
            } else {
               console.log("blog found " )
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
let addCart=(req,res)=>{
    let cart = new Cart ({
       cartItems:[{


  
         productId: req.params.prodId ,
          quantity: 0
        


       }]
      })
    
  
    
    Cart.find({ 'cartItems.productId': req.params.prodId }, function(err, userCart){
        if(err){
            
         console.log(err);   
         
        }
        

        
        else if(userCart){
           
            console.log("TEST1: "+JSON.stringify(userCart));




           }
     else {
        var myItem = {

           
            productId: req.params.prodId ,
             quantity: 1
           
       }
       console.log("new product ")

        userCart.push(myItem);
        console.log("TEST: "+JSON.stringify(userCart));


     }
 
      
           /* cart.save((err, result)=> {
                if (err) {
                    console.log(err)
                    res.send(err)
                   
                   
        
                } else {
                    console.log('Success in product creation')
                    res.send(result);
                    console.log("TEST: "+JSON.stringify(result));
                }
            }) */
                 
          

        }
     
     )

}
//Delete item from cart

let deleteCart=(req,res)=>{
 
 {

    if (req.params.prodId==undefined||req.params.prodId==null||req.params.prodId==" ") {

        console.log('prodId should be passed')
       
        res.send("prod id should be passed")
    } else {

        Cart.find({ 'cartItems.productId':req.params.prodId }, (err, result) => {

            if (err) {

                console.log('Error Occured.')
                
                res.send(err)
            } else if (result==undefined||result==null||result=='') {

                console.log('Blog Not Found.'+result)
               
                res.send("blog not found")
            } else {
               console.log("blog found " )
                res.send(result)
            }
        })
    }
 }
}     
                 
          

    
     
     


            











module.exports = {

   getAllProducts:getAllProducts,
   createProduct:createProduct,
 deleteProduct:deleteProduct,
 editProduct:editProduct,
 viewByProdId:viewByProdId,
 addCart:addCart,
 deleteCart:deleteCart
}// 