import React from "react";
import "./css/recipeCard.css";

function RecipeCard(props) {
  return (
    <div className="box recipeCard">
      <div className="card-content">
        <h2 className="is-size-4 has-text-weight-semibold has-text-dark">
          {props.title}
        </h2>
        <h6 className="is-size-5 has-text-weight-semibold has-text-grey-light">
          {props.source}
        </h6>
        <ul className="details">
          <li className="has-text-grey-light has-text-weight-semibold">
            Servings:{" "}
            <span className="has-text-grey-dark has-text-weight-semibold">
              {props.servings}
            </span>
          </li>
          <li className="has-text-grey-light has-text-weight-semibold">
            Prep:{" "}
            <span className="has-text-grey-dark has-text-weight-semibold">
              {props.prepTime}
            </span>
          </li>
          <li className="has-text-grey-light has-text-weight-semibold">
            Cook:{" "}
            <span className="has-text-grey-dark has-text-weight-semibold">
              {props.cookTime}
            </span>
          </li>
          <li className="has-text-grey-light has-text-weight-semibold">
            Total:{" "}
            <span className="has-text-grey-dark has-text-weight-semibold">
              {props.totalTime}
            </span>
          </li>
        </ul>

        <div className="card-content">
          <div className="section-container">
            <h3 className="has-text-grey-light is-size-5 has-text-weight-semibold">
              Ingredients
            </h3>
            <ul className="has-text-grey-dark">
              {props.ingredientlist.map((ingredient) => {
                return (
                  <li key={ingredient.ingredientid}>
                    <span>{ingredient.amount}</span>
                    <span>{ingredient.ingredientname}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="section-container">
            <h3 className="has-text-grey-light is-size-5 has-text-weight-semibold">
              Instructions
            </h3>
            <p className="has-text-grey-dark"> {props.instructions} </p>
          </div>

          <div className="section-container">
            <h3 className="has-text-grey-light is-size-5 has-text-weight-semibold">
              Notes
            </h3>
            <p className="has-text-grey-dark">{props.notes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
