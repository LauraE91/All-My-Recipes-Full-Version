import React, { useState } from "react";
import ThankyouForRegistering from "./ThankyouForRegistering";
import { Link, withRoute } from "react-router-dom";
import "../App.css";
import "./css/register.css";
import axios from "axios";


function Register(props) {



  return (
    <div className="app">
      <div className="card auth-card">
        <div className="register-container">
          <h2 className="is-size-3 has-text-weight-semibold box-heading">
            Register
          </h2>
          <form onSubmit={props.handleRegister}>
            <div className="form-group">
              <input
                type="text"
                className="input"
                name="username"
                value={props.username}
                placeholder="Username"
                onChange={props.handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="input"
                name="email"
                value={props.email}
                placeholder="Email"
                onChange={props.handleChange}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="input"
                name="password"
                value={props.password}
                placeholder="Password"
                onChange={props.handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="input"
                name="password2"
                value={props.password2}
                placeholder="Confirm Password"
                onChange={props.handleChange}
              />
            </div>
            <button type="submit" className="button is-primary">
              <a className="has-text-white has-text-weight-semibold">
                Register
              </a>
            </button>
          </form>
        </div>
        <small>
          Or{" "}
          <Link className="link-color" to="/Login">
            Sign in{" "}
          </Link>
        </small>
<div>
  { props.usernameMsg &&
  <h3 className="error"> { props.usernameMsg } </h3> }

  { props.emailExistsMsg &&
  <h3 className="error"> { props.emailExistsMsg } </h3> }

  { props.missingEmailMsg &&
  <h3 className="error"> { props.missingEmailMsg } </h3> }

  { props.passwordMsg &&
  <h3 className="error"> { props.passwordMsg } </h3> }

  { props.password2Msg &&
  <h3 className="error"> { props.password2Msg } </h3> }
</div>

      </div>
    </div>
  );
}

export default Register;
//to="/thankyouForRegistering"
