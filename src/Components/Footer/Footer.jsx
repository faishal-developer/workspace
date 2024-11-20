import React from "react";
import "./static/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h3>Flight Booker</h3>
          <p>Your trusted partner for hassle-free travel bookings.</p>
        </div>
        <div className="footer__section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/search">Search Flights</a></li>
            <li><a href="/bookings">My Bookings</a></li>
            <li><a href="/profile">Profile</a></li>
          </ul>
        </div>
        <div className="footer__section">
          <h4>Contact Us</h4>
          <p>Email: support@flightbooker.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Travel Lane, Wanderlust City</p>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© 2024 Flight Booker. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
