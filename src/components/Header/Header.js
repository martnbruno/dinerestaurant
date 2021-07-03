import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import "./Header.css";

const Header = ({ headerImage1, title, subtitle }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <header style={{ backgroundImage: `url(${headerImage1})` }}>
      <Link to="/">
        {" "}
        <h1 id="dine-header">dine</h1>
      </Link>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
    </header>
  );
};

export default Header;
