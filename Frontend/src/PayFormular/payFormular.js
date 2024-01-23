import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./payFormular.css";
import "./PayInformations/payInformations"

function PayFormular() {
  const navigate = useNavigate();
  const [collectedInformation, setCollectedInformation] = useState([]);
  const [paymentType] = useState("lastschrift");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("01");
  const [expiryYear, setExpiryYear] = useState("23");
  const [cvv, setCvv] = useState("");
  const [bank, setBank] = useState("UBS");
  const [bankSince, setBankSince] = useState(new Date().toISOString().slice(0, 10));

  const [street, setStreet] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");

  const handleBuy = () => {
    // Collect the information and call the onBuy prop
    const collectedInformation = {
      paymentType,
      cardNumber,
      expiryMonth,
      expiryYear,
      cvv,
      bank,
      bankSince,
      street,
      zipCode,
      city,
    };
    onBuy(collectedInformation);

    // Navigate to the "/payInformations" page
    navigate("/payInformations");
  };

  const onBuy = (collectedInformation) => {
    // Your logic for handling the purchase
    console.log("Buy clicked. Collected Information:", collectedInformation);
  };

  const handleCancel = () => {
    console.log("Cancel clicked");
    // Hier kannst du die Aktion nach dem Stornieren durchführen

    // Alle Zustände zurücksetzen
    setCardNumber("");
    setExpiryMonth("01");
    setExpiryYear("23");
    setCvv("");
    setBank("UBS");
    setBankSince(new Date().toISOString().slice(0, 10));
    setStreet("");
    setZipCode("");
    setCity("");
  };

  const validateCardNumber = (value) => {
    const regex = /^[0-9]{4}([ -]?[0-9]{4}){3}$/;
    return regex.test(value);
  };
  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/[^\d]/g, ""); // Remove non-numeric characters
    if (value.length <= 16) {
      // Allow only up to 16 digits
      setCardNumber(value.replace(/(.{4})/g, "$1 ").trim()); // Add spaces after every 4 digits
    }
  };

  const validateCVV = (value) => {
    const regex = /^[0-9]{3}$/;
    return regex.test(value);
  };
  const handleCVVChange = (e) => {
    const value = e.target.value.replace(/[^\d]/g, ""); // Remove non-numeric characters
    if (value.length <= 3) {
      // Allow only up to 3 digits
      setCvv(value);
    }
  };

  const validateStreet = (value) => {
    // Hier könnte eine individuelle Validierung für die Strasse/Postfach erfolgen, falls benötigt
    return value.trim() !== "";
  };
  const validateZipCode = (value) => {
    // Hier könnte eine individuelle Validierung für die Postleitzahl erfolgen, falls benötigt
    const numericValue = value.trim().replace(/[^\d]/g, ''); // Entfernt alle nicht-numerischen Zeichen
    return /^\d+$/.test(numericValue) ? numericValue : '';
  };
  const validateCity = (value) => {
    // Hier könnte eine individuelle Validierung für den Ort erfolgen, falls benötigt
    return value.trim() !== "";
  };

  const validateInformations = () => {
    return (
      validateCardNumber(cardNumber) &&
      validateCVV(cvv) &&
      validateStreet(street) &&
      validateZipCode(zipCode) &&
      validateCity(city)
    );
  };

  return (
    <div className="payment-form">
      <h2>Zahlungsinformationen</h2>

      {paymentType === "lastschrift" && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>
            Kartennummer:
            <input
              className="input"
              type="text"
              placeholder="XXXX-XXXX-XXXX-XXXX"
              value={cardNumber}
              onChange={handleCardNumberChange}
            />
            {!validateCardNumber(cardNumber) && <p>Ungültige Kartennummer</p>}
          </label>
          <div className="ablaufdatum-cvv">
            <label className="ablaufdatum" style={{ display: "flex" }}>
              Ablaufdatum:
              <div style={{ display: "flex" }}>
                <select
                  className="input"
                  value={expiryMonth}
                  onChange={(e) => setExpiryMonth(e.target.value)}
                >
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                    <option key={month} value={month.toString().padStart(2, "0")}>
                      {month.toString().padStart(2, "0")}
                    </option>
                  ))}
                </select>

                <select
                  className="input"
                  value={expiryYear}
                  onChange={(e) => setExpiryYear(e.target.value)}
                >
                  {Array.from({ length: 11 }, (_, i) => i + 23).map((year) => (
                    <option key={year} value={year.toString().padStart(2, "0")}>
                      {year.toString().padStart(2, "0")}
                    </option>
                  ))}
                </select>
              </div>
            </label>

            <label className="cvv">
              CVV:
              <input
                className="input"
                type="text"
                placeholder="XXX"
                maxLength="3"
                value={cvv}
                onChange={handleCVVChange}
              />
              {!validateCVV(cvv) && <p>Ungültige CVV</p>}
            </label>
          </div>
        </div>
      )}

      <h2>Bankverbindung</h2>
      <div className="bank-sincewhenbank">
        <label className="bank">
          Bank:
          <select className="bank-input" value={bank} onChange={(e) => setBank(e.target.value)}>
            <option value="UBS">UBS</option>
            <option value="Kantonalbank">Kantonalbank</option>
            <option value="JuliusBär">Julius Bär</option>
            <option value="Andere">Andere</option>
          </select>
        </label>
        <label className="sincewhenbank">
          Seit wann bei der Bank:
          <input
            className="input"
            type="date"
            value={bankSince}
            onChange={(e) => setBankSince(e.target.value)}
          />
        </label>
      </div>

      <h2>Rechnungsadresse</h2>
      <label>
        Strasse / Postfach:
        <input
          className="input"
          placeholder="Mustermannstrasse 01"
          type="text"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        {!validateStreet(street) && <p>Ungültige Strasse / Postfach</p>}
      </label>
      <div className="zip-city">
        <label>
          Postleitzahl:
          <input
            className="input"
            placeholder="XXXX"
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
          {!validateZipCode(zipCode) && <p>Ungültige Postleitzahl</p>}
        </label>
        <label>
          Ort:
          <input
            className="city-input"
            placeholder="Musterstadt"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          {!validateCity(city) && <p>Ungültiger Ort</p>}
        </label>
      </div>

      <div className="buttons">
      <button onClick={handleCancel}>Stornieren</button>
      <button onClick={handleBuy} disabled={!validateInformations()}>
        Buy
      </button>
    </div>
    </div>
  );
}

export default PayFormular;
