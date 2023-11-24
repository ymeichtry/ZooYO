import React, { useState } from "react";
import "./App.css";
import Header from "./header/header";
import Footer from "./footer/footer";

function App() {
  const [isToggled, setToggled] = useState(false);

  const toggleMenu = () => {
    setToggled(!isToggled);
  };

  return (
    <div className="App">
      <Header toggleMenu={toggleMenu} isToggled={isToggled} />
      <main></main>
      <Footer />
    </div>
  );
}

export default App;
