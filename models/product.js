
const mongoose = require('mongoose')
 //import schema 
const Schema = mongoose.Schema;

let productSchema = new Schema(
    {
        productId: {
            type: String,
            unique: true
        },
        title: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        },
       
    category: {
            type: String,
            default: ''
        },
        author: {
            type: String,
            default: ''
        },
       

        created: {
            type: Date,
            default: Date.now
        }, 

        lastModified: {
            type: Date,
            default: Date.now
        }
    }
)
// cart model












mongoose.model('Products', productSchema);
