import React from "react";
import { NavLink } from "react-router-dom";
import "../style/Header.scss";
const Header = (props) => {
  return (
    <header>
      <h1>Friends App</h1>
      <nav>
        <NavLink to="/login">Log in</NavLink>
        <NavLink to="/friends">My friends</NavLink>
      </nav>
    </header>
  );
};
export default Header;
