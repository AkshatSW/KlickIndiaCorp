import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 80 // Account for fixed navbar height
      const elementPosition = element.offsetTop - navbarHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false)
  }

  // WhatsApp function
  const openWhatsAppChat = () => {
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER 
    const message = "Hello! I'm interested in your architectural design services. Could you please provide more information?"
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    // Close mobile menu after action
    setIsMobileMenuOpen(false)
  }

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('home')}
            className={`cursor-pointer text-xl sm:text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            KlickIndia
          </motion.div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ y: -2 }}
                className={`transition-colors duration-300 hover:text-red-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openWhatsAppChat}
            className="hidden md:block rounded-full bg-gradient-to-r from-red-500 to-red-600 px-4 sm:px-6 py-2 text-sm sm:text-base text-white font-medium shadow-lg transition-shadow duration-300 hover:shadow-xl"
          >
            Get Quote
          </motion.button>

          {/* Mobile Hamburger Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleMobileMenu}
            className={`md:hidden relative z-50 flex flex-col justify-center items-center w-8 h-8 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 0 : -4
              }}
              transition={{ duration: 0.3 }}
              className={`w-6 h-0.5 bg-current transform origin-center transition-all duration-300`}
            />
            <motion.span
              animate={{
                opacity: isMobileMenuOpen ? 0 : 1
              }}
              transition={{ duration: 0.3 }}
              className={`w-6 h-0.5 bg-current mt-1 transition-all duration-300`}
            />
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -8 : 4
              }}
              transition={{ duration: 0.3 }}
              className={`w-6 h-0.5 bg-current mt-1 transform origin-center transition-all duration-300`}
            />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`md:hidden overflow-hidden ${
                isScrolled 
                  ? 'bg-white/95 backdrop-blur-md' 
                  : 'bg-black/90 backdrop-blur-md'
              }`}
            >
              <div className="px-4 py-4 space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left py-2 px-2 rounded-lg transition-colors duration-300 hover:bg-red-500/10 ${
                      isScrolled ? 'text-gray-700 hover:text-red-500' : 'text-white/90 hover:text-red-400'
                    }`}
                  >
                    {item.name}
                  </motion.button>
                ))}
                
                {/* Mobile CTA Button */}
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openWhatsAppChat}
                  className="w-full mt-4 rounded-full bg-gradient-to-r from-red-500 to-red-600 px-6 py-3 text-white font-medium shadow-lg"
                >
                  Get Quote
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar