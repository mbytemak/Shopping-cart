define({ "api": [
  {
    "type": "get",
    "url": "/api/v1/products/addCart/:prodId",
    "title": "Add items to cart",
    "version": "0.0.1",
    "group": "create",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \" products added\",\n        \"status\": 200,\n        \n        \"data\": [ {\"_id\":\"5baa06352ed62b47680f1b07\",\n        \"cartItems\":[{\"_id\":\"5baa06352ed62b47680f1b08\",\n        \"productId\":\"eU7mba0MM\",\n        \"quantity\":\"0\"}],\"__v\":0}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"product not found\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/products.js",
    "groupTitle": "create",
    "name": "GetApiV1ProductsAddcartProdid"
  },
  {
    "type": "post",
    "url": "/api/v1/products/create",
    "title": "Create a Product",
    "version": "0.0.1",
    "group": "create",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \" products created\",\n           \"status\": 200,\n           \n           \"data\": [ { title: 'string',\n       description: 'string',\n       category: 'string',\n       author: 'string',\n       productId: 'string',\n       created: \"date\",\n       lastModified: \"date\" }\n                   ]\n               }\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n            \"error\": true,\n            \"message\": \"Failed To Find product details Details\",\n            \"status\": 500,\n            \"data\": null\n           }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/products.js",
    "groupTitle": "create",
    "name": "PostApiV1ProductsCreate"
  },
  {
    "type": "get",
    "url": "/api/v1/products/deleteCart/:prodId",
    "title": "Delete items from cart",
    "version": "0.0.1",
    "group": "delete",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \" products deleted\",\n        \"status\": 200,\n        \n       \n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"product not found\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/products.js",
    "groupTitle": "delete",
    "name": "GetApiV1ProductsDeletecartProdid"
  },
  {
    "type": "post",
    "url": "/api/v1/products/delete/:prodId",
    "title": "Delete Product",
    "version": "0.0.1",
    "group": "delete",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \" products deleted\",\n           \"status\": 200,\n               }\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n            \"error\": true,\n            \"message\": \"Product not present in products\",\n            \"status\": 500,\n            \"data\": null\n           }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/products.js",
    "groupTitle": "delete",
    "name": "PostApiV1ProductsDeleteProdid"
  },
  {
    "type": "put",
    "url": "/api/v1/products/edit/:prodId",
    "title": "Edit Products",
    "version": "0.0.1",
    "group": "edit",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \" products edited\",\n        \"status\": 200,\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Product not present in products\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/products.js",
    "groupTitle": "edit",
    "name": "PutApiV1ProductsEditProdid"
  },
  {
    "type": "get",
    "url": "/api/v1/products/all",
    "title": "Get all Products",
    "version": "0.0.1",
    "group": "read",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All products Details Found\",\n        \"status\": 200,\n        \n\t    \"data\": [ { title: 'string',\n    description: 'string',\n    category: 'string',\n    author: 'string',\n    productId: 'string',\n    created: \"date\",\n    lastModified: \"date\" }\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find product details Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/products.js",
    "groupTitle": "read",
    "name": "GetApiV1ProductsAll"
  },
  {
    "type": "get",
    "url": "/api/v1/products/view/:prodId",
    "title": "View Product",
    "version": "0.0.1",
    "group": "read",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \" products viewed\",\n        \"status\": 200,\n        \n\t    \"data\": [ { title: 'string',\n    description: 'string',\n    category: 'string',\n    author: 'string',\n    productId: 'string',\n    created: \"date\",\n    lastModified: \"date\" }\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"product not found \",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/products.js",
    "groupTitle": "read",
    "name": "GetApiV1ProductsViewProdid"
  }
] });
