// Button.js
import React from "react";

const Button = ({ name }) => {
  return (
    <>
      <div className="button-container">
        <button className="btn-list">{name}</button>
      </div>
    </>
  );
};

export default Button;
