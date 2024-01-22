import React, { useState } from "react";
import { Link, useNavigate, BrowserRouter, Routes, Route, Switch, Router } from "react-router-dom";
import "./singleTicket.css";

function SingleTicket() {
  const navigate = useNavigate();
  const [buyerName, setBuyerName] = useState("");
  const [ticket, setTicket] = useState(null);
  const params = new URLSearchParams(window.location.search);
  const ageGroup = params.get("ageGroup");
  const price = params.get("price");

  const handleBuy = () => {
    console.log("Buy clicked: " + buyerName);
    fetch("http://localhost:8080/ticket/create-single", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: '',
        buyerName: buyerName,
        price: price,
        ageGroup: ageGroup
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
        <p>Altersgruppe: {ageGroup}</p>
        <label>
          Name des Kundes:
          <input
            className="input"
            placeholder="Mustermann"
            type="text"
            value={buyerName}
            onChange={(e) => setBuyerName(e.target.value)}
          />
          <button onClick={handleBuy}>Buy</button>
          </label>
        </div>
    );
    } else {
      return (
        <div className="payment-form">
          <h2>Ticket</h2>
          <p>Ticket Id: {ticket.id}</p>
          <p>Name: {ticket.buyerName}</p>
          <p>Price: {ticket.price}</p>
          <p>Age group: {ticket.ageGroup}</p>
          <Link to="/"><button>Zurück</button></Link>
        </div>
      );
    }
}

export default SingleTicket;