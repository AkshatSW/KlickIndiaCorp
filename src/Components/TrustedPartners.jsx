import React from 'react'
import { motion } from 'motion/react'
import ccl from '../assets/companies/CCL.jpg'
import hudco from '../assets/companies/HUDCO.png'
import moe from '../assets/companies/MOE.jpg'
import mtnl from '../assets/companies/MTNL.jpg'
import pnb from '../assets/companies/PNB.jpg'

// No props needed, data is internal
const TrustedPartners = () => {

  const partners = [
    { name: "CCL", logo: ccl },
    { name: "HUDCO", logo: hudco },
    { name: "MOE", logo: moe },
    { name: "MTNL", logo: mtnl },
    { name: "PNB", logo: pnb }
    
  ]

  // Internal WhatsApp callback
  const openWhatsAppChat = () => {
    const phoneNumber = "919873693425"
    const message = "Hello! I'm interested in your architectural design services."
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <section style={{ backgroundColor: '#ffffff' }} className="py-16">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }}
        >
          <h2 
            className="mb-4 text-3xl font-bold md:text-4xl" 
            style={{ 
              color: '#11132c',
              fontFamily: "'Playfair Display', serif"
            }}
          >
            Our Clients
          </h2>
          <p 
            className="text-lg mb-12 text-gray-700" style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Proven by Projects, Backed by Brands
          </p>
        </motion.div>

        <motion.div 
          className="relative overflow-hidden" 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }} 
          transition={{ duration: 1 }}
        >
          <motion.div 
            animate={{ x: [0, -100 * partners.length] }} 
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }} 
            className="flex space-x-12 items-center"
          >
            {[...partners, ...partners].map((partner, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.8 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.6, delay: (index % partners.length) * 0.1 }} 
                whileHover={{ scale: 1.1 }} 
                className="group text-center min-w-[120px] flex-shrink-0"
              >
                <div className="flex flex-col items-center space-y-2">
                  <div 
                    className="w-20 h-20 flex items-center justify-center" 
                    style={{ border: '3px solid #efefef', background: '#fff', borderRadius: '12px' }}
                  >
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="object-contain transition-all duration-300" 
                      style={{ width: '80px', height: '80px', objectFit: 'contain' }} 
                    />
                  </div>
                  <h3 
                    className="text-sm font-medium group-hover:text-black transition-colors duration-300" 
                    style={{ 
                      color: '#31487a',
                      fontFamily: "'Poppins', sans-serif"
                    }}
                  >
                    {partner.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-12" 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button 
            onClick={openWhatsAppChat} 
            className="px-8 py-3 text-lg font-semibold shadow-lg transition-transform duration-300 hover:scale-105 *:hover:shadow-2xl rounded-lg" 
            style={{ 
              background: '#31487a', 
              color: '#FFFFFF',
              fontFamily: "'Poppins', sans-serif"
            }}
          >
            Book a Call with Us
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default TrustedPartners
