import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

//let username;

function WelcomeMessage(props) {
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (localStorage.username) {
      setUsername(localStorage.username);
    }
  });

  let welcomeMessageStyle = {
    marginTop: "1rem",
  };
  return (
    <div style={welcomeMessageStyle}>
      <h3>Welcome {username}!</h3>
    </div>
  );
}

export default WelcomeMessage;
