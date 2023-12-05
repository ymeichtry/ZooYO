// App.js
import React, { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom"; 
import "./App.css";
import Header from "./header/header";
import Footer from "./footer/footer";
import Home from "./Home/home";
import PayFormular from "./PayFormular/payFormular";

function App() {
  const [isToggled, setToggled] = useState(false);

  const toggleMenu = () => {
    setToggled(!isToggled);
  };

  return (
    <BrowserRouter className="App">
      <Header toggleMenu={toggleMenu} isToggled={isToggled} />
      <Routes>
        <Route path="/events" element={<div>Events Page Content</div>} />
        <Route path="/kaufen" element={<div>Kaufen Page Content</div>} />
        <Route path="/payFormular" element={<PayFormular />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;