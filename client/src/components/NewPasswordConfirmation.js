import React from "react";
import Login from "./Login";
import "./css/login.css";
import { Link } from "react-router-dom";

function NewPasswordConfirmation(props) {
  return (
    <div className="app">
      <div className="box">
        <div className="sub-box login-box">
          <h2 className="box-heading is-size-5 has-text-weight-semibold">
            Your Password has been changed. Please{" "}
            <Link className="has-text-link" to="/login">
              continue the to Login page.
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default NewPasswordConfirmation;
