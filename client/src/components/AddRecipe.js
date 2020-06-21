import React from "react";
import RecipeCardForm from "./RecipeCardForm";
import "../App.css";
import "./css/addRecipe.css";

function AddRecipe(props) {
  return (
    <div className="container">
      <button
        type="button"
        className="button is-medium add-recipe-btn primary-btn"
        onClick={props.handleAddRecipe}
      >
        Add Recipe
      </button>
    </div>
  );
}

export default AddRecipe;
