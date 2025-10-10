import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Award, Lightbulb, CheckCircle, Users, Globe } from "lucide-react";
import img3 from "../../assets/3.png";
import heroBg from "../../assets/5.png";

const About = () => {
  const coreValues = [
    { title: "Design Excellence", text: "Creating spaces that are both beautiful and functional, enhancing usability and comfort.", icon: Award },
    { title: "Innovation-Driven Approach", text: "Integrating modern technology and creative solutions to deliver unique, future-ready designs.", icon: Lightbulb },
    { title: "Quality Craftsmanship", text: "Prioritizing superior materials and precise execution for durable, timeless results.", icon: CheckCircle },
    { title: "Client-Centric Philosophy", text: "Collaborating closely to ensure every design reflects the client’s vision and needs.", icon: Users },
    { title: "Budget-Friendly Solutions", text: "Maximizing value by balancing quality, aesthetics, and functionality within your budget.", icon: Globe },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Klick India Corporation</title>
      </Helmet>

      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          height: "75vh",
          backgroundImage: `url(${heroBg})`,
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
            background: "linear-gradient(to bottom, rgba(17,19,44,0.85), rgba(17,19,44,0.85))",
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
            A Legacy of Design,
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            A Future of Innovation
          </motion.span>
        </motion.h1>
      </section>

      {/* About Text + Image */}
      <section className="flex flex-wrap lg:flex-row flex-col items-center justify-between gap-12 py-20 px-[10%] bg-white">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center mb-8 lg:mb-0"
        >
          <img
            src={img3}
            alt="About Klick India"
            className="w-full max-w-md rounded-2xl shadow-xl"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 max-w-2xl mx-auto text-justify lg:text-left"
        >
          <h2 
            className="text-2xl font-semibold text-[#11132c] mb-4 text-center lg:text-left"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            About Klick India Corporation
          </h2>
          <p 
            className="text-[#444] leading-relaxed mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Headquartered in New Delhi and under the guidance of Mr. Suneet Pasricha, Klick India Corporation has been shaping innovative architecture and planning solutions across India since 1992. With a legacy of designing 100+ homes and over 200+ factories across India and globally for the past three decades, we are known for our expertise in architecture, interiors and multidisciplinary design.
          </p>
          <p 
            className="text-[#444] leading-relaxed"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Our unique approach combines creativity, functionality and sustainability resulting in some of the most iconic buildings worldwide. Each project we undertake is a reflection of our philosophy — individual, inspired and innovative.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: "5rem 10%", backgroundColor: "#11132c", textAlign: "center" }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{ 
            fontSize: "2rem", 
            fontWeight: "600", 
            color: "#ffffff", 
            marginBottom: "2.5rem",
            fontFamily: "'Playfair Display', serif"
          }}
        >
          Our Mission & Vision
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              title: "Mission",
              text: "To provide end-to-end innovative, high-quality architectural and design solutions that exceed client expectations while promoting sustainability, efficiency and long-lasting value across every project.",
            },
            {
              title: "Vision",
              text: "To redefine architecture and planning in India and beyond, creating iconic, enduring spaces that blend design excellence, functionality and environmental responsibility.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 border border-white/20 rounded-2xl p-8 text-left max-w-[450px] flex-1 backdrop-blur-md shadow-[0_8px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_25px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1"
            >
              <h3 
                className="text-white text-xl font-semibold mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {item.title}
              </h3>
              <p 
                className="text-[#d1d5e6] leading-relaxed text-[1rem]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-2xl md:text-3xl font-bold text-black mb-8 text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Core Values
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((v, idx) => {
              const Icon = v.icon;
              const isAlt = idx % 2 === 1;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className={`rounded-2xl p-6 shadow-sm transition-shadow duration-300 ${isAlt ? "bg-[#f7fbff]" : "bg-white"}`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex items-center justify-center rounded-full p-3"
                      style={{ backgroundColor: isAlt ? "#31487a" : "#e9f1fb", minWidth: 48, minHeight: 48 }}
                    >
                      <Icon size={20} color={isAlt ? "#ffffff" : "#31487a"} />
                    </div>
                    <div>
                      <h4 
                        className="text-lg font-semibold text-[#31487a]"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {v.title}
                      </h4>
                      <p 
                        className="text-gray-700 mt-2"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {v.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
