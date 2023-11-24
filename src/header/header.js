import React from "react";
import "./header.css";

function Header({ toggleMenu, isToggled }) {
  return (
    <header>
      <div className={`burger-menu ${isToggled ? "show-menu" : ""}`}>
        <div className="burger-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className="menu-list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="content">
        <h1>Welcome to Our Website</h1>
        <p>This is a simple example of a burger menu.</p>
      </div>{" "}
    </header>
  );
}

export default Header;
