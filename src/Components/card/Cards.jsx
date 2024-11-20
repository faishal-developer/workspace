import React from "react";
import FlightCard from "./card";
import "./Card.scss";

const FlightSection = () => {
  const flights = [
    {
      airline: "Airline A",
      flightNumber: "AA123",
      origin: "New York",
      destination: "Los Angeles",
      date: "2024-11-25",
      price: 250,
    },
    {
      airline: "Airline B",
      flightNumber: "BB456",
      origin: "Chicago",
      destination: "Miami",
      date: "2024-11-26",
      price: 200,
    },
    {
      airline: "Airline C",
      flightNumber: "CC789",
      origin: "San Francisco",
      destination: "Seattle",
      date: "2024-11-27",
      price: 180,
    },
  ];

  return (
    <section className="flight-section">
      <div className="flight-section__grid">
        {flights.map((flight, index) => (
          <FlightCard key={index} flight={flight} />
        ))}
      </div>
    </section>
  );
};

export default FlightSection;
