import React, { useState } from "react";
import "./static/MyProfile.scss";

const MyProfile = () => {
  // Mock user data
  const [user, setUser] = useState({
    fullName: "John Doe",
    email: "john.doe@example.com",
  });

  const [bookings] = useState([
    {
      id: 1,
      flightNumber: "AA123",
      origin: "New York",
      destination: "Los Angeles",
      date: "2024-11-25",
      price: 250,
    },
    {
      id: 2,
      flightNumber: "BB456",
      origin: "Chicago",
      destination: "Miami",
      date: "2024-12-10",
      price: 180,
    },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(user.fullName);

  const handleEditName = () => {
    setUser({ ...user, fullName: newName });
    setIsEditing(false);
  };

  return (
    <section className="my-profile">
      <h2>My Profile</h2>
      <div className="my-profile__info">
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Full Name:</strong>{" "}
          {isEditing ? (
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          ) : (
            user.fullName
          )}
        </p>
        {isEditing ? (
          <button className="my-profile__button" onClick={handleEditName}>
            Save
          </button>
        ) : (
          <button
            className="my-profile__button"
            onClick={() => setIsEditing(true)}
          >
            Edit Name
          </button>
        )}
      </div>

      <h3>Previous Bookings</h3>
      <div className="my-profile__bookings">
        {bookings.length > 0 ? (
          bookings.map((booking) => (
            <div key={booking.id} className="my-profile__booking">
              <p><strong>Flight:</strong> {booking.flightNumber}</p>
              <p><strong>Origin:</strong> {booking.origin}</p>
              <p><strong>Destination:</strong> {booking.destination}</p>
              <p><strong>Date:</strong> {booking.date}</p>
              <p><strong>Price:</strong> ${booking.price}</p>
            </div>
          ))
        ) : (
          <p>No bookings found.</p>
        )}
      </div>
    </section>
  );
};

export default MyProfile;
