import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import whychooseImg from "../assets/WhyChoose.png";
import { CheckCircle } from "lucide-react";

const features = [
  { title: "Excellence in Design", text: "Every project is crafted with precision and attention to detail." },
  { title: "Budget-Friendly Solutions", text: "Delivering outstanding results within your budget." },
  { title: "Premium Materials", text: "Using durable and effective building materials for lasting value." },
  { title: "Sustainable & Efficient", text: "Eco-friendly designs that save energy & cost." },
  { title: "Client-Focused Approach", text: "Projects tailored to your needs, timeline & vision." },
  { title: "Trusted Legacy", text: "Over 25 years of creating homes & industrial projects with integrity." },
];

const WhyChooseUs = () => {
  const boxesRef = useRef(null);
  const dividerRef = useRef(null);
  const [boxesHeight, setBoxesHeight] = useState("auto");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      if (boxesRef.current) {
        setBoxesHeight(boxesRef.current.offsetHeight);
        if (dividerRef.current && !mobile) {
          dividerRef.current.style.height = `${boxesRef.current.offsetHeight}px`;
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative overflow-hidden py-20 bg-[#EEF6FC]">
      {/* Soft blue tint overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(179, 207, 228, 0.05)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Container */}
      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-stretch gap-10 relative">
          {/* Left: Image */}
          <div className="md:w-1/2 w-full relative">
            <motion.img
              src={whychooseImg}
              alt="Why Choose Us"
              className="w-full object-cover shadow-md rounded-2xl"
              style={{
                height: isMobile ? "300px" : boxesHeight,
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>

          {/* Right: Boxes + Heading */}
          <div className="md:w-1/2 w-full flex flex-col justify-center" ref={boxesRef}>
            {/* Heading + Subheading */}
            <div className="text-center mb-8">
              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#11132c",
                }}
              >
                Why Choose Us
              </h2>
              <p
                className="text-lg mb-12 text-gray-700" style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Built on experience, defined by precision, driven by passion
              </p>
            </div>

            {/* Feature Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 text-left shadow-sm transition-all duration-300 flex flex-col justify-start hover:bg-[#31487a] hover:scale-105 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Icon */}
                  <CheckCircle
                    size={26}
                    className="mb-3 inline-block transition-colors duration-300 text-[#31487a] group-hover:text-white"
                  />

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-2 text-black transition-colors duration-300 group-hover:text-white">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed transition-colors duration-300 group-hover:text-white/90">
                    {feature.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal Divider on Mobile */}
        <div className="block md:hidden h-px bg-gray-300 my-6" />
      </div>
    </section>
  );
};

export default WhyChooseUs;
