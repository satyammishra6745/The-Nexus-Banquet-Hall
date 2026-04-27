import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Gallery from "./Pages/Gallery";
import Services from "./Pages/Services";
import About from "./Pages/About"
// const About = () => <h1 className="text-center mt-5">About Page</h1>;
// const Services = () => <h1 className="text-center mt-5">Services Page</h1>;
// const Gallery = () => <h1 className="text-center mt-5">Gallery Page</h1>;
const Contact = () => <h1 className="text-center mt-5">Contact Page</h1>;

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  return (
    <Router>

      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
 <Footer />
    </Router>
  );
}
export default App;