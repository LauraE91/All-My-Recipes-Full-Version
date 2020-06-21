import React from "react";
import "../App.css";
import "./css/recipeCardForm.css";

function SubmitBtn() {
  return (
    <div className="col">
      <button type="submit" className="btn btn-success btn-lg btn-block">
        Add Recipe
      </button>
    </div>
  );
}

export default SubmitBtn;
