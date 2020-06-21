import React from "react";
import "../App.css";
import "./css/recipeCardForm.css";

function EditRecipe(props) {
  const saveClicked = (e) => {
    e.preventDefault();
    props.handleUpdateRecipe(
      props.title,
      props.source,
      props.servings,
      props.prepTime,
      props.cookTime,
      props.totalTime,
      props.ingredientlist,
      props.instructions,
      props.notes,
      props.id
    );
  };

  return (
    <div className="box recipe-card-form">
      <h2 className="has-text-weight-semibold is-size-4 form-title">
        Update Recipe
      </h2>
      <form onSubmit={saveClicked}>
        <div className="columns">
          <div className="column is-two-thirds">
            <input
              className="input"
              type="text"
              placeholder="Recipe Name"
              name="title"
              value={props.title}
              onChange={props.handleEditChange}
            />
            <h6 className="has-text-danger has-text-weight-semibold">
              {props.errorMsg}
            </h6>

            <input
              className="input"
              type="text"
              placeholder="Source"
              name="source"
              value={props.source}
              onChange={props.handleEditChange}
            />
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <input
              className="input"
              type="text"
              placeholder="Servings"
              name="servings"
              value={props.servings}
              onChange={props.handleEditChange}
            />
          </div>

          <div className="column">
            <input
              className="input"
              type="text"
              placeholder="Prep Time"
              name="prepTime"
              value={props.prepTime}
              onChange={props.handleEditChange}
            />
          </div>

          <div className="column">
            <input
              className="input"
              type="text"
              placeholder="Cook Time"
              name="cookTime"
              value={props.cookTime}
              onChange={props.handleEditChange}
            />
          </div>

          <div className="column">
            <input
              className="input"
              type="text"
              placeholder="Total Time"
              name="totalTime"
              value={props.totalTime}
              onChange={props.handleEditChange}
            />
          </div>
        </div>

        <div className="ingredient-list-container">
          <div className="columns ingredient-input-form">
            <div className="column">
              <input
                className="input"
                type="text"
                placeholder="Amount"
                name="amount"
                value={props.amount}
                onChange={props.handleIngredientChange}
              />
            </div>

            <div className="column">
              <input
                className="input"
                type="text"
                placeholder="Ingredient"
                name="ingredientname"
                value={props.ingredientname}
                onChange={props.handleIngredientChange}
              />
            </div>

            <div className="column">
              <button
                type="button"
                className="button third-btn is-outlined is-fullwidth"
                onClick={props.handleAddIngredient}
              >
                Add
              </button>
            </div>
          </div>

          <ul className="ingredient-list">
            {props.ingredientlist.map((ingredient) => {
              return (
                <li key={ingredient.ingredientid}>
                  <button
                    type="button"
                    className="button secondary-btn is-outlined is-small"
                    onClick={() =>
                      props.handleRemoveIngredient(ingredient.ingredientid)
                    }
                  >
                    X
                  </button>
                  <span>{ingredient.amount}</span>
                  <span>{ingredient.ingredientname}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <textarea
          className="textarea"
          placeholder="Instructions"
          name="instructions"
          value={props.instructions}
          onChange={props.handleEditChange}
        />

        <textarea
          className="textarea"
          placeholder="Notes"
          name="notes"
          value={props.notes}
          onChange={props.handleEditChange}
        />

        <div className="columns submit-or-cancel-group">
          <button
            type="button"
            className="button secondary-btn is-fullwidth is-medium"
            onClick={props.handleCancel}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="button primary-btn is-fullwidth is-medium"
          >
            <i className="fas fa-check"></i>Save
          </button>
          <div id={props.id}></div>
        </div>
      </form>
    </div>
  );
}

export default EditRecipe;
