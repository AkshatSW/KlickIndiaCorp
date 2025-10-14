import React from "react";
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  return (
    <section style={{ padding: "5rem 0", backgroundColor: "#31487a" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2
            className="text-3xl md:text-4xl font-bold mb-8"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#ffffff",
            }}
          >
            Featured Projects
          </h2>
          <p
            className="text-lg mb-12 text-white" style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Transforming visions into iconic spaces across India
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
            className="px-12 py-4 text-lg font-semibold shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl rounded-lg"
            style={{
              backgroundColor: '#ffffff',
              color: '#314870',
              fontFamily: "'Poppins', sans-serif"
            }}
            onClick={() => navigate('/projects')}
          >
            Explore Our Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
