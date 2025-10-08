import React from 'react';
import { motion } from 'motion/react';
import logo from '../assets/KlickIndiaLogoTransparent.png';

const Footer = () => {
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
        {/* Logo & Tagline aligned left */}
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
            style={{ height: '150px', width: 'auto', marginBottom: '0.25rem' }} // Huge logo
          />
          <p style={{ color: '#bcc3d3', fontSize: '0.85rem', lineHeight: '1.4rem' }}>
            Designing India's Best Homes & Businesses Since 1992
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{ flex: '1 1 150px' }}
        >
          <h4 style={{ fontWeight: '600', marginBottom: '0.75rem', color: '#ffffff', fontSize: '0.95rem' }}>
            Quick Links
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Home', 'About Us', 'Expertise', 'Projects', 'Contact'].map((link, index) => (
              <li key={index} style={{ marginBottom: '0.25rem' }}>
                <a
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  style={{ color: '#bcc3d3', textDecoration: 'none', transition: 'color 0.3s', fontSize: '0.85rem' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#bcc3d3')}
                >
                  {link}
                </a>
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
          <h4 style={{ fontWeight: '600', marginBottom: '0.75rem', color: '#ffffff', fontSize: '0.95rem' }}>Services</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Architecture Design', 'Interior Design', 'Landscape Design', 'MEP Engineering', 'Project Planning'].map(
              (service, index) => (
                <li key={index} style={{ marginBottom: '0.25rem' }}>
                  <a
                    href="#services"
                    style={{ color: '#bcc3d3', textDecoration: 'none', transition: 'color 0.3s', fontSize: '0.85rem' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#bcc3d3')}
                  >
                    {service}
                  </a>
                </li>
              )
            )}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ flex: '1 1 250px' }}
        >
          <h4 style={{ fontWeight: '600', marginBottom: '0.75rem', color: '#ffffff', fontSize: '0.95rem' }}>Contact Us</h4>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
            <p style={{ fontWeight: '600', color: '#ffffff', fontSize: '0.85rem', margin: 0 }}>Email</p>
            <a
              href="mailto:klickindiacorp@gmail.com"
              style={{ color: '#bcc3d3', textDecoration: 'none', fontSize: '0.85rem' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#bcc3d3')}
            >
              klickindiacorp@gmail.com
            </a>

            <p style={{ fontWeight: '600', color: '#ffffff', fontSize: '0.85rem', margin: '0.25rem 0 0 0' }}>Phone No</p>
            <a
              href="tel:+919873693425"
              style={{ color: '#bcc3d3', textDecoration: 'none', fontSize: '0.85rem' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#bcc3d3')}
            >
              +91 98736 93425
            </a>

            <p style={{ fontWeight: '600', color: '#ffffff', fontSize: '0.85rem', margin: '0.25rem 0 0 0' }}>WhatsApp</p>
            <a
              href="https://wa.me/919873693425"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#bcc3d3', textDecoration: 'none', fontSize: '0.85rem' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#bcc3d3')}
            >
              +91 98736 93425
            </a>

            <p style={{ fontWeight: '600', color: '#ffffff', fontSize: '0.85rem', margin: '0.25rem 0 0 0' }}>Address</p>
            <p style={{ color: '#bcc3d3', fontSize: '0.85rem', margin: 0 }}>
              R-138, Second Floor, GK-1, Delhi- 110048
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Copyright */}
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
