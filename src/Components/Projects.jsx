import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'motion/react'

// Import project images
import project1 from '../assets/1.jpg'
import project2 from '../assets/2.jpeg'
import project3 from '../assets/3.jpg'
import project4 from '../assets/4.jpg'
import project5 from '../assets/5.jpg'
import project6 from '../assets/6.webp'
import project7 from '../assets/7.jpg'
import project9 from '../assets/9.jpg'
import project10 from '../assets/10.jpg'
import project11 from '../assets/11.jpg'

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0)
  const counterRef = useRef(null)
  const isInView = useInView(counterRef, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime = null
      const startCount = 0

      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        
        setCount(Math.floor(progress * (end - startCount) + startCount))
        
        if (progress < 1) {
          requestAnimationFrame(animateCount)
        }
      }
      
      requestAnimationFrame(animateCount)
    }
  }, [isInView, end, duration])

  return (
    <span ref={counterRef} className="font-bold">
      {count}{suffix}
    </span>
  )
}

const Projects = () => {
  const statsRef = useRef(null)
  const isStatsInView = useInView(statsRef, { once: true })

  // WhatsApp function
  const openWhatsAppChat = () => {
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER 
    const message = "Hello! I'm interested in your architectural design services. Could you please provide more information?"
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  // Statistics data
  const stats = [
    { number: 30, suffix: "+", label: "Years" },
    { number: 100, suffix: "+", label: "Homes" },
    { number: 200, suffix: "+", label: "Factories" },
    { number: 10, suffix: "+", label: "Cities" }
  ]

  // Project data with your images
  const projects = [
    {
      id: 1,
      image: project1,
      title: "Luxury Residence",
      location: "New Delhi",
      category: "Residential"
    },
    {
      id: 2,
      image: project2,
      title: "Commercial Plaza",
      location: "Gurugram",
      category: "Commercial"
    },
    {
      id: 3,
      image: project3,
      title: "Hotel Landmark",
      location: "Mumbai",
      category: "Hospitality"
    },
    {
      id: 4,
      image: project4,
      title: "Industrial Complex",
      location: "Faridabad",
      category: "Industrial"
    },
    {
      id: 5,
      image: project5,
      title: "Educational Campus",
      location: "Noida",
      category: "Educational"
    },
    {
      id: 6,
      image: project6,
      title: "Landscape Design",
      location: "Chandigarh",
      category: "Landscape"
    }
  ]

  const brands = [
    "Punjab & Sind Bank",
    "Indian Oil Corporation", 
    "NTPC",
    "BHEL",
    "Coal India Limited",
    "Power Grid"
  ]

  return (
    <div id="projects" className="bg-gray-50">
      {/* Statistics Section */}
      <section className="bg-gradient-to-r from-red-400 to-red-500 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isStatsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-4xl font-bold md:text-6xl">
                  <AnimatedCounter 
                    end={stat.number} 
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                </div>
                <p className="mt-2 text-lg font-medium text-red-100 md:text-xl">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Proven by Projects, Backed by Brands
            </h2>
            <p className="mb-12 text-lg text-gray-600">
              Trusted by leading organizations across India
            </p>
          </motion.div>

          {/* Brand Logos Slider */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative overflow-hidden"
          >
            <motion.div
              animate={{ x: [0, -100 * brands.length] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="flex space-x-12"
            >
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={index}
                  className="flex min-w-[200px] items-center justify-center rounded-lg bg-gray-50 px-6 py-4 text-gray-700 shadow-sm"
                >
                  <span className="text-sm font-medium">{brand}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12"
          >
            <button 
              onClick={openWhatsAppChat}
              className="rounded-full bg-gray-900 px-8 py-3 text-white font-semibold transition-all duration-300 hover:bg-gray-800 hover:shadow-lg"
            >
              Book a Call with Us
            </button>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600">
              A glimpse of our architectural achievements
            </p>
          </motion.div>

          {/* Project Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 80, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.02,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                }}
                className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl perspective-1000"
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="h-64 w-full object-cover"
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Animated overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Category Badge with animation */}
                  <motion.div 
                    className="absolute right-4 top-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <motion.span 
                      className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-800 backdrop-blur-sm"
                      whileHover={{ scale: 1.1 }}
                    >
                      {project.category}
                    </motion.span>
                  </motion.div>

                  {/* Animated project info overlay */}
                  <motion.div
                    className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <motion.h4 
                      className="text-lg font-bold mb-1"
                      initial={{ x: -20 }}
                      whileHover={{ x: 0 }}
                    >
                      {project.title}
                    </motion.h4>
                    <motion.p 
                      className="text-sm text-gray-200"
                      initial={{ x: -20 }}
                      whileHover={{ x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {project.location}
                    </motion.p>
                  </motion.div>
                </div>

                <motion.div 
                  className="p-6"
                  whileHover={{ backgroundColor: "rgba(239, 68, 68, 0.05)" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h3 
                    className="mb-2 text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    className="flex items-center text-gray-600"
                    whileHover={{ x: 5 }}
                    transition={{ delay: 0.1 }}
                  >
                    <motion.svg
                      className="mr-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{ scale: 1.2 }}
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
                    </motion.svg>
                    {project.location}
                  </motion.p>
                </motion.div>

                {/* Animated border on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-red-500 opacity-0"
                  whileHover={{ opacity: 1, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Explore More Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <button className="rounded-full border-2 border-gray-900 px-8 py-3 text-gray-900 font-semibold transition-all duration-300 hover:bg-gray-900 hover:text-white">
              Explore More Projects
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Projects