import React from 'react'
import { motion } from 'motion/react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <h3 className="mb-4 text-2xl font-bold text-white">
              Design Craft
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Designing India's Best Homes & Businesses Since 1992
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="mb-6 text-lg font-semibold text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Expertise', 'Projects', 'Contact'].map((item, index) => (
                <li key={index}>
                  <motion.a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 transition-colors duration-300 hover:text-white"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="mb-6 text-lg font-semibold text-white">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                'Architecture Design',
                'Interior Design', 
                'Landscape Design',
                'MEP Engineering',
                'Project Planning'
              ].map((service, index) => (
                <li key={index}>
                  <motion.a
                    href="#services"
                    whileHover={{ x: 5 }}
                    className="text-gray-400 transition-colors duration-300 hover:text-white"
                  >
                    {service}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="mb-6 text-lg font-semibold text-white">
              Contact Us
            </h4>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <svg 
                  className="mt-1 h-5 w-5 flex-shrink-0 text-red-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                  />
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                  />
                </svg>
                <p className="text-gray-400 text-sm leading-relaxed">
                  R-138, Second Floor, GK-1, Delhi- 110048
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3">
                <svg 
                  className="h-5 w-5 flex-shrink-0 text-red-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                  />
                </svg>
                <a 
                  href="tel:+919873693425"
                  className="text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  +91 98736 93425
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <svg 
                  className="h-5 w-5 flex-shrink-0 text-red-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                  />
                </svg>
                <a 
                  href="mailto:klickiniacorp@gmail.com"
                  className="text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  designcraft@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-sm"
            >
              © 2025 Design Craft Corporation. All rights reserved.
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-6"
            >
              <a 
                href="#privacy" 
                className="text-gray-400 text-sm transition-colors duration-300 hover:text-white"
              >
                Privacy Policy
              </a>
              <a 
                href="#terms" 
                className="text-gray-400 text-sm transition-colors duration-300 hover:text-white"
              >
                Terms of Service
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer