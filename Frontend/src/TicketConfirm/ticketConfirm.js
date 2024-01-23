/* TicketConfirm.js */

import React from 'react';
import './ticketConfirm.css';
import PayLogos from '../01images/PayLogos.png'; 


const TicketConfirm = () => {
  return (
    <div>
      <h1>hallo ticketconfirm</h1>

      <div className="image-container">
        <img src={PayLogos} alt="Bild 1" />
      </div>
    </div>
  );
};

export default TicketConfirm;
