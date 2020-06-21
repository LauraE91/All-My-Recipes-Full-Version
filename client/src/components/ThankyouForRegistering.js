import React from "react";
//import Login from './Login';
import "./css/login.css";
import { Link } from "react-router-dom";
//import Navbar from './components/Navbar';

function ThankyouForRegistering(props) {
  return (
    <div className="app">
      <div className="box">
        <div className="sub-box login-box">
          <h2 className="box-heading">
            Thank you for registering! Please{" "}
            <Link to="/login">continue to Login Page</Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default ThankyouForRegistering;
