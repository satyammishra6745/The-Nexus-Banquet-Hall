import React, { useEffect } from "react";
import Hero from "../Components/Hero";
import AOS from "aos";
import "aos/dist/aos.css";

import banquet from "../assets/images/banqueet.jpeg";
import changingroom from "../assets/images/changingroom.jpeg";
import cctv from "../assets/images/cctv.png";

import no1 from "../assets/images/no1.jpeg";
import no2 from "../assets/images/no2.jpeg";
import no3 from "../assets/images/no3.jpeg";
import no4 from "../assets/images/no4.jpeg";
import no5 from "../assets/images/no5.jpeg";
import no6 from "../assets/images/no6.jpeg";

import img1 from "../assets/images/img1.jpeg";
import img2 from "../assets/images/img2.jpeg";
import img3 from "../assets/images/img3.jpeg";

const Services = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    { title: "AC Banquet Hall", desc: "Spacious fully AC hall for all events.", img: banquet },
    { title: "Changing Rooms", desc: "Clean AC rooms for bride & groom.", img: changingroom },
    { title: "Parking Area", desc: "Large secure parking space.", img: "/images/parking.jpg" },
    { title: "CCTV Security", desc: "24/7 safety surveillance.", img: cctv }
  ];

  const hallImages = [no1, no2, no3, no4, no5, no6];
  const foodImages = [img1, img2, img3];

  const events = ["Wedding", "Birthday", "Anniversary", "Corporate"];

  const why = [
    "Affordable Pricing",
    "Luxury Decoration",
    "Clean & Hygienic",
    "Experienced Staff",
    "Prime Location",
    "24/7 Support"
  ];

  return (
    <div style={{ fontFamily: "sans-serif", background: "#fff", color: "#000" }}>

      <Hero 
        topText="What We Offer"
        title="Our"
        highlight="Services"
        desc="Premium banquet facilities designed for comfort and luxury."
        showButtons={false}
      />

      {/* SERVICES */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: "20px", padding: "40px" }}>
        {services.map((s, i) => (
          <div key={i} data-aos="fade-up" style={{ borderRadius: "15px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
            <img src={s.img} alt="" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <div style={{ padding: "15px" }}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* GALLERY */}
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2 data-aos="fade-down">Our Banquet Hall</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "15px", marginTop: "20px" }}>
          {hallImages.map((img, i) => (
            <img key={i} src={img} alt="" data-aos="zoom-in" style={{ width: "100%", borderRadius: "10px" }} />
          ))}
        </div>
      </div>

      {/* WHY */}
      <div style={{ padding: "50px", background: "#f8f8f8", textAlign: "center" }}>
        <h2 data-aos="fade-up">Why Choose Us</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "20px", marginTop: "20px" }}>
          {why.map((w, i) => (
            <div key={i} data-aos="flip-left" style={{
              padding: "20px",
              borderRadius: "15px",
              background: "#fff",
              boxShadow: "0 5px 20px rgba(0,0,0,0.1)"
            }}>
              <h3>{w}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* EVENTS */}
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h2 data-aos="fade-right">Events We Host</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap", marginTop: "20px" }}>
          {events.map((e, i) => (
            <div key={i} data-aos="zoom-in" style={{
              padding: "15px 25px",
              borderRadius: "30px",
              background: "#000",
              color: "#fff"
            }}>
              {e}
            </div>
          ))}
        </div>
      </div>

      {/* FOOD */}
      <div style={{ padding: "50px", background: "#f8f8f8", textAlign: "center" }}>
        <h2 data-aos="fade-up">Catering & Desserts</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: "20px", marginTop: "20px" }}>
          {foodImages.map((img, i) => (
            <img key={i} src={img} alt="" data-aos="zoom-in-up" style={{ width: "100%", borderRadius: "15px" }} />
          ))}
        </div>
      </div>



    </div>
  );
};

export default Services;