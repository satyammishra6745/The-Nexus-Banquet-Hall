import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // ✅ CSS import

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">

<Link className="navbar-brand logo-text" to="/">
  <div className="logo-container">
    <span>
      Banquet <span className="gold-text">Hall</span>
    </span>
    <small className="tagline">Turning Moments into Grand Celebrations</small>
  </div>
</Link>

        {/* Toggle */}
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          ☰
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">

            <li className="nav-item">
              <Link className="nav-link custom-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link custom-link" to="/about">About Us</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link custom-link" to="/services">Services</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link custom-link" to="/gallery">Gallery</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link custom-link" to="/contact">Contact</Link>
            </li>

            {/* Button */}
            <li className="nav-item ms-3">
              <Link className="btn-book" to="/contact">
                Contact Now
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;