import React from "react";
import "./static/AdminBookings.scss";

const AdminBookings = () => {
  // Mock data for bookings
  const bookings = [
    {
      id: 1,
      userName: "John Doe",
      email: "john.doe@example.com",
      flightNumber: "AA123",
      origin: "New York",
      destination: "Los Angeles",
      date: "2024-11-25",
      seats: 2,
      price: 500,
    },
    {
      id: 2,
      userName: "Jane Smith",
      email: "jane.smith@example.com",
      flightNumber: "BB456",
      origin: "Chicago",
      destination: "Miami",
      date: "2024-12-10",
      seats: 1,
      price: 180,
    },
    // Add more mock data as needed
  ];

  return (
    <section className="admin-bookings">
      <h2>All Bookings</h2>
      <table className="admin-bookings__table">
        <thead>
          <tr>
            <th>ID</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Flight Number</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Date</th>
            <th>Seats</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {bookings.length > 0 ? (
            bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td>{booking.userName}</td>
                <td>{booking.email}</td>
                <td>{booking.flightNumber}</td>
                <td>{booking.origin}</td>
                <td>{booking.destination}</td>
                <td>{booking.date}</td>
                <td>{booking.seats}</td>
                <td>${booking.price}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">No bookings found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};

export default AdminBookings;
