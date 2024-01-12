// Home.js
import React, { useState } from "react";
import { Link, useNavigate, BrowserRouter, Routes, Route, Switch, Router } from "react-router-dom";
import "./home.css";
  
const EventBox = ({ eventName, buttonText, eventPath }) => {
    const navigate = useNavigate();
  
    const handleButtonClick = () => {
      navigate(eventPath);
    };
  
    return (
      <div className="event-box">
        <h3>{eventName}</h3>
        <button onClick={handleButtonClick}>{buttonText}</button>
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
          <EventBox eventName="Zoo-Besuch mit Jugendlichen" buttonText="Buchen" eventPath="/Event01" />
          <EventBox eventName="Bastel-Workshop" buttonText="Buchen" eventPath="/Event02" />
        </div>
        <div className="event-row">
          <EventBox eventName="Tiere füttern mit Senioren" buttonText="Buchen" eventPath="/Event03" />
          <EventBox eventName="Meditieren mit den Tieren" buttonText="Buchen" eventPath="/Event04" />
        </div>
      </div>
        </div>
      </div>
    );
  };
  
  export default Home;