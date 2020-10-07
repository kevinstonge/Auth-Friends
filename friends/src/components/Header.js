import React from "react";
import { NavLink } from "react-router-dom";
import "../style/Header.scss";
const Header = (props) => {
  return (
    <header>
      <h1>Friends App</h1>
      <nav>
        {props.loggedIn ? (
          <NavLink
            to="/login"
            onClick={() => {
              localStorage.removeItem("token");
              props.setLoggedIn(false);
            }}
          >
            Log out
          </NavLink>
        ) : (
          <NavLink to="/login">Log in</NavLink>
        )}
        <NavLink to="/friends">My friends</NavLink>
      </nav>
    </header>
  );
};
export default Header;
