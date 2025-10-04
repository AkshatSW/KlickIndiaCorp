import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

// Import images for testimonials and project showcase (using your assets)
import testimonialImage1 from '../assets/human1.jpeg'
import testimonialImage2 from '../assets/human2.jpg'
import testimonialImage3 from '../assets/human3.webp'
import showcaseImage from '../assets/4.jpg'

// Import company logos
import adityaBirlaLogo from '../assets/companies/aditys birla.gif'
import asianPaintsLogo from '../assets/companies/Asisan paints.jpg'
import facebookLogo from '../assets/companies/Facebook.jpg'
import greenLamsLogo from '../assets/companies/Green lams.jpg'
import samsungLogo from '../assets/companies/samsung.svg'
import tataLogo from '../assets/companies/tata.png'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // WhatsApp chat function
  const openWhatsAppChat = () => {
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER 
    const message = "Hello! I'm interested in your architectural design services. Could you please provide more information?"
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  // Trusted Partners Data with actual logos
  const trustedPartners = [
    { name: "Aditya Birla", logo: adityaBirlaLogo },
    { name: "Asian Paints", logo: asianPaintsLogo },
    { name: "Facebook", logo: facebookLogo },
    { name: "Green Lam", logo: greenLamsLogo },
    { name: "Samsung", logo: samsungLogo },
    { name: "Tata", logo: tataLogo }
  ]

  // Testimonials Data
  const testimonials = [
    {
      id: 1,
      name: "Vartika Singh",
      position: "CEO, Tech Solutions",
      company: "Mumbai",
      image: testimonialImage1,
      rating: 5,
      testimonial: "KlickIndia transformed our office space beyond our expectations. Their attention to detail and innovative approach created a workspace that truly reflects our company culture. The team was professional, timely, and delivered exceptional results."
    },
    {
      id: 2,
      name: "Amit Patel",
      position: "Director, Real Estate",
      company: "Delhi",
      image: testimonialImage2,
      rating: 5,
      testimonial: "Working with KlickIndia was an absolute pleasure. They designed our luxury residential project with creativity and precision. The modern aesthetics combined with functional design exceeded all our expectations. Highly recommended!"
    },
    {
      id: 3,
      name: "Priya Sharma",
      position: "Factory Owner",
      company: "Gujarat",
      image: testimonialImage3,
      rating: 5,
      testimonial: "The industrial complex they designed for us is both functional and aesthetically pleasing. KlickIndia understood our requirements perfectly and delivered a space that improved our operational efficiency significantly."
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div id="contact" className="bg-white">

      {/* Trusted Partners Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-4">
              Our Trusted Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Winning collaborations that produce winning designs.
            </p>
          </motion.div>

          {/* Partners Flowing Animation */}
          <div className="relative overflow-hidden">
            <motion.div
              animate={{ x: [0, -100 * trustedPartners.length] }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="flex space-x-8"
            >
              {/* First set of partners */}
              {trustedPartners.map((partner, index) => (
                <motion.div
                  key={`first-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="group bg-white rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-lg text-center min-w-[200px] flex-shrink-0"
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-16 h-16 rounded-lg bg-gray-100 p-2 flex items-center justify-center overflow-hidden">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-800 group-hover:text-red-600 transition-colors duration-300">
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
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="group bg-white rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-lg text-center min-w-[200px] flex-shrink-0"
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-16 h-16 rounded-lg bg-gray-100 p-2 flex items-center justify-center overflow-hidden">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                      {partner.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Real experiences from real clients
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.9 }}
                transition={{ 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
                className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg"
              >
                <div className="text-center mb-8">
                  {/* Star Rating */}
                  <motion.div 
                    className="flex justify-center mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <motion.svg
                        key={i}
                        className="h-6 w-6 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          delay: 0.3 + i * 0.1,
                          type: "spring",
                          stiffness: 200
                        }}
                        whileHover={{ 
                          scale: 1.3,
                          rotate: 360
                        }}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                  </motion.div>

                  {/* Testimonial Text */}
                  <motion.blockquote 
                    className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    "{testimonials[currentTestimonial].testimonial}"
                  </motion.blockquote>

                  {/* Client Info */}
                  <motion.div 
                    className="flex items-center justify-center space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <motion.img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="h-16 w-16 rounded-full object-cover border-4 border-white shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div 
                      className="text-left"
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      <h4 className="font-bold text-gray-900">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-gray-600">
                        {testimonials[currentTestimonial].position}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonials[currentTestimonial].company}
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <motion.div 
              className="flex justify-center mt-8 space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                onClick={prevTestimonial}
                className="rounded-full bg-gray-200 p-3 text-gray-600 transition-all duration-300 hover:bg-red-600 hover:text-white"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.svg 
                  className="h-5 w-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ x: -2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </motion.svg>
              </motion.button>
              <motion.button
                onClick={nextTestimonial}
                className="rounded-full bg-gray-200 p-3 text-gray-600 transition-all duration-300 hover:bg-red-600 hover:text-white"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.svg 
                  className="h-5 w-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ x: 2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </motion.svg>
              </motion.button>
            </motion.div>

            {/* Testimonial Indicators */}
            <motion.div 
              className="flex justify-center mt-6 space-x-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-red-600 w-8' : 'bg-gray-300'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ 
                    width: index === currentTestimonial ? 32 : 12,
                    backgroundColor: index === currentTestimonial ? '#dc2626' : '#d1d5db'
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Showcase with Chat Widget */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl">
            <img
              src={showcaseImage}
              alt="Kitchen Design Showcase"
              className="h-96 w-full object-cover"
            />
            
            {/* Chat Widget Overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute bottom-6 left-6 right-6"
            >
              {/* Chat Notification */}
              <div className="mb-4 bg-white rounded-lg p-4 shadow-lg max-w-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">We're online</span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p className="text-gray-700 font-medium">How may I assist you?</p>
              </div>

              {/* Chat Button */}
              <div className="flex justify-end">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openWhatsAppChat}
                  className="bg-red-500 hover:bg-red-600 text-white rounded-full p-4 shadow-lg transition-colors duration-300"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* WhatsApp Float Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={openWhatsAppChat}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-colors duration-300"
        >
          <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.089z"/>
          </svg>
        </motion.button>
      </motion.div>
    </div>
  )
}

export default Testimonials