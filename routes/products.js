const express = require('express')
const productController = require('./../controllers/productController');
const appConfig = require('./../config/appConfig')



let setRouter = (app) => {


    app.get('/api/v1/products/all', productController.getAllProducts);

	/**
	 * @api {get} /api/v1/products/all  Get all Products 
	 * @apiVersion 0.0.1
	 * @apiGroup read
     *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All products Details Found",
        "status": 200,
        
	    "data": [ { title: 'string',
    description: 'string',
    category: 'string',
    author: 'string',
    productId: 'string',
    created: "date",
    lastModified: "date" }
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find product details Details",
	    "status": 500,
	    "data": null
	   }
	 */

    app.post('/api/v1/products/create', productController.createProduct);

    /**
         * @api {post} /api/v1/products/create Create a Product 
         * @apiVersion 0.0.1
         * @apiGroup create
         *  @apiSuccessExample {json} Success-Response:
         *  {
            "error": false,
            "message": " products created",
            "status": 200,
            
            "data": [ { title: 'string',
        description: 'string',
        category: 'string',
        author: 'string',
        productId: 'string',
        created: "date",
        lastModified: "date" }
                    ]
                }
            }
        }
          @apiErrorExample {json} Error-Response:
         *
         * {
            "error": true,
            "message": "Failed To Find product details Details",
            "status": 500,
            "data": null
           }
         */



    app.post('/api/v1/products/delete/:prodId', productController.deleteProduct);

    /**
         * @api {post} /api/v1/products/delete/:prodId Delete Product 
         * @apiVersion 0.0.1
         * @apiGroup delete
         *  @apiSuccessExample {json} Success-Response:
         *  {
            "error": false,
            "message": " products deleted",
            "status": 200,
                }
            }
        }
          @apiErrorExample {json} Error-Response:
         *
         * {
            "error": true,
            "message": "Product not present in products",
            "status": 500,
            "data": null
           }
         */


    app.put('/api/v1/products/edit/:prodId', productController.editProduct);
    /**
	 * @api {put} /api/v1/products/edit/:prodId  Edit Products
	 * @apiVersion 0.0.1
	 * @apiGroup edit
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": " products edited",
        "status": 200,
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Product not present in products",
	    "status": 500,
	    "data": null
	   }
	 */


    app.get('/api/v1/products/view/:prodId', productController.viewByProdId);
    /**
	 * @api {get} /api/v1/products/view/:prodId View Product
	 * @apiVersion 0.0.1
	 * @apiGroup read  
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": " products viewed",
        "status": 200,
        
	    "data": [ { title: 'string',
    description: 'string',
    category: 'string',
    author: 'string',
    productId: 'string',
    created: "date",
    lastModified: "date" }
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "product not found ",
	    "status": 500,
	    "data": null
	   }
	 */
    app.get('/api/v1/products/addCart/:prodId', productController.addCart);
    /**
	 * @api {get} /api/v1/products/addCart/:prodId Add items to cart
	 * @apiVersion 0.0.1
	 * @apiGroup create  
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": " products added",
        "status": 200,
        
        "data": [ {"_id":"5baa06352ed62b47680f1b07",
        "cartItems":[{"_id":"5baa06352ed62b47680f1b08",
        "productId":"eU7mba0MM",
        "quantity":"0"}],"__v":0}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "product not found",
	    "status": 500,
	    "data": null
	   }
	 */
    app.get('/api/v1/products/deleteCart/:prodId', productController.deleteCart);

 /**
	 * @api {get} /api/v1/products/deleteCart/:prodId Delete items from cart
	 * @apiVersion 0.0.1
	 * @apiGroup delete 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": " products deleted",
        "status": 200,
        
       
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "product not found",
	    "status": 500,
	    "data": null
	   }
	 */






}// end setRouter function 

module.exports = {
    setRouter: setRouter
}