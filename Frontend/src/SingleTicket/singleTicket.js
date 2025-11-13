import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./singleTicket.css";

function SingleTicket() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const ageGroup = params.get("ageGroup") || "unbekannt";
  const price = parseFloat(params.get("price")) || 0;

  const [buyerName, setBuyerName] = useState("");
  const [ticket, setTicket] = useState(null);

  const handleBuy = async () => {
    const payload = {
      id: "",
      buyerName,
      price,
      ageGroup,
    };

    try {
      const response = await fetch("http://localhost:8080/ticket/create-single", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      setTicket(data);
    } catch (err) {
      console.error("Failed to create single ticket", err);
    }
  };

  if (ticket === null) {
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
        </label>
        <div style={{ marginTop: 12 }}>
          <button onClick={handleBuy}>Buy</button>
        </div>
      </div>
    );
  }

  return (
    <div className="payment-form">
      <h2>Ticket</h2>
      <p>Ticket Id: {ticket.id}</p>
      <p>Name: {ticket.buyerName}</p>
      <p>Price: {ticket.price}</p>
      <p>Age group: {ticket.ageGroup}</p>
      <Link to="/">
        <button>Zurück</button>
      </Link>
    </div>
  );
}

export default SingleTicket;