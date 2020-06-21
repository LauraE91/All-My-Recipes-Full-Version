import React from "react";
import "./css/recipeCardThumbnail.css";

function RecipeCardThumbnail(props) {
  const openClicked = () => {
    props.handleOpenThumbnail(
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

  const editClicked = () => {
    props.handleClickEdit(
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
    <div className="thumbnail-card box">
      <div className="thumbnail-header">
        <h5 className="has-text-weight-semibold is-size-4">{props.title}</h5>
        <h6 className="has-text-weight-semibold has-text-grey-light is-size-5">
          {props.source}
        </h6>
      </div>

      <div className="card-content">
        <ul className="details columns">
          <div className="column">
            <li className="has-text-weight-semibold has-text-grey-light">
              <span>Servings: </span>
              {props.servings}
            </li>

            <li className="has-text-weight-semibold has-text-grey-light">
              <span>Prep: </span>
              {props.prepTime}
            </li>
          </div>

          <div className="column">
            <li className="has-text-weight-semibold has-text-grey-light">
              <span>Cook: </span>
              {props.cookTime}
            </li>

            <li className="has-text-weight-semibold has-text-grey-light">
              <span>Total: </span>
              {props.totalTime}
            </li>
          </div>
        </ul>

        <footer className="card-footer">
          <a
            className="card-footer-item footer-btn"
            onClick={props.handleDeleteClick}
          >
            <i className="far fa-trash-alt has-text-danger "></i>
          </a>
          <a className="card-footer-item footer-btn" onClick={editClicked}>
            <i className="far fa-edit has-text-success "></i>
          </a>
          <a
            className="card-footer-item has-text-weight-semibold open-btn footer-btn"
            onClick={openClicked}
          >
            Open
          </a>
        </footer>

        <div instructions={props.instructions}></div>
        <div notes={props.notes}></div>
        <div id={props.id}></div>
        <div ingredientlist={props.ingredientlist}></div>
        <div amount={props.amount}></div>
        <div ingredientname={props.ingredientname}></div>
      </div>
    </div>
  );
}

export default RecipeCardThumbnail;
