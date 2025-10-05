import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'motion/react'
import WhyChoose from './WhyChoose'

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

// Import company logos
import adityaBirlaLogo from '../assets/companies/aditys birla.gif'
import asianPaintsLogo from '../assets/companies/Asisan paints.jpg'
import facebookLogo from '../assets/companies/Facebook.jpg'
import greenLamsLogo from '../assets/companies/Green lams.jpg'
import samsungLogo from '../assets/companies/samsung.svg'
import tataLogo from '../assets/companies/tata.png'

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

// Interactive project card with 3D tilt, luminous border and pointer glow
const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null)
  const [isHover, setIsHover] = useState(false)
  const [pointer, setPointer] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setPointer({ x, y })
  }

  const tilt = () => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return { rotateX: 0, rotateY: 0 }
    const relX = (pointer.x / rect.width) * 2 - 1
    const relY = (pointer.y / rect.height) * 2 - 1
    return {
      rotateY: relX * 8,
      rotateX: -relY * 8,
    }
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onMouseMove={handleMouseMove}
      initial={{ 
        opacity: 0, 
        y: 30, 
        scale: 0.96,
        rotateX: 8
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        rotateX: 0
      }}
      viewport={{ once: true, margin: "-10px" }}
      transition={{ 
        duration: 0.3, 
        delay: index * 0.03,
        type: "spring",
        stiffness: 500,
        damping: 28
      }}
      animate={isHover ? tilt() : { rotateX: 0, rotateY: 0 }}
      whileHover={{ z: 20 }}
      className="group cursor-pointer overflow-hidden rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl transition-all duration-300 hover:shadow-purple-500/25 hover:shadow-2xl relative"
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
    >
      {/* Luminous animated border */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-3xl"
        style={{
          background: "conic-gradient(from 0deg, rgba(139,92,246,0.2), rgba(56,189,248,0.2), rgba(139,92,246,0.2))",
          filter: "blur(12px)",
          opacity: 0
        }}
        animate={{ opacity: isHover ? 1 : 0, rotate: isHover ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      {/* Cursor-follow glow */}
      <motion.div
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 240,
          height: 240,
          left: pointer.x,
          top: pointer.y,
          background: "radial-gradient(closest-side, rgba(139,92,246,0.18), rgba(255,255,255,0))"
        }}
        animate={{ opacity: isHover ? 1 : 0.0 }}
        transition={{ duration: 0.2 }}
      />

      <div className="relative overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="h-52 sm:h-64 w-full object-cover"
          initial={{ scale: 1.05, filter: "brightness(0.95)" }}
          whileInView={{ scale: 1, filter: "brightness(1)" }}
          animate={isHover ? { scale: 1.08, filter: "brightness(1.12) saturate(1.12)" } : {}}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />

        {/* Category Badge with Icon */}
        <motion.div 
          className="absolute right-4 top-4"
          initial={{ opacity: 0, x: 15, rotate: -5 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          animate={isHover ? { scale: 1.08, rotate: 2 } : { scale: 1, rotate: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div 
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg"
          >
            <motion.svg
              className="w-6 h-6 text-purple-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 2a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </motion.svg>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="p-6 relative z-10"
        animate={isHover ? { color: "#ffffff" } : {}}
        transition={{ duration: 0.3 }}
      >
        <motion.h3 
          className="mb-3 text-xl font-bold text-white transition-colors duration-300"
          animate={isHover ? { x: 4 } : { x: 0 }}
          transition={{ duration: 0.2 }}
        >
          {project.title}
        </motion.h3>
        
        <motion.p 
          className="flex items-center text-gray-300 transition-colors duration-300 mb-4"
          animate={isHover ? { x: 3 } : { x: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.svg
            className="mr-3 h-5 w-5"
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
          </motion.svg>
          {project.location}
        </motion.p>

        <motion.p className="text-sm text-gray-400 transition-colors duration-300 mb-4 line-clamp-2">
          Exceptional {project.category.toLowerCase()} design showcasing modern architecture and innovative solutions for contemporary living spaces.
        </motion.p>
        
        {/* Read More Button */}
        <motion.button
          className="px-4 py-2 rounded-2xl brand-button text-white font-medium text-sm transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Project
        </motion.button>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/40 rounded-full opacity-0 group-hover:opacity-100"
          style={{
            top: `${30 + i * 25}%`,
            right: `${15 + i * 20}%`,
            zIndex: 5
          }}
          animate={isHover ? {
            opacity: [0, 1, 0],
            y: [-5, -15, -25],
            x: [0, 5, -5],
            scale: [0.5, 1, 0.5]
          } : {}}
          transition={{
            duration: 0.8,
            repeat: isHover ? Infinity : 0,
            repeatType: "loop"
          }}
        />
      ))}
    </motion.div>
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

  // Trusted Partners Data with actual logos
  const trustedPartners = [
    { name: "Aditya Birla", logo: adityaBirlaLogo },
    { name: "Asian Paints", logo: asianPaintsLogo },
    { name: "Facebook", logo: facebookLogo },
    { name: "Green Lam", logo: greenLamsLogo },
    { name: "Samsung", logo: samsungLogo },
    { name: "Tata", logo: tataLogo }
  ]

  return (
    <div id="projects" className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Statistics Section */}
      <section className="bg-gradient-to-r from-blue-900 via-indigo-900 to-gray-900 py-16">
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
                <p className="mt-2 text-lg font-medium text-blue-100 md:text-xl">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gradient-to-b from-slate-800 to-slate-900 py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Our Trusted Partners
            </h2>
            <p className="mb-12 text-lg text-gray-600">
              Winning collaborations that produce winning designs.
            </p>
          </motion.div>

          {/* Partners Flowing Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative overflow-hidden"
          >
            <motion.div
              animate={{ x: [0, -100 * trustedPartners.length] }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="flex space-x-12 items-center"
            >
              {/* First set of partners */}
              {trustedPartners.map((partner, index) => (
                <motion.div
                  key={`first-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="group text-center min-w-[120px] flex-shrink-0"
                >
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-20 h-20 flex items-center justify-center">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain transition-all duration-300"
                      />
                    </div>
                    <h3 className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                      {partner.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
              
              {/* Second set of partners for seamless loop */}
              {trustedPartners.map((partner, index) => (
                <motion.div
                  key={`second-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="group text-center min-w-[120px] flex-shrink-0"
                >
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-20 h-20 flex items-center justify-center">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain transition-all duration-300"
                      />
                    </div>
                    <h3 className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                      {partner.name}
                    </h3>
                  </div>
                </motion.div>
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
              className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-3 text-white font-semibold transition-all duration-300 hover:from-purple-700 hover:to-indigo-700 hover:shadow-xl shadow-purple-500/25"
            >
              Book a Call with Us
            </button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section (below Trusted Partners) */}
      <WhyChoose />

      {/* Featured Projects Section */}
      <section className="bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-300">
              A glimpse of our architectural achievements
            </p>
          </motion.div>

          {/* Project Grid */}
          <motion.div 
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>

          {/* Lightning-Fast Explore More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.2, 
              delay: 0.1,
              type: "spring",
              stiffness: 600,
              damping: 30
            }}
            className="mt-16 text-center"
          >
            <motion.button 
              className="relative overflow-hidden rounded-full border-2 border-purple-400 px-10 py-4 text-purple-400 font-bold text-lg transition-all duration-100 hover:text-white group"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.1 }}
            >
              {/* Instant animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-teal-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.15, ease: "easeOut" }}
              />
              
              {/* Instant button text */}
              <motion.span 
                className="relative z-10 flex items-center"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.1 }}
              >
                Explore More Projects
                <motion.svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ 
                    x: 4, 
                    rotate: 45,
                    scale: 1.1
                  }}
                  transition={{ duration: 0.15 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </motion.span>
              
              {/* Lightning particles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full opacity-0"
                  style={{
                    top: `${30 + i * 15}%`,
                    left: `${20 + i * 20}%`
                  }}
                  whileHover={{
                    opacity: [0, 1, 0],
                    y: [-2, -8, -15],
                    scale: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.03,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                />
              ))}
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Projects