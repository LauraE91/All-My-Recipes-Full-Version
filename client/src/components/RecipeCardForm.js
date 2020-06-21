import React from 'react';
//import IngredientList from './IngredientList';
import '../App.css';
import './css/recipeCardForm.css';

class RecipeCardForm extends React.Component {

//displayIngredientList = () => {

//  if(!this.props.ingredientlist) {
//    this.props.ingredientlist.map(ingredient => {
//    return (
//      <li key={ingredient.ingredientid}>
//          <span>{ingredient.amount}</span>
//          <span>{ingredient.ingredientname}</span>
//          <span ><button type='button' className='btn btn-danger'
//          onClick={() => this.props.handleRemoveIngredient(ingredient.ingredientid)}>X</button></span>
//      </li>
//      )})
//  } else {
//    return null
//  }
//}

componentWillMount() {
  if(!this.props.ingredientlist) {
    return null;
  }
}

  render() {
    return (

      <div className='box recipe-card-form'>
      <h2 className='has-text-weight-semibold is-size-4 form-title'>Create New Recipe</h2>
        <form onSubmit={this.props.handleSubmitNewRecipe}>
        <div className='columns'>
          <div className='column is-two-thirds'>
            <input
            className='input'
            type='text'
            placeholder='Recipe Name'
            name='title'
            value={this.props.name}
            onChange={this.props.handleChange}/>
            <h6 className='has-text-danger has-text-weight-semibold'>{this.props.errorMsg}</h6>


            <input
            className='input'
            type='text'
            placeholder='Source'
            name='source'
            value={this.props.name}
            onChange={this.props.handleChange}/>
          </div>
        </div>


        <div className='columns'>
          <div className='column'>
              <input
              className='input'
              type='text'
              placeholder='Servings'
              name='servings'
              value={this.props.name}
              onChange={this.props.handleChange}/>
              </div>

              <div className='column'>
              <input
              className='input'
              type='text'
              placeholder='Prep Time'
              name='prepTime'
              value={this.props.name}
              onChange={this.props.handleChange}/>
              </div>



            <div className='column'>
              <input
              className='input'
              type='text'
              placeholder='Cook Time'
              name='cookTime'
              value={this.props.name}
              onChange={this.props.handleChange}/>
              </div>

              <div className='column'>
              <input
              className='input'
              type='text'
              placeholder='Total Time'
              name='totalTime'
              value={this.props.name}
              onChange={this.props.handleChange}/>
              </div>
            </div>

          <div className='ingredient-list-container'>
            <div className='columns ingredient-input-form'>
              <div className='column'>
              <input className='input' type='text' placeholder='Amount' name='amount' value={this.props.amount} onChange={this.props.handleIngredientChange}/>
              </div>
              <div className='column'>
              <input
              className='input'
              type='text'
              placeholder='Ingredient' name='ingredientname' value={this.props.ingredientname} onChange={this.props.handleIngredientChange}/>
              </div>
              <div className='column'>
              <button type='button' className='button is-outlined is-fullwidth third-btn add-ingredient-btn' onClick={this.props.handleAddIngredient}>Add</button>
              </div>
            </div>
            <ul className='ingredient-list'>
            {this.props.ingredientlist.map(ingredient => {
            return (
              <li key={ingredient.ingredientid}>
              <button type='button' className='button secondary-btn is-small'
              onClick={() => this.props.handleRemoveIngredient(ingredient.ingredientid)}>X</button>
                  <span>{ingredient.amount}</span>
                  <span>{ingredient.ingredientname}</span>
              </li>
              )})}
            </ul>
          </div>


          <textarea
          className='textarea'
          placeholder='Instructions'
          name='instructions'
          value={this.props.name}
          onChange={this.props.handleChange}/>

          <textarea
          className='textarea'
          placeholder='Notes'
          name='notes'
          value={this.props.name}
          onChange={this.props.handleChange}/>

          <div className='columns submit-or-cancel-group'>

              <button type="button" className='button is-fullwidth is-medium secondary-btn' onClick={this.props.handleCancel}>Cancel</button>


              <button
              type='submit'
              className='button is-fullwidth is-medium primary-btn'
              >Add Recipe</button>

          </div>
        </form>

      </div>

    );
  };

}

export default RecipeCardForm;
