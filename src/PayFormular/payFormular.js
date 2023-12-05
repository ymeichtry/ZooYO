import React, { useState } from "react";
import "./payFormular.css";

function PayFormular() {
  const [paymentType, setPaymentType] = useState("lastschrift");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("01");
  const [expiryYear, setExpiryYear] = useState("23");
  const [cvv, setCvv] = useState("");
  const [bank, setBank] = useState("UBS");
  const [bankSince, setBankSince] = useState(new Date().toISOString().slice(0, 10));

  const [isCardNumberValid, setCardNumberValid] = useState(true);
  const [isExpiryMonthValid, setExpiryMonthValid] = useState(true);
  const [isExpiryYearValid, setExpiryYearValid] = useState(true);
  const [isCVVValid, setCVVValid] = useState(true);
  const [isValid, setValid] = useState(true);

  const validateCardNumber = (value) => {
    const regex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    return regex.test(value);
  };

  const validateExpiryMonth = (value) => {
    const regex = /^(0[1-9]|1[0-2])$/;
    return regex.test(value);
  };

  const validateExpiryYear = (value) => {
    const regex = /^\d{2}$/;
    return regex.test(value);
  };

  const validateCVV = (value) => {
    const regex = /^\d{3}$/;
    return regex.test(value);
  };

  const validateExpiryDate = (month, year) => {
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;

    return year > currentYear || (year === currentYear && month >= currentMonth);
  };

  const handleBuy = () => {
    const cardNumberValid = validateCardNumber(cardNumber);
    const expiryMonthValid = validateExpiryMonth(expiryMonth);
    const expiryYearValid = validateExpiryYear(expiryYear);
    const cvvValid = validateCVV(cvv);

    setCardNumberValid(cardNumberValid);
    setExpiryMonthValid(expiryMonthValid);
    setExpiryYearValid(expiryYearValid);
    setCVVValid(cvvValid);

    const isExpiryDateValid = validateExpiryDate(Number(expiryMonth), Number(expiryYear));

    const isFormValid = cardNumberValid && expiryMonthValid && expiryYearValid && cvvValid && isExpiryDateValid;
    setValid(isFormValid);

    if (isFormValid) {
      console.log("Buy clicked");
      // Hier kannst du die Aktion nach einem erfolgreichen Kauf durchführen
    } else {
      console.log("Invalid data. Please correct the errors.");
    }
  };

  const handleCancel = () => {
    console.log("Cancel clicked");
    // Hier kannst du die Aktion nach dem Stornieren durchführen
  };

  return (
    <div className="payment-form">
      <h2>Zahlungsinformationen</h2>
      <div>
        <label>
          <input
            type="radio"
            value="lastschrift"
            checked={paymentType === "lastschrift"}
            onChange={(e) => setPaymentType(e.target.value)}
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
              placeholder="XXXX-XXXX-XXXX-XXXX"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            {!isCardNumberValid && <p>Ungültige Kartennummer</p>}
          </label>
          <label>
            Ablaufdatum:
            <select
              value={expiryMonth}
              onChange={(e) => setExpiryMonth(e.target.value)}
            >
              {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                <option key={month} value={month.toString().padStart(2, "0")}>
                  {month.toString().padStart(2, "0")}
                </option>
              ))}
            </select>
            -
            <select
              value={expiryYear}
              onChange={(e) => setExpiryYear(e.target.value)}
            >
              {Array.from({ length: 11 }, (_, i) => i + 23).map((year) => (
                <option key={year} value={year.toString().padStart(2, "0")}>
                  {year.toString().padStart(2, "0")}
                </option>
              ))}
            </select>
            {!isExpiryMonthValid && !isExpiryYearValid && <p>Ungültiges Ablaufdatum</p>}
            {isExpiryYearValid === false && <p>Karte ist bereits abgelaufen</p>}
          </label>
          <label>
            CVV:
            <input
              type="text"
              placeholder="XXX"
              maxLength="3"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
            {!isCVVValid && <p>Ungültige CVV</p>}
          </label>
        </div>
      )}

      <h2>Bankverbindung</h2>
      <label>
        Bank:
        <select value={bank} onChange={(e) => setBank(e.target.value)}>
          <option value="UBS">UBS</option>
          <option value="Kantonalbank">Kantonalbank</option>
          <option value="JuliusBär">Julius Bär</option>
          <option value="Andere">Andere</option>
        </select>
      </label>
      <label>
        Seit wann bei der Bank:
        <input
          type="date"
          value={bankSince}
          onChange={(e) => setBankSince(e.target.value)}
        />
      </label>

      <div className="buttons">
        <button onClick={handleCancel}>Stornieren</button>
        <button onClick={handleBuy} disabled={!isValid}>
          Buy
        </button>
      </div>
    </div>
  );
}

export default PayFormular;
