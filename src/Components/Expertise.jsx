import React from "react";
import img1 from "../assets/expertise/image1.png";
import img2 from "../assets/expertise/image2.png";
import img3 from "../assets/expertise/image3.png";
import img4 from "../assets/expertise/image4.png";
import img5 from "../assets/expertise/image5.png";
import img6 from "../assets/expertise/image6.png";
import img7 from "../assets/expertise/image7.png";
import img8 from "../assets/expertise/image8.png";
import { useNavigate } from "react-router-dom";

const expertiseList = [
  {
    title: "Commercial",
    description: "Office buildings, retail complexes, mixed-use developments",
    img: img1,
  },
  {
    title: "Residential",
    description: "Luxury homes, apartments, residential communities",
    img: img2,
  },
  {
    title: "Offices",
    description: "Corporate headquarters, business parks, workspaces",
    img: img3,
  },
  {
    title: "Hospitality",
    description: "Hotels, resorts, restaurants, entertainment venues",
    img: img4,
  },
  {
    title: "Institutional",
    description: "Educational facilities, healthcare, public buildings",
    img: img5,
  },
  {
    title: "Master Planning",
    description: "Urban planning, landscape design, infrastructure",
    img: img6,
  },
  {
    title: "Landscape",
    description: "Garden design, outdoor spaces, environmental planning",
    img: img7,
  },
  {
    title: "Interiors",
    description: "Interior architecture, furniture design, space planning",
    img: img8,
  },
];

const Expertise = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate

  return (
    <section className="py-20" style={{ backgroundColor: "#31487a" }}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-8"
          style={{ fontFamily: "'Playfair Display', serif", color: "#ffffff" }}
        >
          Our Expertise
        </h2>
        <p
          className="text-lg mb-12"
          style={{ fontFamily: "'Poppins', sans-serif", color: "#ffffff" }}
        >
          Excellence that turns ideas into landmark spaces
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {expertiseList.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-[#314870]">
                  {item.title}
                </h3>
                <p className="text-[#31487099] text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <button
            className="px-12 py-4 text-lg font-semibold shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl rounded-lg"
            style={{
              backgroundColor: "#ffffff",
              color: "#314870",
              fontFamily: "'Poppins', sans-serif",
            }}
            onClick={() => navigate("/projects")} // ✅ Navigate to /projects
          >
            Explore Our Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
