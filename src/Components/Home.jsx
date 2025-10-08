import React, { useState, useEffect, useRef } from 'react' 
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

// Import About Us image
import aboutImg from '../assets/AboutUs.png'

const Home = () => {
  const backgroundImages = [img1, img2, img3, img4, img5, img6, img7, img9, img10, img11]
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

  // Update image height to match text height on desktop
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
      {/* HOME SECTION */}
      <div id="home" className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-20 flex min-h-screen items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3, type: "spring", stiffness: 100, damping: 15 }}
              className="mb-6 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl text-white"
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
                style={{ color: "#314870" }}
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

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1, type: "spring", stiffness: 80 }}
              className="mb-8 text-lg md:text-xl lg:text-2xl text-white"
            >
              Creating exceptional spaces that inspire and transform lives
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.3, type: "spring", stiffness: 100 }}
            >
              <motion.button 
                className="group relative overflow-hidden brand-button px-8 py-4 text-lg font-semibold"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                style={{ background: "#31487a", color: "#fff", border: "none" }}
              >
                Explore Our Journey
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ABOUT US SECTION */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row items-start gap-10">
            {/* Image on right (top on mobile) */}
            <motion.div
              className="w-full md:w-[37.5%] order-1 md:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
              src={aboutImg}
              alt="About Us"
              className="w-full rounded-2xl shadow-md object-cover" // <-- use object-cover
              style={{
                height: window.innerWidth >= 768 ? textHeight : '200px', // height matches text on desktop
              }}
             />

            </motion.div>

            {/* Text */}
            <motion.div
              ref={textRef}
              className="w-full md:w-[62.5%] order-2 md:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                About Klick India Corporation
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-justify mb-6 text-black">
                Klick India Corporation, led by Mr Suneet Pasricha in 1992 and headquartered in New Delhi has been delivering architectural and design excellence for over three decades. 
                With more than 100+ homes and 200+ factories designed across India and internationally, our capabilities span architecture, interiors and planning across diverse typologies including Residential, Commercial, Institutional, Hospitality & Industrial amongst others.
                <br /><br />
                We combine innovation, sustainability and a client-oriented approach to create projects that are unique, site-specific and executed with precision. 
                Our work is a testament to our vision of redefining architecture in India while leaving a lasting legacy of iconic structures.
              </p>
              <button
                className="px-10 py-4 text-lg font-semibold rounded-full shadow-lg"
                style={{ backgroundColor: "#31487a", color: "#ffffff" }}
              >
                Get in Touch
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
