import React from "react";
import ChangePassword from "./ChangePassword";
import "./css/login.css";
import { Link } from "react-router-dom";


function ConfirmTempPwSent(props) {
  return (
    <div className="app">
      <div className="box">
        <div className="sub-box login-box">
          <h4 className="is-size-5 has-text-weight-semibold">
            Your temporary password has been sent to your email address. Thank
            you!
          </h4>

          <form>
            <div className="form-group">
              <input
                type="password"
                className="input"
                placeholder="Enter Temporary Password"
              />
            </div>
            <button className="button is-primary">
              <Link
                to="/changePassword"
                className="has-text-white has-text-weight-semibold"
              >
                Confirm Temporary Password
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ConfirmTempPwSent;
