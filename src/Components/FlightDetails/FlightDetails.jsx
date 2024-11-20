import React from "react";
import "./static/FlightDetails.scss";

const FlightDetails = ({ flight }) => {
  return (
    <section className="flight-details">
      <h2>Flight Details</h2>
      <div className="flight-details__card">
        <div className="flight-details__info">
          <h3>{flight.airline}</h3>
          <p><strong>Flight Number:</strong> {flight.flightNumber}</p>
          <p><strong>Departure:</strong> {flight.origin}</p>
          <p><strong>Destination:</strong> {flight.destination}</p>
          <p><strong>Date:</strong> {flight.date}</p>
          <p><strong>Departure Time:</strong> {flight.departureTime}</p>
          <p><strong>Arrival Time:</strong> {flight.arrivalTime}</p>
        </div>
        <div className="flight-details__pricing">
          <h4>Pricing</h4>
          <p><strong>Price per seat:</strong> ${flight.price}</p>
          <p><strong>Available Seats:</strong> {flight.availableSeats}</p>
          <button className="flight-details__button">Book Now</button>
        </div>
      </div>
    </section>
  );
};

export default FlightDetails;
