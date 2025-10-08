import React from "react";

// Import project images (make sure these paths exist)
import multiStoreyed from "../assets/Projects/MultiStoreyedBuilding.png";
import mdCityHospital from "../assets/Projects/mdcityhospital.png";
import hotelLandmark from "../assets/Projects/hotellandmark.png";

const featuredProjects = [
  {
    title: "Multi Storeyed Building",
    location: "L-1-2, Connaught Place, Delhi",
    image: multiStoreyed,
  },
  {
    title: "MD City Hospital",
    location: "Model Town, Delhi",
    image: mdCityHospital,
  },
  {
    title: "Hotel Landmark",
    location: "Kanpur",
    image: hotelLandmark,
  },
];

const FeaturedProjects = () => {
  return (
    <section style={{ padding: "5rem 0", backgroundColor: "#31487a" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "2.25rem",
              fontWeight: "700",
              color: "#ffffff",
              marginBottom: "1rem",
            }}
          >
            Featured Projects
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: "#fdf6ec",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            A glimpse of our architectural achievements
          </p>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              style={{
                overflow: "hidden",
                borderRadius: "1rem",
                backgroundColor: "#ffffff",
                border: "2px solid #e3d6b5",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
              }}
            >
              <div
                style={{
                  position: "relative",
                  height: "16rem",
                  overflow: "hidden",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
              </div>
              <div style={{ padding: "1.5rem" }}>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                    color: "#31487a",
                  }}
                >
                  {project.title}
                </h3>
                <p style={{ color: "#31487a" }}>{project.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
         <button
          className="px-12 py-4 text-lg font-semibold rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
            style={{
              backgroundColor: '#ffffff',
              color: '#314870'
            }}
          >
            Explore More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
