import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import heroImg from "../../assets/2.png";
import sampleImg from "../../assets/2.png";

const servicesData = [
  {
    title: "Architecture & Masterplanning",
    description:
      "We create visionary, functional, and sustainable spaces that define the built environment and enhance human experience.",
    points: [
      "Site Analysis",
      "Architectural Programming",
      "Operational and Functional Sketches",
      "Built-form Studies",
      "Feasibility Studies",
      "Concept Design, Schematic Design, Design Development",
      "Tender Documentation, Construction Drawings and Documentation",
      "Architectural Site Supervision for All Building Categories",
      "Spatial Design",
      "Master Planning & Urban Design",
      "Planning of New Towns, Conservation, and Rehabilitation of Historic Areas",
      "Development of Design Criteria and Guidelines",
    ],
    img: sampleImg,
  },
  {
    title: "Building Planning & Design",
    description:
      "We deliver integrated building design solutions that balance functionality, aesthetics and sustainability for long-term performance.",
    points: [
      "Coordination of Architectural and Engineering Designs",
      "Development of Budgets and Cost Planning",
      "Feasibility and Operational Studies",
      "Tender Documentation and Construction Packages",
      "Construction Drawings and Detailed Design",
      "Project Progress Monitoring and Site Coordination",
    ],
    img: sampleImg,
  },
  {
    title: "Interior Design",
    description:
      "We craft interiors that are functional, elegant and tailored to your needs. Every detail is thoughtfully designed to enhance comfort, aesthetics and experience.",
    points: [
      "Development of Program Requirements",
      "Space Planning and Layouts",
      "Interior Concept and Design Development",
      "Furniture Selection & Detailing",
      "Coordination of Specialized Equipment and Audio-Visual Systems",
      "Finishes and Material Selection",
    ],
    img: sampleImg,
  },
  {
    title: "Landscape Design",
    description:
      "We design landscapes that complement architecture and create sustainable, engaging outdoor environments integrating ecology, aesthetics and functionality to enhance spaces.",
    points: [
      "Site Planning and Analysis",
      "Streetscape and Public Realm Design",
      "Urban Landscape Planning",
      "Planting and Material Selection",
      "Sustainable and Low-Maintenance Landscape Solutions",
      "Integration with Building and Urban Context",
    ],
    img: sampleImg,
  },
  {
    title: "MEP Engineering",
    description:
      "Our engineering solutions make buildings safe, efficient, and comfortable, aligning all services with architectural intent for high-quality results.",
    points: [
      "Coordination of Electrical, Plumbing, HVAC, and Fire Safety Systems",
      "Development of Design Specifications",
      "Budgeting and Cost Planning",
      "Tendering and Construction Packages",
      "Sustainable and Energy-Efficient Solutions",
      "Integration with Overall Architectural Design",
    ],
    img: sampleImg,
  },
  {
    title: "Project Planning & Control",
    description:
      "We ensure every project is executed efficiently, on time and within budget coordinating all disciplines to achieve seamless delivery and measurable results.",
    points: [
      "Coordination of Various Professional Disciplines",
      "Development of Budgets and Cost Planning",
      "Development and Updating of Project Schedules",
      "Cost Estimation",
      "Assisting in Prequalification of Contractors",
      "Preparation of Construction Packages",
      "Tendering",
      "Project Progress Reports",
      "Assistance at Start-up",
      "Recommendation and Acceptance of the Work",
    ],
    img: sampleImg,
  },
  {
    title: "Specialized Services",
    description:
      "We provide advanced and innovative solutions that enhance sustainability, preserve heritage and optimize construction practices addressing complex challenges with expertise.",
    points: [
      "Feasibility Studies",
      "Sustainability, Ecology, and Green Building Designs",
      "Built Environment Studies, Research, and Development Projects",
      "Lean Construction Practices",
      "Conservation, Restoration, Adaptive Reuse, and Renovation of Historic Precincts",
    ],
    img: sampleImg,
  },
];

const listContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const listItem = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

