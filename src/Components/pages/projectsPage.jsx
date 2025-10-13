import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

// Import project images
import heroImg from "../../assets/2.png"; 
import kailash from "../../assets/Projects/kailash.png";
import hotellandmark from "../../assets/Projects/hotellandmark.png";
import commercialBuilding from "../../assets/Projects/CommercialBuilding.png";
import dakshini from "../../assets/Projects/DakshiniApartments.png";
import baldevplaza from "../../assets/Projects/baldevplaza.png";
import multiStoreyedCommercial from "../../assets/Projects/MultiStoreyedCommercialBuilding.png";
import multiStoreyedBuilding from "../../assets/Projects/MultiStoreyedBuilding.png";
import mdcityhospital from "../../assets/Projects/mdcityhospital.png";
import somduttplaza from "../../assets/Projects/somduttplaza.png";
import pragatiTower from "../../assets/Projects/PragatiTower.png";
import multiPrithvi from "../../assets/Projects/MultiStoreyedCommercialBuildingPrithviRajRoad.png"; // <-- fixed
import c58Janakpuri from "../../assets/Projects/c58Janakpuri.png"; // <-- new import


const projects = [
  { title: "Kailash Nursing Home", location: "Delhi", image: kailash },
  { title: "Hotel Landmark", location: "Kanpur", image: hotellandmark },
  { title: "Commercial Building", location: "A-6 Nehru Place, Delhi", image: commercialBuilding },
  { title: "Dakshini Apartments", location: "Pitampura, Delhi", image: dakshini },
  { title: "Baldev Plaza", location: "Gorakhpur", image: baldevplaza },
  { title: "Multi Storeyed Commercial Building", location: "5 Tolstoy Marg, Delhi", image: multiStoreyedCommercial },
  { title: "Multi Storeyed Building", location: "L-1-2, Connaught Place, Delhi", image: multiStoreyedBuilding },
  { title: "MD City Hospital", location: "Model Town, Delhi", image: mdcityhospital },
  { title: "SomDutt Plaza", location: "Kapur", image: somduttplaza },
  { title: "Pragati Tower", location: "Rajander Nagar, Delhi", image: pragatiTower },
  { title: "Multi Storeyed Commercial Building Prithvi Raj Road", location: "31 Prithvi Raj Road, Delhi", image: multiPrithvi },
  { title: "Multi Storeyed Tower", location: "C-58, Janak Puri, Delhi", image: c58Janakpuri },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ProjectsPage = () => {
  return (
    <>
    <Helmet>
        <title>Our Projects | Portfolio | Klick India Corporation</title>
        <meta name="description" content="Explore our diverse portfolio of architectural projects across India. From commercial buildings to healthcare facilities, discover our landmark designs." />
        <meta name="keywords" content="architecture portfolio, delhi projects, commercial buildings, healthcare architecture, residential projects" />
        <meta property="og:title" content="Architecture Project Portfolio | Klick India Corporation" />
        <meta property="og:description" content="View our completed architectural projects. Showcasing excellence in design across commercial, residential, and healthcare sectors." />
        <meta property="og:image" content="/path-to-projects-featured-image.jpg" />
        <meta property="og:url" content="https://klickindia.com/projectsPage" />
        <link rel="canonical" href="https://klickindia.com/projectsPage" />
      </Helmet>

      {/* Overall page background */}
      <div className="bg-[#11132c]">
        {/* Hero Section */}
        <section
          style={{
            position: "relative",
            height: "75vh",
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <div
             style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(17,19,44,0.85), rgba(17,19,44,0.85))",
          }}
          />
          <motion.h1
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, type: "spring", stiffness: 100, damping: 15 }}
            className="mb-6 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-0.02em",
              maxWidth: "80%",
              zIndex: 1,
            }}
          >
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Our Projects
            </motion.span>
            <br />
            <p
                  className="text-white text-2xl md:text-4xl font-light text-center mt-6 max-w-3xl mx-auto"
                  style={{ fontFamily: "'playfair', sans-serif', letterSpacing: '-0.01em'" }}
                >
                  Architecture design projects executed by <br /> Klick India Corporation
                </p>

            
          </motion.h1>
         
        </section>

        {/* Intro Section */}
        <section className="py-16 bg-[#EEF6FC] text-center px-[8%]">
          <motion.div 
            className="container mx-auto px-6 max-w-4xl text-center relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative inline-block">
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-[#314870]/10 to-transparent blur-xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
              <p 
                className="relative leading-relaxed text-left text-lg md:text-xl mx-auto max-w-3xl"
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 300,
                  color: '#11132c',
                  letterSpacing: "-0.02em",
                  textShadow: '0 2px 4px rgba(17, 19, 44, 0.08)'
                }}
              >
               Klick India Corporation’s projects reflect a commitment to quality, innovation and client-focused design. 
               <br /><br />
               Our portfolio demonstrates decades of experience in delivering landmark projects across India and globally.

              </p>
            </div>
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="absolute inset-0 bg-[#314870]/5 blur-3xl transform -rotate-3" />
            </motion.div>
          </motion.div>
        </section>

        {/* Projects Grid */}
        <div className="bg-white">
          <motion.section
            className="px-6 py-16 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer transition-shadow duration-300"
                  variants={cardVariants}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <h3 
                      className="text-xl font-semibold text-[#11132c] mb-2"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {project.title}
                    </h3>
                    <p 
                      className="text-[#555]"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {project.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

       {/* CTA Section */}
<section className="bg-[#EEF6FC] py-20 text-center px-6">
  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-3xl sm:text-4xl font-semibold text-[#11132c] mb-6 max-w-3xl mx-auto"
    style={{ fontFamily: "'Playfair Display', serif" }}
  >
    Design Your Dream Space With Us
  </motion.h2>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="text-[#555] max-w-2xl mx-auto mb-8 leading-relaxed"
    style={{ fontFamily: "'Poppins', sans-serif" }}
  >
    Let's discuss how we can transform your ideas into landmark architectural
    projects with creativity, innovation, and precision.
  </motion.p>

  {/* Updated Button */}
  <motion.a
    href="https://wa.me/919873693425"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-10 py-4 text-lg font-semibold shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl rounded-lg"
    style={{
      backgroundColor: "#31487a",
      color: "#ffffff",
      fontFamily: "'Poppins', sans-serif",
    }}
    whileTap={{ scale: 0.95 }}
  >
    Book a Call with Us
  </motion.a>
</section>

        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
