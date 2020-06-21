const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create item schema & model
const GroceryListItemSchema = new Schema({
  item: {
    type: String,
    required: [true, 'Item field is required']
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  }
});


// Create an Item model
const GroceryListItem = mongoose.model('groceryListItem', GroceryListItemSchema);
module.exports = GroceryListItem;
