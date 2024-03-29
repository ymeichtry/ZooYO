// Event02.js
import React from "react";
import "./Event02.css"; // Stellen Sie sicher, dass Sie die richtige CSS-Datei importieren
import { Link, useNavigate, BrowserRouter, Routes, Route, Switch, Router } from "react-router-dom";

const BookingTimeBox = ({ time }) => {
  return (
    <div className="booking-time-box">
      <p>{time}</p>
      <Link to="/PayFormular">Buchen</Link>
    </div>
  );
};

const Event02 = () => {
  return (
    <div class="Event02">
      <h1>Bastel-Workshop</h1>
      
      <div className="booking-day">
        <h2>Montag, Dienstag:</h2>
        <BookingTimeBox time="10:00-12:00" />
        <BookingTimeBox time="14:00-16:00" />
        <BookingTimeBox time="17:00-19:00" />
      </div>

      <div className="booking-day">
        <h2>Donnerstag, Freitag:</h2>
        <BookingTimeBox time="09:00-11:00" />
        <BookingTimeBox time="13:00-15:00" />
        <BookingTimeBox time="17:00-19:00" />
      </div>

      <div className="booking-day">
        <h2>Samstag, Sonntag:</h2>
        <BookingTimeBox time="11:00-13:00" />
        <BookingTimeBox time="14:00-16:00" />
        <BookingTimeBox time="18:00-20:00" />
      </div>
    </div>
  );
};

export default Event02;
