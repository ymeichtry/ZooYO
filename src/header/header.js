import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header({ toggleMenu, isToggled }) {
  return (
    <header className="header">

      <ul className={`menu-list ${isToggled ? "show-menu" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
