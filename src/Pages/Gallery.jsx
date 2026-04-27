import React, { useState } from "react";
import Hero from "../Components/Hero"; // 👈 Hero import
import nexus from "../assets/images/DSC01380.JPG"
const Gallery = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const albums = [
    {
      title: "Birthday Party",
      id: "72177720333304962",
      cover: "https://live.staticflickr.com/65535/55230037887_8ce5ab0410_b.jpg"
    },
    {
      title: "For All Events",
      id: "72177720333304515",
      cover: "https://live.staticflickr.com/65535/55231322098_7e8fd07f53_b.jpg"
    },
    {
      title: "Weddings",
      id: "72177720333304515",
      cover: "https://live.staticflickr.com/65535/55231322098_7e8fd07f53_b.jpg"
    }
  ];

  const decorationAlbums = [
    {
      title: "Stage Decoration",
      id: "72177720333307272",
      cover: "https://live.staticflickr.com/65535/55230311867_e5413985e0_b.jpg"
    },
    {
      title: "Hall Setup",
      id: "72177720333304515",
      cover: "https://live.staticflickr.com/65535/55231595850_8ecebd4507_b.jpg"
    },
    {
      title: "Lighting",
      id: "721777203XXXXX",
      cover: "https://live.staticflickr.com/65535/55231594975_1e0a501292_w.jpg"
    }
  ];

  const foodAlbums = [
    {
      title: "Starter Items",
      id: "72177720333350034",
      cover: "https://live.staticflickr.com/65535/55233631320_c5db72402c_b.jpg"
    },
    {
      title: "Main Course",
      id: "72177720333320790",
      cover: "https://live.staticflickr.com/65535/55233650400_24f889fb67_b.jpg"
    },
    {
      title: "Desserts",
      id: "72177720333326672",
      cover: "https://live.staticflickr.com/65535/55234135950_d870b8cb1a_b.jpg"
    }
  ];

  return (
    <>
      {/* 🔥 HERO SECTION */}
   <Hero
  topText="Explore Our"
  title="Event"
  highlight="Gallery"
  desc="Take a glimpse of our beautiful events, decoration and delicious food moments."
  showButtons={false}
  bgImage={nexus}
/>

      {/* 🔥 GALLERY */}
      <div style={{
        padding: "30px",
        minHeight: "100vh",
        background: "#111"
      }}>

        <h2 style={{
          color: "#fff",
          marginBottom: "30px",
          textAlign: "center",
          letterSpacing: "2px"
        }}>
          Gallery
        </h2>

        {!selectedAlbum && (
          <>
            <Section title="Events Gallery" data={albums} setSelectedAlbum={setSelectedAlbum} />
            <Section title="Decoration Gallery ✨" data={decorationAlbums} setSelectedAlbum={setSelectedAlbum} />
            <Section title="Food Gallery 🍽️" data={foodAlbums} setSelectedAlbum={setSelectedAlbum} />
          </>
        )}

        {selectedAlbum && (
          <div style={{ textAlign: "center" }}>
            <button
              onClick={() => setSelectedAlbum(null)}
              style={{
                marginBottom: "20px",
                padding: "10px 20px",
                borderRadius: "20px",
                border: "none",
                background: "#D4AF37",
                color: "#000",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              ⬅ Back
            </button>

            <iframe
              src={`https://www.flickr.com/photos/204506605@N02/albums/${selectedAlbum}/player/`}
              width="100%"
              height="600"
              style={{
                border: "none",
                borderRadius: "15px",
                boxShadow: "0 10px 40px rgba(0,0,0,0.6)"
              }}
              allowFullScreen
            ></iframe>
          </div>
        )}

      </div>
    </>
  );
};


// 🔥 SECTION SAME
const Section = ({ title, data, setSelectedAlbum }) => {
  return (
    <div style={{ marginTop: "50px" }}>
      <h2 style={{
        color: "#D4AF37",
        textAlign: "center",
        marginBottom: "20px"
      }}>
        {title}
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px"
      }}>
        {data.map((album, index) => (
          <div
            key={index}
            onClick={() => setSelectedAlbum(album.id)}
            style={{
              position: "relative",
              cursor: "pointer",
              borderRadius: "15px",
              overflow: "hidden",
              background: "#222",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
            }}
          >
            <img
              src={album.cover}
              alt=""
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover"
              }}
            />

            <div style={{
              position: "absolute",
              bottom: "0",
              width: "100%",
              background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
              padding: "15px"
            }}>
              <p style={{
                color: "#fff",
                fontWeight: "bold"
              }}>
                {album.title}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
