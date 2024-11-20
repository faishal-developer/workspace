import React from "react";
import FlightDetails from "../../Components/FlightDetails/FlightDetails";

const FlightDetailsPage = () => {
  const flight = {
    airline: "Airline A",
    flightNumber: "AA123",
    origin: "New York",
    destination: "Los Angeles",
    date: "2024-11-25",
    departureTime: "10:00 AM",
    arrivalTime: "1:00 PM",
    price: 250,
    availableSeats: 20,
  };

  return (
    <div>
      <FlightDetails flight={flight} />
    </div>
  );
};

export default FlightDetailsPage;
