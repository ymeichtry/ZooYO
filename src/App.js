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
      <main>
        <div className="content">
          <h1>Welcome to Our Website</h1>
          <p>This is a simple example of a burger menu.</p>
        </div>{" "}
        <div className="button-container">
          <button>Home</button>
          <button>Events</button>
          <button>Kaufen</button>
          <button>Tickets</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
