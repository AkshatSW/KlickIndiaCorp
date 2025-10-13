import React from "react";
import img1 from "../assets/services/img1.png";
import img2 from "../assets/services/img2.png";
import img3 from "../assets/services/img3.png";
import img4 from "../assets/services/img4.png";
import img5 from "../assets/services/img5.png";
import img6 from "../assets/services/img6.png";

const servicesData = [
  { name: "Architecture & Masterplanning", img: img1, text: "Designing spaces that inspire and endure." },
  { name: "Building Planning & Design", img: img2, text: "Efficient, functional, and aesthetic building layouts." },
  { name: "Interior Design", img: img3, text: "Transforming interiors into elegant and practical spaces." },
  { name: "Landscape Design", img: img4, text: "Creating sustainable and beautiful outdoor environments." },
  { name: "MEP Engineering", img: img5, text: "Mechanical, electrical, and plumbing systems designed for efficiency." },
  { name: "Project Planning & Control", img: img6, text: "Ensuring timely, budget-friendly, and high-quality project delivery." }
];

const Services = () => {
  return (
    <section id="services" className="bg-white py-20">
      <div className="container mx-auto px-6 text-center max-w-6xl">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#31487a" }}>
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-700">
            We provide end-to-end solutions for architecture, design, and project management.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 mb-4">
                <img src={service.img} alt={service.name} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: "#31487a" }}>
                {service.name}
              </h3>
              <p className="text-gray-700">{service.text}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div style={{ textAlign: "center" }}>
          <button
          className="px-12 py-4 text-lg font-semibold shadow-lg transition-transform duration-300 hover:scale-105 *:hover:shadow-2xl rounded-lg"
            style={{
              backgroundColor: '#31487a',
              color: '#ffffff'
            }}
          >
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
