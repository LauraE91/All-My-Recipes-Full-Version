import React from "react";
//import ForgotPassword from './ForgotPassword';
import "./css/login.css";
import { Link } from "react-router-dom";
//import Navbar from './components/Navbar';

function ChangePassword(props) {
  return (
    <div className="app">
      <div className="box">
        <div className="sub-box login-box">
          <h2 className="box-heading is-size-5 has-text-weight-semibold">
            Change Password
          </h2>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="input"
                placeholder="Enter New Password"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="input"
                placeholder="Confirm New Password"
              />
            </div>
            <button className="button is-primary">
              <Link
                to="/newPasswordConfirmation"
                className="has-text-white has-text-weight-semibold"
              >
                Change Password
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
