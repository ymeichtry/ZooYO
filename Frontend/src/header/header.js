import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import homeIcon from '../01images/homeIcon.png'; 

function Header({ toggleMenu, isToggled }) {
  return (
    <header className="header">

      <ul className={`menu-list ${isToggled ? "show-menu" : ""}`}>
        <li>
          <Link to="/">
            <img src={homeIcon} alt="homeIcon" className="homeIcon" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
