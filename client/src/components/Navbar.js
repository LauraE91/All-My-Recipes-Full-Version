import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./css/navbar.css";
import navMenu from "../img/burger36black.png";
import WelcomeMessage from "./WelcomeMessage";

function Navbar(props) {
  const loggedInNavbar = () => {
    return (
      <>
        <Link className="navbar-item" to="/recipes">
          My Recipe Book
        </Link>

        <Link className="navbar-item" to="/list">
          My Shopping List
        </Link>
      </>
    );
  };

  const loggedOutNavbar = () => {
    return (
      <>
        <a className="navbar-item" href="/#featured-recipes">
          Featured Recipes
        </a>

        <a className="navbar-item" href="/#the-app">
          The App
        </a>
      </>
    );
  };

  const signInAndRegisterButtons = () => {
    return (
      <div className="buttons">
        <Link className="button primary-btn" to="/register">
          <strong>Start</strong>
        </Link>
        <Link className="button secondary-btn" to="/login">
          Log in
        </Link>
      </div>
    );
  };

  const accountDropDown = () => {
    return (
      <div className="drop-down navbar-item has-dropdown is-hoverable">
        Account
        <div>
          <i className="fas fa-sort-down"></i>
        </div>
        <div className="navbar-dropdown">
          <Link
            className="main-dropdown-link navbar-item"
            to="/accountSettings"
          >
            <i className="fas fa-cog"></i> Account Settings
          </Link>
          <Link className="navbar-item" to="/referAFriend">
            <i className="fas fa-users"></i> Refer a friend
          </Link>
          <Link className="navbar-item" to="/futureUpdates">
            <i className="far fa-question-circle"></i> Future Updates
          </Link>
          <a className="navbar-item" onClick={() => props.logout()}>
            Logout
          </a>
        </div>
      </div>
    );
  };

  return (
    <div>
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <h1 className="is-size-4 has-text-weight-bold">All My Recipes</h1>
          </Link>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={props.navMenuToggle}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu ">
          <div className="navbar-start">
            {!localStorage.token ? loggedOutNavbar() : loggedInNavbar()}

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                <Link className="navbar-item" to="/about">
                  About
                </Link>
                <Link className="navbar-item" to="/contact">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          {localStorage.token ? <WelcomeMessage /> : null}
          <div className="navbar-end">
            <div className="navbar-item">
              {!localStorage.token
                ? signInAndRegisterButtons()
                : accountDropDown()}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
