var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cart = new Schema({
 
  cartItems: { type: Array, default: void 0 } 


});
mongoose.model('Cart',cart);