import React, { useEffect } from "react";
import Hero from "../Components/Hero";
import aboutImg from "../assets/images/banqueet.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* 🔥 HERO */}
      <Hero
        topText="Welcome To"
        title="About"
        highlight="Our Hall"
        desc="Creating unforgettable luxury experiences with premium catering and elegant ambiance."
        showButtons={false}
        bgImage={aboutImg}
      />

      {/* 🔥 WHO WE ARE */}
      <section style={{ background: "#0f0f0f", color: "#fff", padding: "80px 0" }}>
        <div className="container">
          <div className="row align-items-center">

            <div className="col-md-6" data-aos="fade-right">
              <img 
                src={aboutImg} 
                alt="" 
                style={{
                  width: "100%",
                  borderRadius: "20px",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.7)"
                }}
              />
            </div>

            <div className="col-md-6" data-aos="fade-left">
              <h2 style={{ fontSize: "42px", fontWeight: "700" }}>
                Who We Are
              </h2>

              <div style={{
                width: "80px",
                height: "3px",
                background: "#d4af37",
                margin: "15px 0"
              }}></div>

              <p style={{ color: "#ccc", lineHeight: "1.8" }}>
                We are a premium banquet hall dedicated to crafting unforgettable 
                celebrations. From elegant weddings to corporate gatherings, 
                we ensure every moment is filled with perfection and style.
              </p>

              <p style={{ color: "#aaa" }}>
                Our passion lies in delivering luxury experiences with attention to every detail.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 🔥 OUR STORY */}
      <section style={{ background: "#111", color: "#fff", padding: "80px 0", textAlign: "center" }}>
        <div className="container" data-aos="fade-up">

          <h2 style={{ fontSize: "40px" }}>Our Story</h2>

          <div style={{
            width: "80px",
            height: "3px",
            background: "#d4af37",
            margin: "20px auto"
          }}></div>

          <p style={{ maxWidth: "700px", margin: "auto", color: "#ccc" }}>
            What started as a small dream has grown into a trusted destination 
            for premium events. With years of dedication and passion, 
            we have turned countless celebrations into cherished memories.
          </p>
        </div>
      </section>

      {/* 🔥 MISSION & VISION */}
      <section style={{ background: "#0f0f0f", padding: "80px 0", color: "#fff" }}>
        <div className="container">
          <div className="row text-center">

            <div className="col-md-6" data-aos="fade-right">
              <div style={{
                padding: "40px",
                borderRadius: "20px",
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.1)"
              }}>
                <h3 style={{ color: "#d4af37" }}>Our Mission</h3>
                <p style={{ color: "#aaa" }}>
                  To deliver unforgettable events with premium quality, 
                  exceptional service, and elegant presentation.
                </p>
              </div>
            </div>

            <div className="col-md-6" data-aos="fade-left">
              <div style={{
                padding: "40px",
                borderRadius: "20px",
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.1)"
              }}>
                <h3 style={{ color: "#d4af37" }}>Our Vision</h3>
                <p style={{ color: "#aaa" }}>
                  To become the most trusted name in luxury banquet 
                  and catering services, known for excellence and innovation.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🔥 OUR SPECIALITIES */}
      <section style={{ background: "#111", padding: "80px 0", color: "#fff" }}>
        <div className="container text-center">

          <h2 data-aos="fade-up" style={{ fontSize: "40px" }}>
            Our Specialities
          </h2>

          <div className="row mt-5">

            {["Luxury Decoration", "Delicious Catering", "Spacious Hall", "Perfect Management"].map((item, i) => (
              <div className="col-md-3" key={i} data-aos="zoom-in">
                <div style={{
                  padding: "30px",
                  borderRadius: "20px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)"
                }}>
                  <h5 style={{ color: "#d4af37" }}>{item}</h5>
                  <p style={{ color: "#aaa" }}>Premium experience guaranteed</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 🔥 EXPERIENCE SECTION */}
      <section style={{
        background: "linear-gradient(to right, #000, #1a1a1a)",
        color: "#fff",
        padding: "80px 0",
        textAlign: "center"
      }}>
        <div className="container" data-aos="fade-up">
          <h2 style={{ fontSize: "40px" }}>Experience the Luxury</h2>
          <p style={{ color: "#ccc", maxWidth: "700px", margin: "20px auto" }}>
            Step into a world of elegance where every detail is designed 
            to impress. From ambiance to food, we deliver nothing but excellence.
          </p>
        </div>
      </section>

      {/* 🔥 TESTIMONIALS */}
      <section style={{ background: "#0f0f0f", color: "#fff", padding: "80px 0" }}>
        <div className="container text-center">

          <h2 data-aos="fade-up" style={{ fontSize: "40px" }}>
            What Clients Say
          </h2>

          <div className="row mt-5">

            {[
              "Amazing food and decoration!",
              "Best experience ever!",
              "Highly professional service!"
            ].map((text, i) => (
              <div className="col-md-4" key={i} data-aos="fade-up">
                <div style={{
                  padding: "25px",
                  borderRadius: "20px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)"
                }}>
                  <p>"{text}"</p>
                  <h6 style={{ color: "#d4af37" }}>Client</h6>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

    </>
  );
};

export default About;