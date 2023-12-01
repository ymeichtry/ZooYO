// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Switch } from "react-router-dom"; // Füge die notwendigen Imports hinzu
import "./App.css";
import Header from "./header/header";
import Footer from "./footer/footer";
import PayFormular from "./PayFormular/payFormular";

function App() {
  const [isToggled, setToggled] = useState(false);

  const toggleMenu = () => {
    setToggled(!isToggled);
  };

  return (
    <Router> {/* Ändere Router statt Routes */}
      <div className="App">
        <Header toggleMenu={toggleMenu} isToggled={isToggled} />
        <main>
          <div className="content">
            <h1>Welcome to Our Website</h1>
            <p>This is a simple example of a burger menu.</p>
          </div>{" "}
          <div className="button-container">
            <Link to="/">Home</Link>
            <Link to="/events">Events</Link>
            <Link to="/kaufen">Kaufen</Link>
            <Link to="/payFormular">Tickets</Link>
          </div>

          <Routes> {/* Ändere von Switch zu Routes */}
            <Route path="/events" element={<div>Events Page Content</div>} />
            <Route path="/kaufen" element={<div>Kaufen Page Content</div>} />
            <Route path="/payFormular" element={<PayFormular />} />
            <Route path="/" element={<div>Home Page Content</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
