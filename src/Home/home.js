// Home.js
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Switch, Router } from "react-router-dom"; // Füge die notwendigen Imports hinzu
import "./home.css";
  
const EventBox = ({ eventName, buttonText }) => {
    return (
      <div className="event-box">
        <h3>{eventName}</h3>
        <button>{buttonText}</button>
      </div>
    );
  };
  
  const Home = () => {
    return (
      <div className="home-container">
        <h1>Willkommen im Zoo!</h1>
  
        <div className="section">
          <h2>Öffnungszeiten:</h2>
          <p>
            Montag-Freitag: 09:00-18:00
            <br />
            Samstag-Sonntag: 09:00-20:00
          </p>
        </div>
  
        <div className="section">
          <h2>Preise:</h2>
          <div className="price-box">
            <p>Kinder: 10.-</p>
            <button>Kaufen</button>
          </div>
          <div className="price-box">
            <p>Erwachsene: 14.-</p>
            <button>Kaufen</button>
          </div>
          <div className="price-box">
            <p>Senioren: 10.-</p>
            <button>Kaufen</button>
          </div>
          <div className="price-box">
            <p>Jugendliche: 12.-</p>
            <button>Kaufen</button>
          </div>
        </div>
  
        <div className="section">
          <h2>Events:</h2>
          <div className="event-container">
            <div className="event-row">
              <EventBox eventName="Zoo-Besuch mit Jugendlichen" buttonText="Buchen" />
              <EventBox eventName="Bastel-Workshop" buttonText="Buchen" />
            </div>
            <div className="event-row">
              <EventBox eventName="Tiere füttern mit Senioren" buttonText="Buchen" />
              <EventBox eventName="Meditieren mit den Tieren" buttonText="Buchen" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;