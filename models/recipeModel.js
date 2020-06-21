const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  source: String,
  servings: String,
  prepTime: String,
  cookTime: String,
  totalTime: String,
  ingredientlist: Array,
  instructions: String,
  notes: String,

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  }
})

const Recipe = mongoose.model('recipe', RecipeSchema);
module.exports = Recipe;
