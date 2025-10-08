import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

// Import all your home images
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpeg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'
import img6 from '../assets/6.webp'
import img7 from '../assets/7.jpg'
import img9 from '../assets/9.jpg'
import img10 from '../assets/10.jpg'
import img11 from '../assets/11.jpg'

const Home = () => {
  // Array of background images
  const backgroundImages = [
    img1, img2, img3, img4, img5, img6, img7, img9, img10, img11
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Auto-change background every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [backgroundImages.length])

  return (
    <>
      {/* HOME SECTION */}
      <div id="home" className="relative min-h-screen overflow-hidden">
        {/* Background Image Slideshow */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${backgroundImages[currentImageIndex]})`
              }}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: 1.5,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            />
          </AnimatePresence>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
          {/* Brightening overlay between image and text */}
          <div className="absolute inset-0 z-10 pointer-events-none" /> 
        </div>

{/* use for image bg-white/40 */}


        {/* Content */}
        <div className="relative z-20 flex min-h-screen items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.3,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              className="mb-6 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl text-white"
              style={{ color: "#fff" }}
            >
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-white"
                style={{ color: "#fff" }}
              >
                Designing India's Best
              </motion.span>
              <br />
              <motion.span 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                style={{
                  color: "#314870" // Blue accent
                }}
              >
                Homes & Businesses
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-white"
                style={{ color: "#fff" }}
              >
                Since 1992
              </motion.span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1, 
                delay: 1.1,
                type: "spring",
                stiffness: 80
              }}
              className="mb-8 text-lg md:text-xl lg:text-2xl text-white"
              style={{ color: "#fff" }}
            >
              Creating exceptional spaces that inspire and transform lives
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 1.3,
                type: "spring",
                stiffness: 100
              }}
            >
              <motion.button 
                className="group relative overflow-hidden brand-button px-8 py-4 text-lg font-semibold"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: "#31487a", // blue background
                  color: "#fff",         // White text
                  border: "none"
                }}
              >
                <motion.span 
                  className="relative z-10 flex items-center gap-2"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                  style={{ color: "#fff" }} // White text
                >
                  Explore Our Journey
                  <motion.svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </motion.svg>
                </motion.span>
                
                {/* Soft overlay on hover */}
                <motion.div 
                  className="absolute inset-0 bg-white/10 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Image indicators */}
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-2 w-8 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? 'bg-white shadow-lg'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 right-8 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white"
          >
            <span className="mb-2 text-sm font-medium">Scroll</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 13l3 3 3-3M7 6l3 3 3-3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* NEW SECTION AFTER HOME */}
      <section className="relative py-20 bg-white text-center">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-8"
            style={{ color: "#314870" }} // Blue heading
          >
            About Klick India Corporation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl mb-10 leading-relaxed text-justify"
            style={{ color: "#000000" }} // Black text
          >
            Klick India Corporation, led by Mr Suneet Pasricha in 1992 and headquartered in New Delhi has been delivering architectural and design excellence for over three decades. 
            With more than 100+ homes and 200+ factories designed across India and internationally, our capabilities span architecture, interiors and planning across diverse typologies 
            including Residential, Commercial, Institutional, Hospitality & Industrial amongst others. 
            <br /><br />
            We combine innovation, sustainability and a client-oriented approach to create projects that are unique, site-specific and executed with precision. 
            Our work is a testament to our vision of redefining architecture in India while leaving a lasting legacy of iconic structures.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="px-10 py-4 text-lg font-semibold rounded-full shadow-lg"
            style={{
              backgroundColor: "#31487a", // blue button
              color: "#ffffff", // White text
            }}
          >
            Get in Touch
          </motion.button>
        </div>
      </section>
    </>
  )
}

export default Home
