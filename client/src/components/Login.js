import React from "react";
import ForgotPassword from "./ForgotPassword";
import "../App.css";
import "./css/login.css";
import { Link } from "react-router-dom";

function Login(props) {
  return (
    <div className="app">
      <div className="card auth-card">
        <div className="sub-box login-box">
          <h2 className="is-size-3 has-text-weight-semibold box-heading">
            Login
          </h2>
          <form onSubmit={props.handleLogin}>
            <div className="form-group">
              <input
                type="email"
                className="input"
                placeholder="Email"
                name="email"
                value={props.email}
                onChange={props.handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="input"
                placeholder="Password"
                name="password"
                value={props.password}
                onChange={props.handleChange}
              />
            </div>
            <button type="submit" className="button is-primary is-fullwidth">
              <Link to="/profile">Login</Link>
            </button>
          </form>
          <small>
            <Link to="/forgotPassword">Forgot password? </Link>
          </small>
          <small>
            <Link className="link-color" to="/register">
              Don't have an account?{" "}
            </Link>
          </small>
        </div>

        { props.missingEmailMsg &&
        <h3 className="error"> { props.missingEmailMsg } </h3> }

        { props.passwordMsg &&
        <h3 className="error"> { props.passwordMsg } </h3> }

        { props.emailNotFoundMsg &&
        <h3 className="error"> { props.emailNotFoundMsg } </h3>}

        { props.passwordIncorrectMsg &&
        <h3 className="error"> { props.passwordIncorrectMsg } </h3>}



        <div>
          <h4>Sign in with Google or Facebook</h4>
        </div>
      </div>
    </div>
  );
}

export default Login;
