import React from "react";
import "../App.css";
import AddRecipe from "./AddRecipe";
import RecipeCardForm from "./RecipeCardForm";
import RecipeCardThumbnail from "./RecipeCardThumbnail";
import RecipeCard from "./RecipeCard";
import EditRecipe from "./EditRecipe";
import BackArrow from "./BackArrow";
import Search from "./Search";
import axios from "axios";

let navMenu;



// Set config defaults when creating the instance
const token = localStorage.getItem("token");

const authAxios = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    Authorization: token,
  },
});

class RecipeBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "default",
      navMenuOpen: false,
      errorMsg: "",
      recipeList: [],
      ingredientlist: [],
      search: "",
    };
  }

  componentDidMount() {
    // Retrieve both the updated list and filtered from the database
    authAxios
      .get("/recipes")
      .then((res) => {
        let recipes = res.data;
        this.setState({ recipeList: recipes });

      })
      .catch((err) => console.log(err));

    //if(this.state.recipeList === []) {
    //  return null;
    //} else {
    //  axios.get('http://localhost:4000/recipes')
    //       .then(res => {
    //         let recipes = res.data;
    //         this.setState({recipeList: recipes})
    //       }).catch(err => console.log(err))

    //const recipes = JSON.parse(localStorage.getItem('recipes'));
    //this.setState({recipeList: recipes});
    //}
  }

  handleIngredientChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddIngredient = (amount, ingredientname, ingredientid) => {
    // Create a new ingredient object
    let newIngredient = {
      amount: this.state.amount,
      ingredientname: this.state.ingredientname,
      ingredientid: Date.now(),
    };

    // Add amount and ingredient to the ingredientList
    this.setState({
      ingredientlist: [...this.state.ingredientlist, newIngredient],
    });

    // Reset the input fields
    this.setState({
      amount: "",
      ingredientname: "",
      ingredientid: "",
    });
  };

  handleRemoveIngredient = (ingredientid) => {
    const filteredIngredientList = this.state.ingredientlist.filter(
      (ingredient) => ingredientid !== ingredient.ingredientid
    );
    this.setState({ ingredientlist: filteredIngredientList });
    console.log(ingredientid);
  };

  // Add Recipe Btn - Open Add Recipe Form
  handleAddRecipe = () => {
    this.setState({ view: "recipeForm" });
    this.setState({ errorMsg: "" });
    this.setState({
      title: "",
      source: "",
      servings: "",
      prepTime: "",
      cookTime: "",
      totalTime: "",
      ingredientlist: [],
      instructions: "",
      notes: "",
      id: "",
    });
  };

  // Close Add Recipe Form
  handleCancel = () => {
    this.setState({ view: "default" });
  };

  // onChange for Add Recipe Form
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.name) {
      this.setState({ errorMsg: "" });
    }
  };

  handleAddNewRecipe = (
    title,
    source,
    servings,
    prepTime,
    cookTime,
    totalTime,
    ingredientlist,
    instructions,
    notes,

  ) => {
    //id
    const newRecipe = {
      title: title,
      source: source,
      servings: servings,
      prepTime: prepTime,
      cookTime: cookTime,
      totalTime: totalTime,
      ingredientlist: ingredientlist,
      instructions: instructions,
      notes: notes,

    };

    if (title) {
      // Add a new recipe to the database
      authAxios
        .post("/recipes", newRecipe)
        .then((res) => {
          this.setState({ view: "recipeSubmitted" });
          this.setState({ recipeList: [...this.state.recipeList, newRecipe] });
          this.setState({ errorMsg: "" });
          //this.setState({ id: res.data._id });
          newRecipe._id = res.data._id;
        })
        .catch((err) => console.log(err));
    } // end if(title)

    if (!title) {
      this.setState({ view: "recipeForm" });
      this.setState({ errorMsg: "Please add a title" });
      this.setState({ recipeList: [...this.state.recipeList] });
    }
  }; // end handleAdddNewRecipe

  handleSubmitNewRecipe = (e) => {
    e.preventDefault();
    this.handleAddNewRecipe(
      this.state.title,
      this.state.source,
      this.state.servings,
      this.state.prepTime,
      this.state.cookTime,
      this.state.totalTime,
      this.state.ingredientlist,
      this.state.instructions,
      this.state.notes,
      this.state.id
    );
    this.setState({
      title: "",
      source: "",
      servings: "",
      prepTime: "",
      cookTime: "",
      totalTime: "",
      ingredientlist: [],
      instructions: "",
      notes: "",
    });
  };

  handleDeleteRecipe = (id) => {
    // set the filtered list to local storage
    //localStorage.setItem('recipes', JSON.stringify(filteredList));
    // Delete a recipe from the database
    authAxios.delete(`recipes/${id}`).then((res) => {
      const filteredList = this.state.recipeList.filter(
        (recipe) => id !== recipe._id
      );
      this.setState({ recipeList: filteredList });
    });
  };

  handleOpenThumbnail = (
    title,
    source,
    servings,
    prepTime,
    cookTime,
    totalTime,
    ingredientlist,
    instructions,
    notes,
    id
  ) => {
    this.setState({ view: "openRecipeCard" });
    // Set the state of the items in the ingredient object

    this.setState({
      title: title,
      source: source,
      servings: servings,
      prepTime: prepTime,
      cookTime: cookTime,
      totalTime: totalTime,
      ingredientlist: ingredientlist,
      instructions: instructions,
      notes: notes,
      id: id,
    });
  };

  //For the back button in the openRecipeCard view
  handleBackBtnClick = () => {
    this.setState({ view: "default" });
  };

  // For when the Edit Btn on Thumbnail is clicked
  handleClickEdit = (
    title,
    source,
    servings,
    prepTime,
    cookTime,
    totalTime,
    ingredientlist,
    instructions,
    notes,
    id
  ) => {
    //id
    this.setState({ view: "editForm" });
    this.setState({ errorMsg: "" });
    // Sets the state of the form, receiving the data from the thumbnail component
    this.setState({
      title: title,
      source: source,
      servings: servings,
      prepTime: prepTime,
      cookTime: cookTime,
      totalTime: totalTime,
      ingredientlist: ingredientlist,
      instructions: instructions,
      notes: notes,
      id: id,
    });
  };

  //For onChange for the Edit Form
  handleEditChange = (e) => {
    // This value needs to go to the state
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.name) {
      this.setState({ errorMsg: "" });
    }
  };

  //title, source, servings, prepTime, cookTime, totalTime, ingredients, instructions, notes, id

  // Receives each updated value and sets the state on an updated recipe
  handleUpdateRecipe = (
    title,
    source,
    servings,
    prepTime,
    cookTime,
    totalTime,
    ingredientlist,
    instructions,
    notes,
    id
  ) => {
    // Make a copy of the recipe List
    const updatedList = [...this.state.recipeList];

    // Add the new values to the updated recipe
    const updatedRecipe = {
      title: title,
      source: source,
      servings: servings,
      prepTime: prepTime,
      cookTime: cookTime,
      totalTime: totalTime,
      ingredientlist: ingredientlist,
      instructions: instructions,
      notes: notes,
      id: id,
    };

    // Form validation

    // If the title field is empty, keep the edit Form up, show an error message, and do not change the state of the recipeList
    if (title === "") {
      this.setState({ view: "editForm" });
      this.setState({ errorMsg: "Please add a title" });
      this.setState({ recipeList: [...this.state.recipeList] });
    }

    if (title) {
      // Find the index of the recipe I clicked on
      const index = updatedList.findIndex((r) => r._id === id);

      // Set the state of each property to the updated value
      updatedList[index].title = title;
      updatedList[index].source = source;
      updatedList[index].servings = servings;
      updatedList[index].prepTime = prepTime;
      updatedList[index].cookTime = cookTime;
      updatedList[index].totalTime = totalTime;
      updatedList[index].ingredientlist = ingredientlist;
      updatedList[index].instructions = instructions;
      updatedList[index].notes = notes;

      authAxios
        .put(`recipes/${id}`, updatedRecipe)
        .then((res) => {
          this.setState({ view: "default" });
          this.setState({ recipeList: updatedList });
          // set the updatedList list to local storage
          //localStorage.setItem('recipes', JSON.stringify(updatedList));
          //this.setState({errorMsg: ''});
        })
        .catch((err) => console.log(err));
    }
  };
  // For the save btn on the edit form
  //handleSaveSubmit = e => {
  //  e.preventDefault();
  //  this.handleUpdateRecipe(this.state.title, this.state.source, this.state.servings, this.state.prepTime, this.state.cookTime, this.state.totalTime, this.state.ingredients, this.state.instructions, this.state.notes, this.state.id);
  //}

  handleSearchChange = (e) => {
    this.setState({ search: e.target.value });
  };

  switchFunction() {
    let filteredItems = this.state.recipeList.filter((recipe) => {
      if (recipe.title) {
        return (
          recipe.title
            .toLowerCase()
            .indexOf(this.state.search.toLowerCase()) !== -1
        );
      } else {
        return null;
      }
    });

    switch (this.state.view) {
      case "recipeSubmitted":
        return (
          <div className="App">
            <AddRecipe handleAddRecipe={this.handleAddRecipe} />
            <Search
              search={this.state.search}
              handleSearchChange={this.handleSearchChange}
            />

            <div className="app-body">
              {filteredItems.map((recipe) => (
                <RecipeCardThumbnail
                  title={recipe.title}
                  source={recipe.source}
                  servings={recipe.servings}
                  prepTime={recipe.prepTime}
                  cookTime={recipe.totalTime}
                  totalTime={recipe.totalTime}
                  ingredientlist={recipe.ingredientlist}
                  instructions={recipe.instructions}
                  notes={recipe.notes}
                  key={recipe._id}
                  id={recipe._id}
                  handleDeleteClick={() => this.handleDeleteRecipe(recipe._id)}
                  handleOpenThumbnail={this.handleOpenThumbnail}
                  handleClickEdit={this.handleClickEdit}
                  amount={this.state.amount}
                  ingredientname={this.state.ingredientname}
                  ingredientid={this.state.ingredientid}
                />
              ))}
            </div>
          </div>
        );
        break;

      case "recipeForm":
        return (
          <div className="App">
            <div className="app-body">
              <RecipeCardForm
                handleCancel={this.handleCancel}
                handleSubmitNewRecipe={this.handleSubmitNewRecipe}
                handleChange={this.handleChange}
                handleIngredientChange={this.handleIngredientChange}
                handleAddIngredient={this.handleAddIngredient}
                handleRemoveIngredient={this.handleRemoveIngredient}
                ingredientlist={this.state.ingredientlist}
                errorMsg={this.state.errorMsg}
                amount={this.state.amount}
                ingredientname={this.state.ingredientname}
              />
            </div>
          </div>
        );
        break;

      case "openRecipeCard":
        return (
          <div className="App">
            <BackArrow handleBackBtnClick={this.handleBackBtnClick} />

            <div className="app-body">
              <RecipeCard
                title={this.state.title}
                source={this.state.source}
                servings={this.state.servings}
                prepTime={this.state.prepTime}
                cookTime={this.state.cookTime}
                totalTime={this.state.totalTime}
                ingredientlist={this.state.ingredientlist}
                instructions={this.state.instructions}
                notes={this.state.notes}
                ingredientid={this.state.ingredientid}
                amount={this.state.amount}
                ingredientname={this.state.ingredientname}
              />
            </div>
          </div>
        );
        break;

      case "editForm":
        return (
          <div className="App">
            <EditRecipe
              title={this.state.title}
              source={this.state.source}
              servings={this.state.servings}
              prepTime={this.state.prepTime}
              cookTime={this.state.cookTime}
              totalTime={this.state.totalTime}
              ingredientlist={this.state.ingredientlist}
              instructions={this.state.instructions}
              notes={this.state.notes}
              id={this.state.id}
              handleCancel={this.handleCancel}
              handleEditChange={this.handleEditChange}
              handleUpdateRecipe={this.handleUpdateRecipe}
              handleSaveSubmit={this.handleSaveSubmit}
              handleIngredientChange={this.handleIngredientChange}
              handleAddIngredient={this.handleAddIngredient}
              handleRemoveIngredient={this.handleRemoveIngredient}
              errorMsg={this.state.errorMsg}
              amount={this.state.amount}
              ingredientname={this.state.ingredientname}
            />
          </div>
        );
      // Try this: if local storage is empty, return <addRecipe /> else return <AddRecipe /> AND <RecipeCardThumbnail />
      default:
        if (this.state.recipeList === "") {
          return (
            <div className="App">
              <AddRecipe handleAddRecipe={this.handleAddRecipe} />

              <div>
                <input
                  type="text"
                  placeholder="Search..."
                  value={this.state.search}
                  onChange={this.handleSearchChange}
                />
                <button>Search</button>
              </div>

              <div className="app-body"></div>
              <div className="default-message">
                <h5 className="text-muted">
                  You have not added any recipes yet
                </h5>
              </div>
            </div>
          );
        }

        if (this.state.recipeList) {
          return (
            <div className="App">
              <AddRecipe handleAddRecipe={this.handleAddRecipe} />

              <Search
                search={this.state.search}
                handleSearchChange={this.handleSearchChange}
              />

              <div className="app-body">
                {filteredItems.map((recipe) => (
                  <RecipeCardThumbnail
                    title={recipe.title}
                    source={recipe.source}
                    servings={recipe.servings}
                    prepTime={recipe.prepTime}
                    cookTime={recipe.totalTime}
                    totalTime={recipe.totalTime}
                    ingredientlist={recipe.ingredientlist}
                    instructions={recipe.instructions}
                    notes={recipe.notes}
                    key={recipe._id}
                    id={recipe._id}
                    handleDeleteClick={() =>
                      this.handleDeleteRecipe(recipe._id)
                    }
                    handleOpenThumbnail={this.handleOpenThumbnail}
                    handleClickEdit={this.handleClickEdit}
                    ingredientid={recipe.ingredientid}
                    amount={this.state.amount}
                    ingredientname={this.state.ingredientname}
                  />
                ))}
              </div>
            </div>
          );
        }
    }
  }

  render() {
    if (this.state.recipeList === []) {
      return (
        <div className="App">
          <AddRecipe handleAddRecipe={this.handleAddRecipe} />
          <Search
            search={this.state.search}
            handleSearchChange={this.handleSearchChange}
          />
          <div className="app-body">
            <h2>Your recipe book is empty</h2>
          </div>
        </div>
      );
    }
    return <div>{this.switchFunction()}</div>;
  }
}
export default RecipeBook;
