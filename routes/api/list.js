const express = require("express");
const router = express.Router();
const GroceryListItem = require("../../models/listItem");
const bodyParser = require("body-parser");
const checkToken = require("../../middleware/checkToken");
const User = require("../../models/userModel")
//const user = require("./users.js");


//GET request for shopping list
router.get("/list", checkToken, (req, res, next) => {
  // Find all of the items in the db
  GroceryListItem.find({userId:req.decodedUserData.userId}).then((groceryListItems) => {
    res.send(groceryListItems);

  });
});

//POST request for shopping list
router.post("/list", checkToken, (req, res, next) => {
  // Alternate syntax: let groceryListItem = new GroceryListItem(req.body);
  // Or: groceryListItem.create(req.body)

  // Add an item to the database
  const groceryListItem = new GroceryListItem({
    item: req.body.item,
    userId: req.decodedUserData.userId
  });

  groceryListItem.save()
    .then((groceryListItem) => {
      res.send(groceryListItem);
    })
    .catch(next);
});

//DELETE request for shopping listen
router.delete("/list/:id", checkToken, (req, res, next) => {
  GroceryListItem.findByIdAndRemove({ _id: req.params.id })
    .then((groceryListItem) => {
      res.send(groceryListItem);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
