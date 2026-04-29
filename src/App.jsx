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
import Contact from "./pages/Contact"
// const Contact = () => <h1 className="text-center mt-5">Contact Page</h1>;

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
        <Route path="/Contact" element={<Contact />} />
      </Routes>
 <Footer />
    </Router>
  );
}
export default App;