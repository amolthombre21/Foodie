var mongoose = require('mongoose');

module.exports = mongoose.model('FoodOrders', {//food order model
    name: {
        type: String,
        default: ''
    },
   price: {
        type: Number
       }	
});
