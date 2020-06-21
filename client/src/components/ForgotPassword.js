import React from "react";
import ConfirmTempPwSent from "./ConfirmTempPwSent";
import "./css/login.css";
import { Link } from "react-router-dom";

function ForgotPassword(props) {
  return (
    <div className="app">
      <div className="box">
        <div className="sub-box login-box">
          <h2 className="box-heading is-size-5 has-text-weight-semibold">
            Enter Email Address
          </h2>
          <form>
            <div className="form-group">
              <input type="email" className="input" placeholder="Email" />
            </div>
            <button type="submit" className="button is-primary">
              <Link
                to="/confirmTemporaryPasswordSent"
                className="has-text-white has-text-weight-semibold"
              >
                Get New Temporary Password
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
