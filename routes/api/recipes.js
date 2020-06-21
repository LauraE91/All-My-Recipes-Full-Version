const express = require("express");
const router = express.Router();
const Recipe = require("../../models/recipeModel");
const bodyParser = require("body-parser");
const checkToken = require("../../middleware/checkToken");
//User logs in - get recipeList (Recipe) and groceryList (GroceryListItem) --> res.send(Recipe) and res.send(GroceryListItem) to the client upon login & display them aka map over them.
router.get("/recipes", checkToken, (req, res, next) => {
  //find all recipes in the database ( use {} to find all)
  Recipe.find({userId:req.decodedUserData.userId}).then((recipe) => res.send(recipe));

});

router.post("/recipes", checkToken, (req, res, next) => {
  // create and save a new recipe to the db
  //Recipe.create(req.body)
  //  .then((recipe) => res.send(recipe))
  //  .catch((err) => console.log(err));

  const {
    title,
    source,
    servings,
    prepTime,
    cookTime,
    totalTime,
    ingredientlist,
    instructions,
    notes} = req.body;


  const recipe = new Recipe({
    title: title,
    source: source,
    servings: servings,
    prepTime: prepTime,
    cookTime: cookTime,
    totalTime: totalTime,
    ingredientlist: ingredientlist,
    instructions: instructions,
    notes: notes,
    userId: req.decodedUserData.userId
  })

  recipe.save()
    .then((recipe) => {
      res.send(recipe);
    })
    .catch(next);
});

router.delete("/recipes/:id", checkToken, (req, res, next) => {
  // Delete an item from the db.
  Recipe.findByIdAndRemove({ _id: req.params.id })
    .then((recipe) => res.send(recipe))
    .catch((err) => console.log(err));
});

router.put("/recipes/:id", checkToken, (req, res, next) => {
  Recipe.findByIdAndUpdate({ _id: req.params.id }, req.body)
    // Find the updated recipe again and send that one back to the client
    .then(() => {
      Recipe.findOne({ _id: req.params.id }).then((recipe) => res.send(recipe));
    })
    .catch((err) => console.log(err));
});

module.exports = router;
