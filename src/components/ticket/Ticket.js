import React from 'react';
import './Ticket.css';

const padStartWithZero = (num = 0) => {
  return num.toString().padStart(7, "0");
};

const Ticket = () => {
  const primaryColor = '#3498db';
  const secondaryColor = '#2ecc71';
  const favicon = 'https://via.placeholder.com/50';
  const companyName = 'Event';
  const ticketNo = padStartWithZero("12345");

  return (
    <div className="ticket">
      <div className="ticket-left" style={{ backgroundColor: primaryColor }}>
        <div className="ticket-header">
          <div className="ticket-logo">L</div>
          <div className="ticket-info">
            <span>An AI launch event <strong>{companyName}</strong></span>
          </div>
        </div>
        <div className="ticket-title">Accelerate &gt;&gt;&gt;</div>
        <div className="ticket-details">
          <span>March 13, 2024</span>
          <span className="divider" style={{ color: secondaryColor }}>/</span>
          <span>10 AM PST</span>
        </div>
        <div className="ticket-admit" style={{ backgroundColor: secondaryColor }}>
          <img src={favicon} alt={companyName} className="ticket-favicon" />
          <div>ADMIT ONE</div>
        </div>
      </div>
      <div className="ticket-right">
        <div className="ticket-number">
          <div>Ticket No.</div>
          <div className="ticket-number-value" style={{ borderColor: secondaryColor }}>
            #{ticketNo}
          </div>
        </div>
      </div>
      <div className="ticket-cutout-left"></div>
      <div className="ticket-cutout-right"></div>
    </div>
  );
};

export default Ticket;
