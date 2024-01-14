import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./singleTicket.css";

function SingleTicket() {
  const navigate = useNavigate();
  const [buyerName, setBuyerName] = useState("");

  const handleBuy = async () => {
    console.log("Buy clicked: " + buyerName);
    const response = await fetch("http://localhost:8080/ticket/create-single", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: '',
        buyerName: buyerName,
        price: 10.45,
        ageGroup: "Adult"
      })
    });
  };

  return (
    <div className="payment-form">

      <h2>Informationen</h2>
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
}

export default SingleTicket;