import React from 'react'
import { motion } from 'motion/react'

// Import an image for the laptop/hero section (you can replace with your preferred image)
import heroImage from '../assets/1.jpg' // Using one of your assets as hero background

const About = () => {
  // Services data
  const services = [
    {
      id: 1,
      title: "Commercial",
      subtitle: "Modern commercial spaces",
      icon: (
        <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Residential",
      subtitle: "Luxury homes & villas",
      icon: (
        <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m0 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Offices",
      subtitle: "Corporate environments",
      icon: (
        <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Hospitality",
      subtitle: "Hotels & resorts",
      icon: (
        <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Institutional",
      subtitle: "Educational facilities",
      icon: (
        <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Master Planning",
      subtitle: "Urban development",
      icon: (
        <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    },
    {
      id: 7,
      title: "Landscape",
      subtitle: "Outdoor spaces",
      icon: (
        <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      id: 8,
      title: "Interiors",
      subtitle: "Interior design",
      icon: (
        <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V3a1 1 0 011 1v11.586l2 2A1 1 0 0120 18v-7a1 1 0 00-1-1h-3V7a1 1 0 00-1-1H9a1 1 0 00-1 1v3H5a1 1 0 00-1 1v7a1 1 0 00.293.707l2 2H7V4z" />
        </svg>
      )
    }
  ]

  return (
    <div id="about" className="min-h-screen">
      {/* Hero Section - Web & Design Agency Style */}
      <section className="relative min-h-screen bg-gray-900 overflow-hidden">
        <div className="relative z-10 flex min-h-screen items-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-5xl font-bold leading-tight lg:text-7xl"
                >
                  Architecture &{' '}
                  <span className="block">Design Agency</span>
                </motion.h1>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mt-8 space-y-4 text-lg text-gray-300 lg:text-xl"
                >
                  <p>Your Digital Success Partner. We transform visions into digital realities.</p>
                  <p>We're more than just a design agency.</p>
                </motion.div>

                {/* Figma-like Logo */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mt-12"
                >
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="h-4 w-4 rounded-full bg-red-500"></div>
                      <div className="h-4 w-4 rounded-full bg-purple-500"></div>
                      <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                      <div className="h-4 w-4 rounded-full bg-green-500"></div>
                      <div className="h-4 w-4 rounded-full bg-yellow-500"></div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Content - Laptop Mockup */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="relative perspective-1000">
                  <motion.div
                    animate={{ 
                      rotateY: [0, 2, 0, -2, 0],
                      rotateX: [0, 1, 0, -1, 0]
                    }}
                    transition={{ 
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="relative mx-auto max-w-lg"
                  >
                    {/* Laptop Frame */}
                    <div className="relative rounded-t-xl bg-gray-800 p-2 shadow-2xl">
                      {/* Screen */}
                      <div className="rounded-lg bg-black p-4">
                        <img
                          src={heroImage}
                          alt="Design showcase"
                          className="h-64 w-full rounded object-cover"
                        />
                        {/* Overlay Content */}
                        <div className="absolute inset-4 flex items-center justify-center">
                          <div className="text-center text-white">
                            <h3 className="text-xl font-bold">More than just a design agency</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Laptop Base */}
                    <div className="h-4 rounded-b-xl bg-gray-700 shadow-lg"></div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section id="services" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive architectural solutions for every need
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 60, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                className="group relative bg-white rounded-2xl p-8 shadow-sm transition-all duration-500 hover:shadow-2xl"
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative text-center">
                  <motion.div
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, -10, 10, 0]
                    }}
                    transition={{ duration: 0.4 }}
                    className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gray-100 text-gray-700 group-hover:bg-red-600 group-hover:text-white transition-all duration-500"
                  >
                    {service.icon}
                  </motion.div>
                  
                  <motion.h3 
                    className="mb-2 text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {service.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-sm text-gray-600"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {service.subtitle}
                  </motion.p>
                </div>

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-red-500 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Discover More Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border-2 border-gray-900 px-8 py-3 text-gray-900 font-semibold transition-all duration-300 hover:bg-gray-900 hover:text-white"
            >
              Discover More
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About