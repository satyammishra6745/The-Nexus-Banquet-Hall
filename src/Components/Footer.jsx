import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      {/* 🔴 TOP CTA BAR */}
      <div className="footer-cta">
        <div className="cta-left">
          <FaPhoneAlt className="cta-icon" />
          <div>
            <h3>Ready to Make Your Event Special?</h3>
            <p>Let’s create unforgettable memories with amazing food.</p>
          </div>
        </div>

        <div className="cta-buttons">
          <a href="tel:+917397971771" className="cta-call">Call Now</a>
          <a href="https://wa.me/917397971771" className="cta-whatsapp">WhatsApp Us</a>
        </div>
      </div>

      {/* 🔥 MAIN FOOTER */}
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-col">
          <h2 className="logo"> <b>Nexus</b> Banquet Hall</h2>
          <p>
            We provide exceptional catering services for all types of events.
            Your satisfaction is our priority.  <p style={{ color: "red", fontWeight: "500" }}>
  Follow us on Instagram and Facebook
</p>
          </p>

          <div className="social-icons">
            <a  href="https://www.facebook.com/your_page_name"><FaFacebookF /></a>
            <a href="https://www.instagram.com/nexus_banquets/" ><FaInstagram /></a>
            <a  href="https://wa.me/917397971771"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Links */}
<div className="footer-col">
  <h3>Quick Links</h3>
  <ul style={{ listStyle: "none", padding: 0 }}>
    <li>
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        Home
      </Link>
    </li>

    <li>
      <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
        About Us
      </Link>
    </li>

    <li>
      <Link to="/services" style={{ color: "white", textDecoration: "none" }}>
        Services
      </Link>
    </li>

    <li>
      <Link to="/gallery" style={{ color: "white", textDecoration: "none" }}>
        Gallery
      </Link>
    </li>

    <li>
      <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>
        Contact
      </Link>
    </li>
  </ul>
</div>

        {/* Services */}
        <div className="footer-col">
          <h3>Our Services</h3>
          <ul>
            <li>Weddings</li>
            <li>Birthday</li>
            <li>Corporate Events</li>
            <li>Anniversary</li>
            <li>Haldi</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h3>Contact Info</h3>
          <p><FaPhoneAlt /> +91 73979 71771</p>
          <p><FaWhatsapp /> +91 86693 39721</p>
          <p><FaEnvelope /> thenexusbanquethall@gmail.com</p>
          <p><FaMapMarkerAlt /> Jadhav compound, Building no.3, near SBI Bank Evershine Ext Rd, Evershine City, Vasai East, Maharashtra palghar pin:401208</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 Banquet Hall. All Rights Reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;

