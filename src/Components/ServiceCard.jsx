    import React from "react";
    import "./ServiceCard.css";
    import { FaArrowRight } from "react-icons/fa";
    import { Link } from "react-router-dom";

    const ServiceCard = ({ image, icon, title, desc }) => {
    return (
        <div className="service-card">

        {/* Image */}
        <div className="card-image">
            <img src={image} alt={title} />
        </div>

        {/* Floating Icon */}
        <div className="card-icon">
            {icon}
        </div>

        {/* Content */}
        <div className="card-content">
            <h3>{title}</h3>
            <p>{desc}</p>

<Link to="/gallery" className="explore-btn">
  Explore Now <FaArrowRight />
</Link>
        </div>

        </div>
    );
    };

    export default ServiceCard;