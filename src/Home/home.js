// Home.js
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Switch, Router } from "react-router-dom"; // Füge die notwendigen Imports hinzu
import "./home.css";

const Home = () => {
    return (
      <div>
        <h1>Willkommen im Zoo!</h1>
  
        <div>
          <h2>Öffnungszeiten:</h2>
          <p>
            Montag-Freitag: 09:00-18:00
            <br />
            Samstag-Sonntag: 09:00-20:00
          </p>
        </div>
  
        <div>
          <h2>Preise:</h2>
          <p>
            Kinder: 10.-
            <br />
            Erwachsene: 14.-
            <br />
            Senioren: 10.-
            <br />
            Jugendliche: 12.-
          </p>
        </div>
  
        <div>
          <h2>Events:</h2>
          <ul>
            <li>Zoo-Besuch mit Jugendlichen</li>
            <li>Bastel-Workshop</li>
            <li>Tiere füttern mit Senioren</li>
            <li>Meditieren mit den Tieren</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Home;