import React, { useState } from "react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet";

// Import project images
import heroImg from "../../assets/2.webp";
import kailash from "../../assets/Projects/kailash.webp";
import hotellandmark from "../../assets/Projects/hotellandmark.webp";
import commercialBuilding from "../../assets/Projects/CommercialBuilding.webp";
import dakshini from "../../assets/Projects/DakshiniApartments.webp";
import baldevplaza from "../../assets/Projects/baldevplaza.webp";
import multiStoreyedCommercial from "../../assets/Projects/MultiStoreyedCommercialBuilding.webp";
import multiStoreyedBuilding from "../../assets/Projects/MultiStoreyedBuilding.webp";
import mdcityhospital from "../../assets/Projects/mdcityhospital.webp";
import somduttplaza from "../../assets/Projects/somduttplaza.webp";
import pragatiTower from "../../assets/Projects/PragatiTower.webp";
import multiPrithvi from "../../assets/Projects/MultiStoreyedCommercialBuildingPrithviRajRoad.webp";
import c58Janakpuri from "../../assets/Projects/c58Janakpuri.webp";

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

// Shimmer placeholder
const Shimmer = () => (
  <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200" />
);

const ProjectCard = ({ project, idx }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <motion.div
      key={idx}
      className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer transition-shadow duration-300"
      variants={cardVariants}
      whileHover={{ scale: 1.03 }}
    >
      <div className="relative overflow-hidden h-64">
        {!loaded && <Shimmer />}
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-700 hover:scale-110 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-[#11132c] mb-2 font-[Playfair_Display]">
          {project.title}
        </h3>
        <p className="text-[#555] font-[Poppins]">
          {project.location}
        </p>
      </div>
    </motion.div>
  );
};

const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Projects | Architecture Portfolio | Klick India Corporation</title>
        <meta
          name="description"
          content="Explore our diverse portfolio of architectural projects across India. From commercial buildings and hospitals to residential towers, discover our landmark designs since 1992."
        />
        <meta
          name="keywords"
          content="architecture portfolio, Delhi projects, commercial buildings, healthcare architecture, residential projects, Klick India Corporation"
        />
        <link rel="canonical" href="https://klickindiacorporation.com/projects" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Our Projects | Architecture Portfolio | Klick India Corporation" />
        <meta property="og:description" content="Explore landmark architectural projects across India by Klick India Corporation." />
        <meta property="og:url" content="https://klickindiacorporation.com/projects" />
        <meta property="og:image" content="https://klickindiacorporation.com/favicon_io/android-chrome-512x512.png" />
        <meta property="og:image:alt" content="Klick India Corporation Logo" />
        <meta property="og:site_name" content="Klick India Corporation" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Projects | Architecture Portfolio | Klick India Corporation" />
        <meta name="twitter:description" content="Explore landmark architectural projects across India by Klick India Corporation." />
        <meta name="twitter:image" content="https://klickindiacorporation.com/favicon_io/android-chrome-512x512.png" />
        <meta name="twitter:image:alt" content="Klick India Corporation Logo" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Architectural Projects Portfolio",
            "description": "Explore our diverse portfolio of architectural projects across India since 1992.",
            "url": "https://klickindiacorporation.com/projects",
            "mainEntity": {
              "@type": "ItemList",
              "name": "Klick India Corporation Projects",
              "numberOfItems": 12,
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Kailash Nursing Home, Delhi" },
                { "@type": "ListItem", "position": 2, "name": "Hotel Landmark, Kanpur" },
                { "@type": "ListItem", "position": 3, "name": "Commercial Building, Nehru Place, Delhi" },
                { "@type": "ListItem", "position": 4, "name": "Dakshini Apartments, Pitampura, Delhi" },
                { "@type": "ListItem", "position": 5, "name": "Baldev Plaza, Gorakhpur" },
                { "@type": "ListItem", "position": 6, "name": "Multi Storeyed Commercial Building, Tolstoy Marg, Delhi" },
                { "@type": "ListItem", "position": 7, "name": "Multi Storeyed Building, Connaught Place, Delhi" },
                { "@type": "ListItem", "position": 8, "name": "MD City Hospital, Model Town, Delhi" },
                { "@type": "ListItem", "position": 9, "name": "SomDutt Plaza, Kanpur" },
                { "@type": "ListItem", "position": 10, "name": "Pragati Tower, Rajander Nagar, Delhi" },
                { "@type": "ListItem", "position": 11, "name": "Multi Storeyed Commercial Building, Prithvi Raj Road, Delhi" },
                { "@type": "ListItem", "position": 12, "name": "Multi Storeyed Tower, Janak Puri, Delhi" }
              ]
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://klickindiacorporation.com/" },
              { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://klickindiacorporation.com/projects" }
            ]
          })}
        </script>
      </Helmet>

      <div className="bg-[#11132c]">
        {/* HERO SECTION */}
        <section
          className="relative h-[75vh] flex items-center justify-center text-center text-white"
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[rgba(17,19,44,0.85)]" />
          <motion.h1
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            className="z-10 mb-6 text-4xl font-bold md:text-6xl lg:text-7xl font-[Playfair_Display]"
          >
            Our Projects
            <p className="text-white text-2xl md:text-4xl font-light text-center mt-6 max-w-3xl mx-auto">
              Architecture design projects executed by Klick India Corporation
            </p>
          </motion.h1>
        </section>

        {/* INTRO SECTION */}
        <section className="py-16 bg-[#EEF6FC] text-center px-4 sm:px-6 overflow-x-hidden">
          <motion.div
            className="container mx-auto max-w-4xl relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="relative text-left text-lg md:text-xl text-[#11132c] font-[Playfair_Display]">
              Klick India Corporation’s projects reflect a commitment to quality,
              innovation, and client-focused design.
              <br />
              <br />
              Our portfolio demonstrates decades of experience in delivering
              landmark projects across India.
            </p>
          </motion.div>
        </section>

        {/* PROJECTS GRID */}
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
                <ProjectCard key={idx} project={project} idx={idx} />
              ))}
            </div>
          </motion.section>

          {/* CTA */}
          <section className="bg-[#EEF6FC] py-20 text-center px-6">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl font-semibold text-[#11132c] mb-6 font-[Playfair_Display]"
            >
              Design Your Dream Space With Us
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#555] max-w-2xl mx-auto mb-8 leading-relaxed font-[Poppins]"
            >
              Let's discuss how we can transform your ideas into landmark
              architectural projects with creativity, innovation, and precision.
            </motion.p>

            <motion.a
              href="https://wa.me/919873693425?text=Hello!%20I'm%20interested%20in%20your%20architectural%20design%20services."
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
