import React, { useState } from "react";
import "./payFormular.css";
import Header from "../header/header";
import Footer from "../footer/footer";

function PayFormular() {
    
  const [paymentType, setPaymentType] = useState("lastschrift");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [bank, setBank] = useState("");
  const [bankSince, setBankSince] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [address, setAddress] = useState("");

  const handlePaymentTypeChange = (event) => {
    setPaymentType(event.target.value);
  };

  return (
    <body>
      <Header/>
        <main>
    <div className="payment-form">
      <h2>Zahlungsinformationen</h2>
      <div>
        <label>
          <input
            type="radio"
            value="lastschrift"
            checked={paymentType === "lastschrift"}
            onChange={handlePaymentTypeChange}
          />
          Per Lastschrift zahlen
        </label>
      </div>
      {paymentType === "lastschrift" && (
        <div>
          <label>
            Kartennummer:
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </label>
          <label>
            Ablaufdatum:
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
          </label>
          <label>
            CVV:
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </label>
        </div>
      )}
      {/* Weitere Zahlungsmethoden können hier hinzugefügt werden */}

      <h2>Bankverbindung</h2>
      <label>
        Bank:
        <input
          type="text"
          value={bank}
          onChange={(e) => setBank(e.target.value)}
        />
      </label>
      <label>
        Seit wann bei der Bank:
        <input
          type="text"
          value={bankSince}
          onChange={(e) => setBankSince(e.target.value)}
        />
      </label>

      <h2>Geburtsdatum</h2>
      <label>
        Geburtsdatum:
        <input
          type="text"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
      </label>

      <h2>Rechnungsadresse</h2>
      <label>
        Adresse:
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
    </div>
    </main>
    <Footer />
    </body>
  );
}

export default PayFormular;
