import React from "react";
import "./Hero.css";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { FaUtensils, FaLeaf, FaUserTie, FaClock } from "react-icons/fa";
import weddingImg from "../assets/images/weddings.png";
const Hero = ({
  topText = "Premium Banquet Hall for",
  title = "Weddings",
  highlight = "Celebration",
  desc = "From intimate gatherings to grand celebrations, we provide exceptional catering services that will make your event unforgettable.",
  showButtons = true ,
  bgImage = weddingImg 
}) => {
  return (
    <section
  className="hero"
  style={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}
>
      <div className="overlay"></div>
      <div className="container hero-content">

        {/* Top small text */}
        <p className="top-text">{topText}</p>

        {/* Main Heading */}
        <h1 className="hero-heading">
          {title}<br />
          <span>{highlight}</span>
        </h1>

        {/* Description */}
        <p className="hero-desc">{desc}</p>

        {/* ✅ Buttons (FIX HERE) */}
        {showButtons && (
          <div className="hero-buttons">
            <a href="tel:+919819042009" className="btn-call">
              <FaPhone size={18} />
              Call Now
            </a>

            <a href="https://wa.me/919819042009" target="_blank" className="btn-whatsapp">
              <FaWhatsapp size={20} />
              WhatsApp Us
            </a>
          </div>
        )}

        {/* Features */}
        <div className="hero-features">
          <span><FaUtensils /> <b>Hygienic Food</b></span>
          <span><FaLeaf /> <b>Fresh Ingredients</b></span>
          <span><FaUserTie /> <b>Experienced Chefs</b></span>
          <span><FaClock /> <b>On Time Service</b></span>
        </div>

      </div>
    </section>
  );
};

export default Hero;