import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
useEffect(() => {
AOS.init({ duration: 1200, once: true });
}, []);

// ✅ WhatsApp Function + Form Reset
const sendToWhatsApp = (e) => {
e.preventDefault();

const form = e.target;

const name = form.name.value;
const phone = form.phone.value;
const email = form.email.value;
const event = form.event.value;
const date = form.date.value;
const guests = form.guests.value;
const message = form.querySelector("textarea").value;

const whatsappMessage =
  `Name: ${name}%0a` +
  `Phone: ${phone}%0a` +
  `Email: ${email}%0a` +
  `Event: ${event}%0a` +
  `Date: ${date}%0a` +
  `Guests: ${guests}%0a` +
  `Message: ${message}`;

const url = `https://wa.me/919819042009?text=${whatsappMessage}`;

window.open(url, "_blank");

// ✅ Form reset (refresh jaisa)
form.reset();

};

return (
<div style={styles.wrapper}>
{/* BACKGROUND */}
<div style={styles.bgOverlay}></div>

  <div style={styles.container}>
    {/* LEFT PANEL */}
    <div style={styles.left} data-aos="fade-right">
      <h1 style={styles.heading}>Plan Your Perfect Event</h1>
      <p style={styles.subText}>
        Weddings • Birthday Parties • Corporate Events • Engagements
      </p>

      <div style={styles.infoBox}>
        <p> Premium Banquet Hall</p>
        <p> Response within 1 hour</p>
        <p> Customized event planning available</p>
      </div>

      <div style={styles.highlightBox}>
        “Your dream event starts here with us.”
      </div>
    </div>

    {/* RIGHT FORM */}
    <form
      style={styles.form}
      data-aos="fade-left"
      onSubmit={sendToWhatsApp}
    >
      <h2 style={styles.formTitle}>Book Your Event</h2>

      <input
        style={styles.input}
        name="name"
        placeholder="Full Name"
        required
      />

      <input
        style={styles.input}
        name="phone"
        placeholder="Mobile Number"
        required
      />

      <input
        style={styles.input}
        name="email"
        placeholder="Email (optional)"
      />

      <select style={styles.input} name="event">
        <option>Select Event Type</option>
        <option>Wedding</option>
        <option>Birthday</option>
        <option>Engagement</option>
        <option>Corporate</option>
        <option>Any Function</option>
      </select>

      <input style={styles.input} type="date" name="date" />

      <input
        style={styles.input}
        type="number"
        name="guests"
        placeholder="Number of Guests"
      />

      <textarea
        style={styles.textarea}
        placeholder="Tell us your requirements..."
      ></textarea>

      <button style={styles.button}>Send Enquiry</button>
    </form>
  </div>
</div>

);
};

export default Contact;

/* ================= STYLES ================= */

const styles = {
wrapper: {
minHeight: "100vh",
display: "flex",
alignItems: "center",
justifyContent: "center",
padding: "40px 15px",
background: "#0b0b0b",
position: "relative",
fontFamily: "sans-serif",
},

bgOverlay: {
position: "absolute",
inset: 0,
background:
"radial-gradient(circle at top, rgba(201,162,39,0.15), transparent 60%)",
zIndex: 0,
},

container: {
position: "relative",
zIndex: 2,
display: "flex",
flexWrap: "wrap",
maxWidth: "1100px",
width: "100%",
borderRadius: "20px",
overflow: "hidden",
backdropFilter: "blur(12px)",
background: "rgba(20,20,20,0.7)",
boxShadow: "0 20px 60px rgba(0,0,0,0.8)",
},

left: {
flex: 1,
minWidth: "300px",
padding: "50px",
color: "white",
background:
"linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url('https://images.unsplash.com/photo-1522673607200-164d1b6ce486')",
backgroundSize: "cover",
backgroundPosition: "center",
},

heading: {
fontSize: "36px",
color: "#C9A227",
marginBottom: "10px",
},

subText: {
color: "#ccc",
fontSize: "15px",
marginBottom: "25px",
},

infoBox: {
marginTop: "20px",
fontSize: "14px",
lineHeight: "1.8",
color: "#ddd",
},

highlightBox: {
marginTop: "30px",
padding: "15px",
borderLeft: "3px solid #C9A227",
color: "#fff",
fontStyle: "italic",
},

form: {
flex: 1,
minWidth: "300px",
padding: "50px",
display: "flex",
flexDirection: "column",
gap: "12px",
},

formTitle: {
color: "#fff",
marginBottom: "10px",
fontSize: "24px",
},

input: {
padding: "12px",
borderRadius: "10px",
border: "1px solid #333",
background: "#151515",
color: "white",
outline: "none",
},

textarea: {
padding: "12px",
borderRadius: "10px",
border: "1px solid #333",
background: "#151515",
color: "white",
minHeight: "100px",
resize: "none",
},

button: {
marginTop: "10px",
padding: "12px",
borderRadius: "10px",
border: "none",
background: "#C9A227",
color: "black",
fontWeight: "bold",
cursor: "pointer",
transition: "0.3s",
},
};