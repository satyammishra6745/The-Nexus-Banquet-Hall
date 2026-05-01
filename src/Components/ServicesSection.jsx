import React, { useEffect } from "react";
import "./ServicesSection.css";
import ServiceCard from "./ServiceCard";
import Counter from "./Counter";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaRing, FaBirthdayCake, FaBuilding, FaTree, FaUsers, FaUtensils, FaUserTie, FaThumbsUp, FaClock, FaRupeeSign
} from "react-icons/fa";
import weddingImg from "../assets/images/weddings.png";
import birthdayImg from "../assets/images/Birthday.png";
import corporateImg from "../assets/images/corporate.png";
import outdoorImg from "../assets/images/outdoor.png";
import starters from "../assets/images/starters.jpeg";
import sabzi from "../assets/images/Sabzi.jpeg";
import roti from "../assets/images/Roti.jpeg";
import sweets from "../assets/images/Sweets.jpeg";
import drinks from "../assets/images/Drink.jpeg";
import chicken from "../assets/images/chicken.jpeg";
import img1 from "../assets/images/DSC01394.JPG"
import img2 from "../assets/images/DSC01390.JPG"
import img3 from "../assets/images/DSC01392.JPG"
import img4 from "../assets/images/DSC01393.png"

const ServicesSection = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out-cubic",
      once: true,
      offset: 80
    });
  }, []);

  return (
    <section className="services-section">

      {/* Heading */}
      <div className="services-header" data-aos="fade-down">
        <b data-aos="fade-up" data-aos-delay="100">Our Services</b>
        <hr data-aos="zoom-in" data-aos-delay="200"/>
        <h2 data-aos="fade-up" data-aos-delay="300">Catering for Every Occasion</h2>
      </div>

      {/* Cards */}
      <div className="services-grid">
        <div data-aos="zoom-in-up" data-aos-delay="100">
          <ServiceCard image={weddingImg} icon={<FaRing />} title="Wedding" desc="Make your wedding unforgettable with premium Decoration food & service." />
        </div>

        <div data-aos="zoom-in-up" data-aos-delay="200">
          <ServiceCard image={birthdayImg} icon={<FaBirthdayCake />} title="Birthday" desc="Celebrate birthdays with joyful moments, fun, and unforgettable memories." />
        </div>

        <div data-aos="zoom-in-up" data-aos-delay="300">
          <ServiceCard image={corporateImg} icon={<FaBuilding />} title="Corporate Events" desc="Perfect for meetings and business events with seamless arrangements." />
        </div>

        <div data-aos="zoom-in-up" data-aos-delay="400">
          <ServiceCard image={outdoorImg} icon={<FaTree />} title="Anniversary" desc="Celebrate your anniversary with elegance and joy." />
        </div>
      </div>

      {/* Stats */}
      <div className="stats-section" data-aos="fade-up">

        <div className="stat-box" data-aos="flip-up" data-aos-delay="100">
          <FaUsers className="stat-icon" />
          <Counter target={500} />
          <p>Happy Clients</p>
        </div>

        <div className="stat-box" data-aos="flip-up" data-aos-delay="200">
          <FaUtensils className="stat-icon" />
          <Counter target={1000} />
          <p>Events Catered</p>
        </div>

        <div className="stat-box" data-aos="flip-up" data-aos-delay="300">
          <FaUserTie className="stat-icon" />
          <Counter target={10} />
          <p>Years Experience</p>
        </div>

        <div className="stat-box" data-aos="flip-up" data-aos-delay="400">
          <FaThumbsUp className="stat-icon" />
          <Counter target={100} />
          <p>Customer Satisfaction</p>
        </div>

      </div>

      {/* Special */}
      <section className="special-section">

        <div className="special-header" data-aos="fade-down">
          <p data-aos="fade-up" data-aos-delay="100">Our Specialization</p>
          <hr data-aos="zoom-in" data-aos-delay="200"/>
          <h2 data-aos="fade-up" data-aos-delay="300">A Feast for Your Eyes & Taste</h2>
        </div>

        <div className="special-grid">
          {[starters, sabzi, roti, sweets, drinks, chicken,img1,img2,img3,img4].map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            />
          ))}
        </div>

        <Link to="/gallery" className="menu-btn" data-aos="zoom-in-up">
          View Our Gallery
        </Link>

      </section>

      {/* WHY */}
      <section className="why-choose-section">

        <div className="why-header" data-aos="fade-down">
          <p>Why Choose Us</p>
          <hr />
          <h2 data-aos="fade-up" data-aos-delay="200">We Make Every Event Special</h2>
        </div>

        <div className="why-grid">

          {[ 
            {icon:<FaUtensils/>, title:"Premium Quality Food", desc:"In-house catering with fresh ingredients and quality service.."},
            {icon:<FaUsers/>, title:"Spacious Hall", desc:"A spacious and elegant hall perfect for all types of events."},
            {icon:<FaClock/>, title:"Decoration", desc:"Stylish decoration that delivers great value within your budget."},
            {icon:<FaRupeeSign/>, title:"Affordable Pricing", desc:"Premium service at best price."}
          ].map((item,i)=>(
            <div className="why-box" key={i} data-aos="fade-up" data-aos-delay={i*150}>
              <div className="why-icon-box">{item.icon}</div>
              <div className="why-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}

        </div>
      </section>
    </section>
  );
};

export default ServicesSection;
