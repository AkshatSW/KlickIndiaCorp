import React from "react";
import { Helmet } from "react-helmet";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; 
import { motion } from "framer-motion";
import heroImg from "../../assets/ContactPageHeader.webp";

const contactMethods = [
  {
    icon: <Mail className="h-8 w-8 text-[#31487a]" />,
    title: "Email",
    info: (
      <a href="mailto:klickindiacorp@gmail.com" className="hover:text-[#31487a]">
        klickindiacorp@gmail.com
      </a>
    ),
  },
  {
    icon: <Phone className="h-8 w-8 text-[#31487a]" />,
    title: "Phone",
    info: (
      <a href="tel:+919873693425" className="hover:text-[#31487a]">
        +91 98736 93425
      </a>
    ),
  },
  {
    icon: <FaWhatsapp className="h-8 w-8 text-[#31487a]" />, // Changed to blue
    title: "WhatsApp",
    info: (
      <a
        href="https://wa.me/919873693425?text=Hello!%20I'm%20interested%20in%20your%20architectural%20design%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#31487a]"
      >
        Chat with us
      </a>
    ),
  },
  {
    icon: <MapPin className="h-8 w-8 text-[#31487a]" />,
    title: "Location",
    info: (
      <a
        href="https://maps.app.goo.gl/24BzqMgkCwAr4dG57"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#31487a]"
      >
        New Delhi, India
      </a>
    ),
  },
];

const ContactPage = () => {
  return (
    <>

      {/* SEO Helmet */}
      <Helmet>
        <title>Contact Us | Klick India Corporation</title>
        <meta
          name="description"
          content="Get in touch with Klick India Corporation. Visit our office in Greater Kailash-1, New Delhi or connect via phone, email, or WhatsApp for your architectural needs."
        />
        <meta
          name="keywords"
          content="contact architect delhi, architectural consultation, design services contact, klick india location"
        />
        <meta
          property="og:title"
          content="Contact Klick India Corporation | Architecture & Design Services"
        />
        <meta
          property="og:description"
          content="Connect with Delhi's leading architectural firm. Schedule a consultation for your project today."
        />
        <meta property="og:image" content="/path-to-contact-page-image.jpg" />
        <meta property="og:url" content="https://klickindia.com/contactPage" />
        <link rel="canonical" href="https://klickindia.com/contactPage" />
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
            Contact Us
          </motion.span>
          <br />
          <p
            className="text-white text-2xl md:text-4xl font-light text-center mt-6 max-w-3xl mx-auto"
            style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.01em' }}
          >
            Connect with us to explore how we can bring your vision to life
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
            Whether you have a new project in mind or need professional design guidance, our team is here to help. Contact us to begin your journey with Klick India Corporation
          </p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactMethods.map((method, idx) => (
            <motion.a
              key={idx}
              href={
                method.title === "Email"
                  ? "mailto:klickindiacorp@gmail.com"
                  : method.title === "Phone"
                  ? "tel:+919873693425"
                  : method.title === "WhatsApp"
                  ? "https://wa.me/919873693425?text=Hello!%20I'm%20interested%20in%20your%20architectural%20design%20services."
                  : method.title === "Location"
                  ? "https://maps.app.goo.gl/24BzqMgkCwAr4dG57"
                  : "#"
              }
              target={
                ["WhatsApp", "Location"].includes(method.title) ? "_blank" : "_self"
              }
              rel={
                ["WhatsApp", "Location"].includes(method.title)
                  ? "noopener noreferrer"
                  : ""
              }
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow cursor-pointer"
              style={{ textDecoration: "none" }}
            >
              <div className="bg-[#31487a]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                {method.icon}
              </div>
              <h3
                className="font-semibold mb-2 text-[#11132c]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {method.title}
              </h3>
              <div className="text-[#555]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {method.info}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Map + Office Info */}
        <div className="grid lg:grid-cols-2 gap-12 mt-16 items-center max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#11132c]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Visit Our Office
            </h2>
            <p
              className="text-[#555] mb-6 leading-relaxed"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Schedule an appointment to visit our office and discuss your project in detail with our team of experts.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#31487a] mt-1 flex-shrink-0" />
                <div>
                  <p
                    className="font-semibold text-[#11132c]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Address
                  </p>
                  <p
                    className="text-[#555]"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    R-138, Second Floor, Greater Kailash-1,
                    <br />
                    New Delhi - 110048
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-[#31487a] mt-1 flex-shrink-0" />
                <div>
                  <p
                    className="font-semibold text-[#11132c]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Business Hours
                  </p>
                  <p
                    className="text-[#555]"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Monday - Saturday: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
            <a
              href="https://wa.me/919873693425?text=Hello!%20I'm%20interested%20in%20your%20architectural%20design%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-[#31487a] text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Get Started Now!
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="overflow-hidden rounded-xl shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3504.675721897131!2d77.24204637549781!3d28.549465175710214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDMyJzU4LjEiTiA3N8KwMTQnNDAuNiJF!5e0!3m2!1sen!2sin!4v1760454530282!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Klick India Corporation Location"
              className="h-96 w-full"
            />
          </motion.div>
        </div>
      </section>

    </>
  );
};

export default ContactPage;
