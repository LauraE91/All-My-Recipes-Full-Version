import React from "react";
import "./css/search.css";
//import Navbar from './components/Navbar';

function Search(props) {
  return (
    <div className="search-bar">
      <input
        className="input is-rounded is-medium"
        type="text"
        placeholder="Search..."
        value={props.search}
        onChange={props.handleSearchChange}
      />
    </div>
  );
}

export default Search;
