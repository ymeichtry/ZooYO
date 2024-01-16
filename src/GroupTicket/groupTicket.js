import React, { useState } from "react";
import { Link, useNavigate, BrowserRouter, Routes, Route, Switch, Router } from "react-router-dom";
import "./groupTicket.css";

function GroupTicket() {
  const navigate = useNavigate();
  const [buyerName, setBuyerName] = useState("");
  const [numChildren, setNumChildren] = useState(0);
  const [numAdults, setNumAdults] = useState(0);
  const [numSeniors, setNumSeniors] = useState(0);
  const [ticket, setTicket] = useState(null);
  const params = new URLSearchParams(window.location.search);
  const priceChild = params.get("priceChild");
  const priceAdult = params.get("priceAdult");
  const priceSenior = params.get("priceSenior");

  const handleBuy = () => {
    console.log("Buy clicked: " + buyerName);
    fetch("http://localhost:8080/ticket/create-group", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: '',
        buyerName: buyerName,
        price: numChildren * priceChild + numAdults * priceAdult + numSeniors * priceSenior,
        numChildren: numChildren,
        numAdults: numAdults,
        numSeniors: numSeniors
      })
    })
    .then((response) => response.json())
    .then((data) => {
      console.log("result = " + data.id);
      setTicket(data);
    });
  };

  if (ticket == null) {
    return (
      <div className="payment-form">
        <h2>Informationen</h2>
        <label>Name des Kundes:</label>
        <input
            className="input"
            placeholder="Mustermann"
            type="text"
            value={buyerName}
            onChange={(e) => setBuyerName(e.target.value)}
        />
        <label>Anzahl Kinder:</label>
        <input
            className="input"
            placeholder="0"
            type="number"
            value={numChildren}
            onChange={(e) => setNumChildren(e.target.value)}
        />
        <label>Anzahl Erwachsene:</label>
        <input
            className="input"
            placeholder="0"
            type="number"
            value={numAdults}
            onChange={(e) => setNumAdults(e.target.value)}
        />
        <label>Anzahl Senioren:</label>
        <input
            className="input"
            placeholder="0"
            type="number"
            value={numSeniors}
            onChange={(e) => setNumSeniors(e.target.value)}
        />
        <button onClick={handleBuy}>Buy</button>
      </div>
    );
    } else {
      return (
        <div className="payment-form">
          <h2>Ticket</h2>
          <p>Ticket Id: {ticket.id}</p>
          <p>Name: {ticket.buyerName}</p>
          <p>Price: {ticket.price}</p>
          <p>Number children: {ticket.numChildren}</p>
          <p>Number adults: {ticket.numAdults}</p>
          <p>Number seniors: {ticket.numSeniors}</p>
          <Link to="/"><button>Zurück</button></Link>
        </div>
      );
    }
}

export default GroupTicket;