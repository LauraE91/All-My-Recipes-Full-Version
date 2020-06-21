import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
  withRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import NavMenu from "./components/NavMenu";
import RecipeBook from "./components/RecipeBook";
import ShoppingList from "./components/ShoppingList";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import ConfirmTempPwSent from "./components/ConfirmTempPwSent";
import ChangePassword from "./components/ChangePassword";
import NewPasswordConfirmation from "./components/NewPasswordConfirmation";
import ThankyouForRegistering from "./components/ThankyouForRegistering";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import PrivacyAndTerms from "./components/PrivacyAndTerms";
import AccountSettings from "./components/AccountSettings";
import ReferAFriend from "./components/ReferAFriend";
import FutureUpdates from "./components/FutureUpdates";
import ContactConfirmation from "./components/ContactConfirmation";
import NotFound from "./components/NotFound";
import axios from "axios";

let navMenu;

function App(props) {
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [authorized, setAuthorized] = useState(false);
  const [emailExistsMsg, setEmailExistsMsg] = useState("");
  const [missingEmailMsg, setMissingEmailMsg] = useState("");
  const [usernameMsg, setUsernameMsg] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");
  const [password2Msg, setPassword2Msg] = useState("");
  const [emailNotFoundMsg, setEmailNotFoundMsg] = useState("");
  const [passwordIncorrectMsg, setPasswordIncorrectMsg] = useState("");

  const initialState = {
    username: "",
    email: "",
    password: "",
    password2: "",
  };

  const [formState, setFormState] = useState(initialState);
  const { username, email, password, password2 } = formState;
  const history = useHistory();
  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    setEmailExistsMsg("");
    setMissingEmailMsg("");
    setUsernameMsg("");
    setPasswordMsg("");
    setPassword2Msg("");
    setEmailNotFoundMsg("");
    setPasswordIncorrectMsg("");
  };

  const logout = (e) => {
    setLoggedIn(false);
    localStorage.removeItem("token");
    history.push("/login");
  };

  function handleRegister(e) {
    e.preventDefault();

    const user = {
      username: formState.username,
      email: formState.email,
      password: formState.password,
      password2: formState.password2,
    };

    // Post request to backend
    axios
      .post("http://localhost:4000/register", user)
      .then((res) => {
        setRegistered(true);
        //console.log(user);
        history.push("/thankyouForRegistering");
      })
      .catch((err) => {
        if(err) {
          setEmailExistsMsg(err.response.data.message);

        }


        if(user.username.length == 0) {
          setUsernameMsg(err.response.data.username);
        }

        if(user.email.length == 0) {
          setMissingEmailMsg(err.response.data.email);
        }

        if(user.password.length == 0) {
          setPasswordMsg(err.response.data.password);
        }

        if(user.password2.length == 0) {
          setPassword2Msg(err.response.data.password2);
        }

        if(user.password.length < 6) {
          setPasswordMsg(err.response.data.password);
        }

        if(user.password !== user.password2) {
          setPassword2Msg(err.response.data.password2);
        }

      });
  }

  const handleLogin = (e) => {
    e.preventDefault();

    const userData = {
      email: formState.email,
      password: formState.password,
    };

    axios
      .post(`http://localhost:4000/login`, userData)
      .then((res) => {
        // Get token from local storage if there is a token
        localStorage.setItem("token", res.data.token);

        // If there is a token, redirect user to their profile and give them access to
        // their recipeList and shoppingList
        setLoggedIn(true);
        history.push("/recipes");

        localStorage.setItem("username", res.data.payload.username);
      })
      .catch((err) => {
        setEmailNotFoundMsg(err.response.data.emailisnotfound);
        setPasswordIncorrectMsg(err.response.data.passwordincorrect);
        console.log(err.response)

        if(userData.email.length == 0) {
          setMissingEmailMsg(err.response.data.email);
        }

        if(userData.password.length == 0) {
         setPasswordMsg(err.response.data.password);
        }
      });
  };


  const navMenuToggle = () => {
    setNavMenuOpen(!navMenuOpen);
  };

  const navMenuClose = () => {
    setNavMenuOpen(false);
  };

  const logoutFromNavMenu = () => {
    logout();
    navMenuClose();
  };

  // If I want to send props via a component in react routing, do this:
  // <Route render={(props) => <Component example={this.state.example}/>}/>
  // use render in place of component.

  return (
    <div>
      <Navbar
        loggedIn={loggedIn}
        navMenuToggle={navMenuToggle}
        logout={logout}
      />
      <NavMenu
        loggedIn={loggedIn}
        show={navMenuOpen}
        navMenuClose={navMenuClose}
        logoutFromNavMenu={logoutFromNavMenu}
        logout={logout}
      />
      <div onClick={() => navMenuClose()}>
      <Switch>
        <Route
          path="/login"
          render={(props) => (
            <Login
              handleLogin={handleLogin}
              handleChange={handleChange}
              email={email}
              password={password}
              missingEmailMsg={missingEmailMsg}
              passwordMsg={passwordMsg}
              emailNotFoundMsg={emailNotFoundMsg}
              passwordIncorrectMsg={passwordIncorrectMsg}

            />
          )}
        />


        <Route
          path="/register"
          render={(props) => (
            <Register
              handleRegister={handleRegister}
              handleChange={handleChange}
              email={email}
              username={username}
              password={password}
              password2={password2}
              emailExistsMsg={emailExistsMsg}
              missingEmailMsg={missingEmailMsg}
              usernameMsg={usernameMsg}
              passwordMsg={passwordMsg}
              password2Msg={password2Msg}
            />
          )}
        />

        <Route
          path="/thankyouForRegistering"
          component={ThankyouForRegistering}
        />

        <Route path="/forgotPassword" component={ForgotPassword} />
        <Route
          path="/confirmTemporaryPasswordSent"
          component={ConfirmTempPwSent}
        />

        <Route path="/changePassword" component={ChangePassword} />
        <Route
          path="/newPasswordConfirmation"
          component={NewPasswordConfirmation}
        />

        <Route
          path="/recipes"
          render={(props) =>
            localStorage.token ? (
              <RecipeBook token={token} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          path="/list"
          render={(props) =>
            localStorage.token ? (
              <ShoppingList token={token} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />

        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacyAndTerms" component={PrivacyAndTerms} />
        <Route
          path="/accountSettings"
          render={(props) =>
            localStorage.token ? (
              <AccountSettings token={token} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />

        <Route
          path="/referAFriend"
          render={(props) =>
            localStorage.token ? (
              <ReferAFriend token={token} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />

        <Route
          path="/futureUpdates"
          render={(props) =>
            localStorage.token ? (
              <FutureUpdates token={token} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />

        <Route path="/confirmation" component={ContactConfirmation} />
        <Route exact path="/" component={() => <Home loggedIn={loggedIn} />} />
        <Route component={NotFound} />
      </Switch>
      </div>
    </div>
  );
}

const AppWithRouter = withRouter(App);

export default AppWithRouter;
