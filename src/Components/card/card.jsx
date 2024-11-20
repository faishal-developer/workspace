import React from "react";
import "./Card.scss";

const FlightCard = ({ flight }) => {
  return (
    <div className="flight-card">
      <div className="flight-card__header">
        <h3>{flight.airline}</h3>
        <p>{flight.flightNumber}</p>
      </div>
      <div className="flight-card__details">
        <p><strong>Origin:</strong> {flight.origin}</p>
        <p><strong>Destination:</strong> {flight.destination}</p>
        <p><strong>Date:</strong> {flight.date}</p>
        <p><strong>Price:</strong> ${flight.price}</p>
      </div>
      <button className="flight-card__button">Book Now</button>
    </div>
  );
};

export default FlightCard;
