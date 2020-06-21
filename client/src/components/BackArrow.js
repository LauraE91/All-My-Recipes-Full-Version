import React from "react";
import "./css/backArrow.css";

function BackArrow(props) {
  return (
    <div className="container container-back-arrow">
      <button className="button primary-btn" onClick={props.handleBackBtnClick}>
        &larr;
      </button>
    </div>
  );
}

export default BackArrow;
