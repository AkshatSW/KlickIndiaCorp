import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'

// Import all your home images
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'
import img5 from '../assets/5.png'
import img6 from '../assets/6.jpg'
import img7 from '../assets/7.jpg'

// Import About Us image
import aboutImg from '../assets/AboutUs.png'

import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const backgroundImages = [img1, img2, img3, img4, img5, img6, img7]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Ref and state for About Us text height
  const textRef = useRef(null)
  const [textHeight, setTextHeight] = useState('auto')

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [backgroundImages.length])

  useEffect(() => {
    const updateHeight = () => {
      if (textRef.current) {
        setTextHeight(textRef.current.offsetHeight + 'px')
      }
    }
    updateHeight()
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  return (
    <>
     {/* ================= HOME SECTION ================= */}
<div id="home" className="relative min-h-screen overflow-hidden"> {/* overflow-hidden fixed here */}
  <div className="absolute inset-0 overflow-hidden"> {/* extra safety */}
    <AnimatePresence mode="wait">
      <motion.div
        key={currentImageIndex}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0.6, scale: 1.02 }} // exit no longer fades fully out
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      />
    </AnimatePresence>

    {/* DARK BLUE GRADIENT OVERLAY */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(to bottom, rgba(17,19,44,0.85), rgba(17,19,44,0.85))",
      }}
    />
  </div>

  <div className="relative z-20 flex min-h-screen items-center justify-center px-4 sm:px-6">
    <div className="text-center max-w-4xl">
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
        className="mb-6 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 800,
          color: "#fff",
          letterSpacing: "-0.02em",
        }}
      >
        <motion.span
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Designing India's Best
        </motion.span>
        <br />
        <motion.span
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Homes & Businesses
        </motion.span>
        <br />
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Since 1992
        </motion.span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.3, type: "spring", stiffness: 100 }}
      >
        <motion.button
          className="group relative overflow-hidden brand-button px-8 py-4 text-lg font-semibold rounded-lg"
          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: "#31487a",
            color: "#fff",
            border: "none",
            fontFamily: "'Poppins', sans-serif",
          }}
          onClick={() => navigate("/about")}
        >
          Explore Our Journey
        </motion.button>
      </motion.div>
    </div>
  </div>
</div>


      {/* Tagline Section */}
      <section className="relative py-16 md:py-20 overflow-x-hidden" style={{ backgroundColor: '#EEF6FC' }}> {/* fixed overflow */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent opacity-40" />
        <motion.div 
          className="container mx-auto px-4 sm:px-6 max-w-4xl text-center relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative inline-block">
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-[#314870]/10 to-transparent blur-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <p 
              className="relative text-2xl md:text-3xl lg:text-4xl leading-relaxed"
              style={{ 
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 300,
                color: '#11132c',
                letterSpacing: "-0.02em",
                textShadow: '0 2px 4px rgba(17, 19, 44, 0.08)'
              }}
            >
              Creating exceptional spaces that
              <br className="hidden md:block" />
              <span className="italic"> inspire and transform </span> 
              lives
            </p>
          </div>
        </motion.div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent opacity-40" />
      </section>

      {/* ================= ABOUT US SECTION ================= */}
      <section id="about-section" className="relative py-20 bg-white overflow-x-hidden"> {/* fixed overflow */}
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10"> {/* reduced gap on mobile */}
            
            {/* Image on right */}
            <motion.div
              className="w-full md:w-[37.5%] order-1 md:order-2 flex-shrink-0"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={aboutImg}
                alt="About Us"
                className="w-full rounded-2xl shadow-md object-cover"
                style={{
                  height: window.innerWidth >= 768 ? textHeight : 'auto', // auto for mobile
                  maxWidth: '100%'
                }}
              />
            </motion.div>

            {/* Text Section */}
            <motion.div
              ref={textRef}
              className="w-full md:w-[62.5%] order-2 md:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
             <h2
  className="text-3xl md:text-4xl font-bold mb-4 text-[#11132c] text-center md:text-left"
  style={{ fontFamily: "'Playfair Display', serif" }}
>
  About Us
</h2>

              <p className="text-base md:text-lg leading-relaxed text-justify mb-6 text-black"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Klick India Corporation, led by Mr Suneet Pasricha in 1992 and headquartered in New Delhi, has been delivering architectural and design excellence for over three decades. 
                With more than 100+ homes and 200+ factories designed across India and internationally, our capabilities span architecture, interiors and planning across diverse typologies including Residential, Commercial, Institutional, Hospitality & Industrial amongst others.
                <br /><br />
                We combine innovation, sustainability and a client-oriented approach to create projects that are unique, site-specific and executed with precision. 
                Our work is a testament to our vision of redefining architecture in India while leaving a lasting legacy of iconic structures.
              </p>

              <div className="mt-6 text-center md:text-left">
                <button
                  className="px-10 py-4 text-lg font-semibold shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl rounded-lg"
                  style={{ 
                    backgroundColor: "#31487a", 
                    color: "#ffffff",
                    fontFamily: "'Poppins', sans-serif"
                  }}
                  onClick={() => navigate('/about')}
                >
                  Discover Our Journey
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
