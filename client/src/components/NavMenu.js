import React from "react";
import "./css/navMenu.css";
import { Link } from "react-router-dom";

function NavMenu(props) {
  let navMenuClasses = "navMenu";
  if (props.show) {
    navMenuClasses = "navMenu open";
  }

  const navStyle = {
    color: "black",
    textDecoration: "none",
  };

  const loggedInNavMenu = () => {
    return (
      <>
        <Link
          to="/recipes"
          style={navStyle}
          className="navLink"
          onClick={props.navMenuClose}
        >
          <li className="navItem">My Recipe Book</li>
        </Link>

        <Link
          to="/list"
          style={navStyle}
          className="navLink"
          onClick={props.navMenuClose}
        >
          <li className="navItem">My Shopping List</li>
        </Link>

        <Link
          to="/accountSettings"
          style={navStyle}
          className="navLink"
          onClick={props.navMenuClose}
        >
          <li className="navItem">
            <i className="fas fa-cog"></i>Account Settings
          </li>
        </Link>

        <Link
          to="/referAFriend"
          style={navStyle}
          className="navLink"
          onClick={props.navMenuClose}
        >
          <li className="navItem">
            <i className="fas fa-users"></i>Refer a friend
          </li>
        </Link>

        <Link
          to="/futureUpdates"
          style={navStyle}
          className="navLink"
          onClick={props.navMenuClose}
        >
          <li className="navItem">
            <i className="far fa-question-circle"></i>Future Updates
          </li>
        </Link>

        <a
          style={navStyle}
          className="navLink"
          onClick={props.logoutFromNavMenu}
        >
          <li className="navItem">Logout</li>
        </a>
      </>
    );
  };

  const loggedOutNavMenu = () => {
    return (
      <>
        <Link
          to="/register"
          style={navStyle}
          className="navLink"
          onClick={props.navMenuClose}
        >
          <li className="navItem">Start</li>
        </Link>

        <Link
          to="/login"
          style={navStyle}
          className="navLink"
          onClick={props.navMenuClose}
        >
          <li className="navItem">Login</li>
        </Link>

        <a
          href="/#featured-recipes"
          style={navStyle}
          className="navLink"
          onClick={props.navMenuClose}
        >
          <li className="navItem">Featured Recipes</li>
        </a>

        <a
          href="/#the-app"
          style={navStyle}
          className="navLink"
          onClick={props.navMenuClose}
        >
          <li className="navItem">The App</li>
        </a>
      </>
    );
  };

  return (
    <nav className={navMenuClasses}>
      <div className="navClose" onClick={props.navMenuClose}>
        &times;
      </div>
      <ul className="navLinks">
        {!localStorage.token ? loggedOutNavMenu() : loggedInNavMenu()}
      </ul>
    </nav>
  );
}

export default NavMenu;
