import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./groupTicket.css";

function GroupTicket() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const priceChild = parseFloat(params.get("priceChild")) || 0;
  const priceAdult = parseFloat(params.get("priceAdult")) || 0;
  const priceSenior = parseFloat(params.get("priceSenior")) || 0;

  const [buyerName, setBuyerName] = useState("");
  const [childrenCount, setChildrenCount] = useState(0);
  const [adultCount, setAdultCount] = useState(0);
  const [seniorCount, setSeniorCount] = useState(0);
  const [ticket, setTicket] = useState(null);

  const totalPrice =
    childrenCount * priceChild + adultCount * priceAdult + seniorCount * priceSenior;

  const handleBuy = async () => {
    const payload = {
      id: "",
      buyerName,
      price: totalPrice,
      numChildren: childrenCount,
      numAdults: adultCount,
      numSeniors: seniorCount,
    };

    try {
      const response = await fetch("http://localhost:8080/ticket/create-group", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      setTicket(data);
    } catch (err) {
      console.error("Failed to create ticket", err);
    }
  };

  if (ticket === null) {
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
          min="0"
          value={childrenCount}
          onChange={(e) => setChildrenCount(Number(e.target.value) || 0)}
        />

        <label>Anzahl Erwachsene:</label>
        <input
          className="input"
          placeholder="0"
          type="number"
          min="0"
          value={adultCount}
          onChange={(e) => setAdultCount(Number(e.target.value) || 0)}
        />

        <label>Anzahl Senioren:</label>
        <input
          className="input"
          placeholder="0"
          type="number"
          min="0"
          value={seniorCount}
          onChange={(e) => setSeniorCount(Number(e.target.value) || 0)}
        />

        <div style={{ marginTop: 12 }}>
          <strong>Gesamtpreis: {totalPrice}.-</strong>
        </div>

        <button onClick={handleBuy}>Buy</button>
      </div>
    );
  }

  return (
    <div className="payment-form">
      <h2>Ticket</h2>
      <p>Ticket Id: {ticket.id}</p>
      <p>Name: {ticket.buyerName}</p>
      <p>Price: {ticket.price}</p>
      <p>Number children: {ticket.numChildren}</p>
      <p>Number adults: {ticket.numAdults}</p>
      <p>Number seniors: {ticket.numSeniors}</p>
      <Link to="/">
        <button>Zurück</button>
      </Link>
    </div>
  );
}

export default GroupTicket;