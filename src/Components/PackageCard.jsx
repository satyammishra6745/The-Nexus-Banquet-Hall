// import React from "react";

// const PackageCard = ({ title, price, bgColor, image, sections }) => {
//   return (
//     <div style={styles.card}>
      
//       {/* Header */}
//       <div style={{ ...styles.header, background: bgColor }}>
//         <div>
//           <h2 style={styles.title}>{title}</h2>
//           {/* <p style={styles.price}>₹{price} / Plate</p> */}
//           <small style={styles.small}>(NON VEG)</small>
//         </div>

//         <img src={image} alt={title} style={styles.image} />
//       </div>

//       {/* Body */}
//       <div style={styles.body}>
//         {sections.map((sec, index) => (
//           <div key={index} style={styles.section}>
//             <h4 style={styles.sectionTitle}>{sec.title}</h4>
//             <ul>
//               {sec.items.map((item, i) => (
//                 <li key={i} style={styles.li}>{item}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>

//       {/* Button */}
//       <button style={styles.button}>Enquire Now</button>
//     </div>
//   );
// };

// export default PackageCard;

// /* Inline Styles */
// const styles = {
//   card: {
//     width: "320px",
//     borderRadius: "16px",
//     overflow: "hidden",
//     boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
//     background: "#fff",
//     fontFamily: "Arial",
//     margin: "20px",
//     height:"70%",
//   },

//   header: {
//     padding: "15px",
//     color: "#fff",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },

//   title: {
//     margin: 0,
//     fontSize: "20px",
//   },

//   price: {
//     margin: "5px 0 0",
//     fontWeight: "bold",
//   },

//   small: {
//     fontSize: "12px",
//     opacity: 0.8,
//   },

//   image: {
//     width: "70px",
//     height: "70px",
//     borderRadius: "10px",
//     objectFit: "cover",
//   },

//   body: {
//     padding: "15px",
//   },

//   section: {
//     marginBottom: "12px",
//   },

//   sectionTitle: {
//     marginBottom: "5px",
//     fontSize: "14px",
//     color: "#333",
//     fontWeight: "bold",
//   },

//   li: {
//     fontSize: "13px",
//     color: "#555",
//     marginLeft: "15px",
//   },

//   button: {
//     width: "100%",
//     padding: "12px",
//     border: "none",
//     background: "#111",
//     color: "#fff",
//     cursor: "pointer",
//     fontWeight: "bold",
//   },
// };