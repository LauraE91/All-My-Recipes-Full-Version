import React from "react";
import "./css/shoppingList.css";
import axios from "axios";

//import Navbar from './components/Navbar';

// Set config defaults when creating the instance

const token = localStorage.getItem("token");

const authAxios = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    //Authorization: `Bearer ${token}`,
    Authorization: token,
  },
});

class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      userInput: "",
      style: {
        textDecoration: "none",
      },
      readOnly: true,
      search: "",
    };
  }

  componentDidMount() {
    if (this.state.items === []) {
      return null;
    } else {
      //const items = JSON.parse(localStorage.getItem('items'));
      //this.setState({items: items});
      // Load the data from the database and set the state
      authAxios
        .get("http://localhost:4000/list")
        .then((res) => {
          let items = res.data;
          this.setState({ items });
        })
        .catch((err) => console.log(err));
    }
  }

  handleChange = (e) => {
    this.setState({ userInput: e.target.value });
  };

  handleSubmitItem = (e) => {
    e.preventDefault();
    const newItem = {
      item: this.state.userInput,
      //userId: e.target.userId
    };

    authAxios
    //.post(`http://localhost:4000/list/${newItem.userId}`, newItem)
      .post(`http://localhost:4000/list`, newItem)
      .then((res) => {
        this.setState({ items: [...this.state.items, newItem] });
        newItem._id = res.data._id;
      })
      .catch((err) => console.log(err));

    this.setState({ userInput: "" });
  };

  handleRemoveItem = (id) => {
    authAxios.delete(`http://localhost:4000/list/${id}`).then((res) => {
      const filteredItems = this.state.items.filter((item) => id !== item._id);

      this.setState({ items: filteredItems });

    });

    //localStorage.setItem('items', JSON.stringify(filteredItems))
  };

  render() {
    return (
      <div className="shopping-list">
        <form className="field is-grouped" onSubmit={this.handleSubmitItem}>
          <input
            type="text"
            className="input shopping-list-input"
            placeholder="Add item..."
            onChange={this.handleChange}
            value={this.state.userInput}
          />

          <button className="button primary-btn add-btn" type="submit">
            Add
          </button>
        </form>

        <ul className="list-items">
          {this.state.items.map((item, _id) => {
            return (
              <div className="item-container" key={_id}>
                <li className="box item">
                  <input
                    type="text"
                    value={item.item}
                    readOnly={this.state.readOnly}
                  />
                </li>

                <button
                  className="button is-outline btn-remove secondary-btn "
                  onClick={() => this.handleRemoveItem(item._id)}
                >
                  X
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ShoppingList;
