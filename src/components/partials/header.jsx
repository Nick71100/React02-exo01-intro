import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Mon App' de malaaade !</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">LogIn</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>
    </header>
  );
}

export default Header;
