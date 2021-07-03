import React from "react";
import { Link } from "react-router-dom";

const Button = ({ color, text, onClick }) => {
  return (
    <div>
      <Link to="/reservations">
        <button
          className="btn-lg btn-dark"
          style={{ backgroundColor: color }}
          onClick={onClick}
        >
          {text}
        </button>
      </Link>
    </div>
  );
};

export default Button;
