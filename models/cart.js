var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cart = new Schema({
 
  cartItems: [
{
     productId: {
        type: String,
        required: true
      },
      quantity: {
        type: String,
        required: true
      }
    }

  ]


});
mongoose.model('Cart',cart);