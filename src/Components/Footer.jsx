import React from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/KlickIndiaLogoTransparent.png';

const Footer = () => {
  const navigate = useNavigate();

  const serviceLinks = [
    { name: 'Architecture Design', id: 0 },
    { name: 'Building Planning & Design', id: 1 },
    { name: 'Interior Design', id: 2 },
    { name: 'Landscape Design', id: 3 },
    { name: 'MEP Engineering', id: 4 },
    { name: 'Project Planning & Control', id: 5 },
    { name: 'Specialized Services', id: 6 },
  ];

  // Better service navigation & scroll logic
  const scrollToService = (id) => {
    if (window.location.pathname !== '/servicepage') {
      navigate('/servicepage', { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(`service-${id}`);
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer style={{ backgroundColor: '#11132c', padding: '1.5rem 1rem' }}>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '1.5rem',
        }}
      >
        {/* Logo & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            flex: '1 1 250px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            textAlign: 'left',
          }}
        >
          <img
            src={logo}
            alt="KlickIndia Logo"
            style={{ height: '150px', width: 'auto', marginBottom: '0.25rem' }}
          />
          <h3
            className="text-xl font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: '#fff',
            }}
          >
            Designing India's Best Homes & Businesses Since 1992
          </h3>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{ flex: '1 1 150px' }}
        >
          <h4
            style={{
              fontWeight: '600',
              marginBottom: '0.75rem',
              color: '#ffffff',
              fontSize: '0.95rem',
            }}
          >
            Quick Links
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Services', path: '/servicepage' },
              { name: 'Projects', path: '/projects' },
              { name: 'Contact', path: '/contact' },
            ].map((link, index) => (
              <li key={index} style={{ marginBottom: '0.25rem' }}>
                <Link
                  to={link.path}
                  className="text-[#bcc3d3] hover:text-white transition-colors duration-300 text-sm"
                  style={{ textDecoration: 'none' }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ flex: '1 1 200px' }}
        >
          <h4
            style={{
              fontWeight: '600',
              marginBottom: '0.75rem',
              color: '#ffffff',
              fontSize: '0.95rem',
            }}
          >
            Services
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {serviceLinks.map((service, index) => (
              <li key={index} style={{ marginBottom: '0.25rem' }}>
                <button
                  onClick={() => scrollToService(service.id)}
                  className="text-[#bcc3d3] hover:text-white transition-colors duration-300 text-sm"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    fontFamily: 'inherit',
                  }}
                >
                  {service.name}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ flex: '1 1 250px' }}
        >
          <h4
            style={{
              fontWeight: '600',
              marginBottom: '0.75rem',
              color: '#ffffff',
              fontSize: '0.95rem',
            }}
          >
            Contact Us
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
            <p
              style={{
                fontWeight: '600',
                color: '#ffffff',
                fontSize: '0.85rem',
                margin: 0,
              }}
            >
              Email
            </p>
            <a
              href="mailto:klickindiacorp@gmail.com"
              className="text-[#bcc3d3] hover:text-white transition-colors duration-300 text-sm"
              style={{ textDecoration: 'none' }}
            >
              klickindiacorp@gmail.com
            </a>

            <p
              style={{
                fontWeight: '600',
                color: '#ffffff',
                fontSize: '0.85rem',
                margin: '0.25rem 0 0 0',
              }}
            >
              Phone No
            </p>
            <a
              href="tel:+919873693425"
              className="text-[#bcc3d3] hover:text-white transition-colors duration-300 text-sm"
              style={{ textDecoration: 'none' }}
            >
              +91 98736 93425
            </a>

            <p
              style={{
                fontWeight: '600',
                color: '#ffffff',
                fontSize: '0.85rem',
                margin: '0.25rem 0 0 0',
              }}
            >
              WhatsApp
            </p>
            <a
              href="https://wa.me/919873693425?text=Hello!%20I'm%20interested%20in%20your%20architectural%20design%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#bcc3d3] hover:text-white transition-colors duration-300 text-sm"
              style={{ textDecoration: 'none' }}
            >
              +91 98736 93425
            </a>

            <p
              style={{
                fontWeight: '600',
                color: '#ffffff',
                fontSize: '0.85rem',
                margin: '0.25rem 0 0 0',
              }}
            >
              Address
            </p> 
            <a  href="https://maps.app.goo.gl/24BzqMgkCwAr4dG57"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#bcc3d3',
                fontSize: '0.85rem',
                margin: 0,
              }}
            >
              R-138, Second Floor, GK-1, Delhi-110048
            </a>
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.2)',
          marginTop: '1rem',
          paddingTop: '0.5rem',
          textAlign: 'center',
          fontSize: '0.75rem',
          color: '#bcc3d3',
        }}
      >
        © 2025 Klick India Corporation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