// Helper function to generate smaller number-shaped SVG mask
const getNumberMask = (num) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <text x="50%" y="50%" font-size="60" font-family="Arial" fill="white" text-anchor="middle" dominant-baseline="central">
      ${String(num).padStart(2, "0")}
    </text>
  </svg>`;
  return `url('data:image/svg+xml;utf8,${encodeURIComponent(svg)}')`;
};

const ServicesPage = () => {
  return (
    <>
      {/* SEO / Helmet Section */}
      <Helmet>
        <title>Our Services | Architecture & Design Solutions | Klick India</title>
        <meta
          name="description"
          content="Comprehensive architectural services including master planning, interior design, MEP engineering, and project management. Expert solutions for all your design needs."
        />
        <meta
          name="keywords"
          content="architectural services, interior design, MEP engineering, master planning, project management, building design"
        />
        <meta property="og:title" content="Architecture & Design Services | Klick India Corporation" />
        <meta property="og:description" content="Complete range of architectural and design services. From concept to completion, we deliver excellence in every project." />
        <meta property="og:image" content="/path-to-services-image.jpg" />
        <meta property="og:url" content="https://klickindia.com/servicesPage" />
        <link rel="canonical" href="https://klickindia.com/servicesPage" />
      </Helmet>

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
            Our Services
          </motion.span>
          <br />
          <p
            className="text-white text-2xl md:text-4xl font-light text-center mt-6 max-w-3xl mx-auto"
            style={{ fontFamily: "'playfair', sans-serif', letterSpacing: '-0.01em'" }}
          >
            Blending innovation, <br />functionality &  client vision in every  project
          </p>
        </motion.h1>
      </section>

     {/* Intro Section */}
<section className="py-16 bg-[#EEF6FC] text-center px-[8%] overflow-x-hidden">
  <motion.div
    className="container mx-auto max-w-4xl text-center relative px-4 sm:px-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <div className="relative inline-block">
      {/* Subtle gradient behind text */}
      <motion.div
        className="absolute -inset-0.5 bg-gradient-to-r from-[#314870]/10 to-transparent blur-lg opacity-50 rounded-md"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <p
        className="relative leading-relaxed text-left text-lg md:text-xl mx-auto max-w-3xl"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 300,
          color: "#11132c",
          letterSpacing: "-0.02em",
          textShadow: "0 2px 4px rgba(17, 19, 44, 0.08)",
        }}
      >
        From concept to completion, we provide end-to-end design, planning and engineering services.
        <br />
        <br /> Our multidisciplinary approach ensures innovative, functional & enduring results for every project.
      </p>
    </div>

    {/* Background blur behind entire section */}
    <motion.div
      className="absolute inset-0 pointer-events-none"
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-[#314870]/5 blur-2xl transform -rotate-3" />
    </motion.div>
  </motion.div>
</section>


      {/* Services Sections */}
      {servicesData.map((service, index) => (
        <section key={index} className="py-16 bg-white">
          <div
            className={`container mx-auto px-[8%] flex flex-col lg:flex-row items-start gap-8 ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image Section with Number Mask */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 1 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-[32%] flex justify-center order-1"
            >
              <div
                className="w-full max-w-xs sm:max-w-sm h-[240px] sm:h-[280px] md:h-[340px] overflow-hidden"
                style={{
                  WebkitMaskImage: getNumberMask(index + 1, { bold: true }),
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskSize: "contain",
                  WebkitMaskPosition: "center",
                  maskImage: getNumberMask(index + 1, { bold: true }),
                  maskRepeat: "no-repeat",
                  maskSize: "contain",
                  maskPosition: "center",
                }}
              >
                <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
              </div>
            </motion.div>

            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 1 ? 60 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-[68%] order-2 space-y-4 max-w-xl"
            >
              <h2
                className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#11132c] text-center lg:text-left"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {service.title}
              </h2>

              <p
                className="text-[#444] text-justify break-words whitespace-normal overflow-wrap-anywhere leading-relaxed lg:leading-normal"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  wordWrap: "break-word",
                  overflowWrap: "anywhere",
                }}
              >
                {service.description}
              </p>

              <motion.ul
                variants={listContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="list-disc pl-6 space-y-2 text-[#444] leading-relaxed lg:leading-snug break-words whitespace-normal overflow-wrap-anywhere"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  wordWrap: "break-word",
                  overflowWrap: "anywhere",
                }}
              >
                {service.points.map((point, i) => (
                  <motion.li key={i} variants={listItem}>
                    {point}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </section>
      ))}

      {/* WhatsApp CTA */}
      <section className="py-20 text-center bg-[#EEF6FC]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h3
            className="text-2xl sm:text-3xl font-semibold text-[#11132c] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Having a project in mind?
          </h3>
          <p
            className="text-[#555] max-w-2xl mx-auto mb-10 px-4 leading-relaxed"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Let’s discuss how we can bring your ideas to life through design,
            innovation, and functionality. Book a quick consultation call with
            our team.
          </p>

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
        </motion.div>
      </section>
    </>
  );
};

export default ServicesPage;
