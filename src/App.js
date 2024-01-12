// App.js
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./header/header";
import Footer from "./footer/footer";
import Home from "./Home/home";
import PayFormular from "./PayFormular/payFormular";
import PayInformations from "./PayFormular/PayInformations/payInformations";
import Event01 from "./Event01/Event01"; // Importieren Sie die Event-Seite
import Event02 from "./Event02/Event02";
import Event03 from "./Event03/Event03";
import Event04 from "./Event04/Event04";

function App() {
  const [isToggled, setToggled] = useState(false);
  const [collectedInformation, setCollectedInformation] = useState([]);

  const toggleMenu = () => {
    setToggled(!isToggled);
  };

  const handleBuy = (information) => {
    // Add the collected information to the state
    setCollectedInformation([...collectedInformation, information]);
  };

  return (
    <BrowserRouter className="App">
      <Header toggleMenu={toggleMenu} isToggled={isToggled} />
      <Routes>
        <Route path="/events" element={<div>Events Page Content</div>} />
        <Route path="/kaufen" element={<div>Kaufen Page Content</div>} />
        <Route path="/" element={<Home />} />
        <Route
          path="/payFormular"
          element={<PayFormular onBuy={handleBuy} />}
        />
        <Route
          path="/PayInformations"
          element={<PayInformations />}
        />     
        <Route path="/Event01" element={<Event01 />} />
        <Route path="/Event02" element={<Event02 />} />
        <Route path="/Event03" element={<Event03 />} />
        <Route path="/Event04" element={<Event04 />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;