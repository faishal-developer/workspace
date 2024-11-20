import React, { useState } from "react";
import "./static/CreateFlightForm.scss";

const CreateFlightForm = () => {
  const [formData, setFormData] = useState({
    airline: "",
    flightNumber: "",
    origin: "",
    destination: "",
    date: "",
    time: "",
    price: "",
    availableSeats: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Flight Created:", formData);
    // Add logic to send this data to the backend (API call)
  };

  return (
    <section className="create-flight">
      <h2>Create a New Flight</h2>
      <form className="create-flight__form" onSubmit={handleSubmit}>
        <div className="create-flight__field">
          <label htmlFor="airline">Airline</label>
          <input
            type="text"
            id="airline"
            name="airline"
            value={formData.airline}
            onChange={handleChange}
            required
          />
        </div>
        <div className="create-flight__field">
          <label htmlFor="flightNumber">Flight Number</label>
          <input
            type="text"
            id="flightNumber"
            name="flightNumber"
            value={formData.flightNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="create-flight__field">
          <label htmlFor="origin">Origin</label>
          <input
            type="text"
            id="origin"
            name="origin"
            value={formData.origin}
            onChange={handleChange}
            required
          />
        </div>
        <div className="create-flight__field">
          <label htmlFor="destination">Destination</label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            required
          />
        </div>
        <div className="create-flight__field">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="create-flight__field">
          <label htmlFor="time">Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="create-flight__field">
          <label htmlFor="price">Price (per seat)</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            min="0"
          />
        </div>
        <div className="create-flight__field">
          <label htmlFor="availableSeats">Available Seats</label>
          <input
            type="number"
            id="availableSeats"
            name="availableSeats"
            value={formData.availableSeats}
            onChange={handleChange}
            required
            min="1"
          />
        </div>
        <button type="submit" className="create-flight__button">
          Create Flight
        </button>
      </form>
    </section>
  );
};

export default CreateFlightForm;
