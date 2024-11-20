import React, { useState } from "react";
import "./static/flightmanagement.scss";

const AdminAllFlights = () => {
  const [flights, setFlights] = useState([
    {
      id: 1,
      airline: "Airline A",
      flightNumber: "AA123",
      origin: "New York",
      destination: "Los Angeles",
      date: "2024-11-25",
      time: "10:00 AM",
      price: 250,
      availableSeats: 20,
    },
    {
      id: 2,
      airline: "Airline B",
      flightNumber: "BB456",
      origin: "Chicago",
      destination: "Miami",
      date: "2024-12-10",
      time: "2:00 PM",
      price: 180,
      availableSeats: 15,
    },
    // Add more mock flights here
  ]);

  const [editingFlight, setEditingFlight] = useState(null);
  const [updatedFlight, setUpdatedFlight] = useState({});

  const handleEdit = (flight) => {
    setEditingFlight(flight.id);
    setUpdatedFlight(flight);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedFlight({ ...updatedFlight, [name]: value });
  };

  const handleSave = () => {
    setFlights(
      flights.map((flight) =>
        flight.id === updatedFlight.id ? updatedFlight : flight
      )
    );
    setEditingFlight(null);
  };

  return (
    <section className="admin-flights">
      <h2>All Flights</h2>
      <table className="admin-flights__table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Airline</th>
            <th>Flight Number</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Date</th>
            <th>Time</th>
            <th>Price</th>
            <th>Seats</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) =>
            editingFlight === flight.id ? (
              <tr key={flight.id}>
                <td>{flight.id}</td>
                <td>
                  <input
                    type="text"
                    name="airline"
                    value={updatedFlight.airline}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="flightNumber"
                    value={updatedFlight.flightNumber}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="origin"
                    value={updatedFlight.origin}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="destination"
                    value={updatedFlight.destination}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="date"
                    name="date"
                    value={updatedFlight.date}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="time"
                    name="time"
                    value={updatedFlight.time}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="price"
                    value={updatedFlight.price}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="availableSeats"
                    value={updatedFlight.availableSeats}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <button onClick={handleSave}>Save</button>
                </td>
              </tr>
            ) : (
              <tr key={flight.id}>
                <td>{flight.id}</td>
                <td>{flight.airline}</td>
                <td>{flight.flightNumber}</td>
                <td>{flight.origin}</td>
                <td>{flight.destination}</td>
                <td>{flight.date}</td>
                <td>{flight.time}</td>
                <td>${flight.price}</td>
                <td>{flight.availableSeats}</td>
                <td>
                  <button onClick={() => handleEdit(flight)}>Edit</button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </section>
  );
};

export default AdminAllFlights;
