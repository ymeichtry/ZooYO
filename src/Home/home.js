// Home.js
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Switch, Router } from "react-router-dom"; // Füge die notwendigen Imports hinzu
import "./home.css";

function Home() {

    return (
        <Router>
        <div className="content">
            <h1>Welcome to Our Website</h1>
            <p>This is a simple example of a burger menu.</p>
        </div>{ " " }
    <div className="button-container">
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/kaufen">Kaufen</Link>
        <Link to="/payFormular">Tickets</Link>
    </div>
    </Router>
  );
}

export default Home;