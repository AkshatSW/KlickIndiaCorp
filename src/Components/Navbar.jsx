import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import logo from '../assets/KlickIndiaLogoTransparent.PNG'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 80
      window.scrollTo({ top: element.offsetTop - navbarHeight, behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const openWhatsAppChat = () => {
    const phoneNumber = '+919873693425'
    const message =
      "Hello! I'm interested in your architectural design services. Could you please provide more information?"
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(
      /[^0-9]/g,
      ''
    )}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 z-50 w-full transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? 'rgba(49,72,122,0.8)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('home')}
            className="cursor-pointer flex items-center"
          >
            <img src={logo} alt="Klick India Logo" className="h-12 w-auto sm:h-14" />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ y: -2 }}
                className={`transition-colors duration-300 hover:text-white ${
                  isScrolled ? 'text-gray-200' : 'text-white/90'
                }`}
              >
                {item.name}
              </motion.button>
            ))}

            {/* Top Corner CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openWhatsAppChat}
              className="ml-4 px-4 sm:px-6 py-2 text-sm sm:text-base font-medium text-white bg-[#263b5c] rounded-full shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              Call Us
            </motion.button>
          </div>

          {/* Mobile Hamburger */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleMobileMenu}
            className="md:hidden relative z-50 flex flex-col justify-center items-center w-8 h-8 text-white"
          >
            <motion.span
              animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 0 : -4 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-0.5 bg-current transform origin-center transition-all duration-300"
            />
            <motion.span
              animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-0.5 bg-current mt-1 transition-all duration-300"
            />
            <motion.span
              animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -8 : 4 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-0.5 bg-current mt-1 transform origin-center transition-all duration-300"
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
              className="md:hidden overflow-hidden bg-[#31487a]/80 backdrop-blur-xl border-b border-white/10"
            >
              <div className="px-4 py-4 space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left py-2 px-2 rounded-lg transition-colors duration-300 hover:bg-white/5 text-white/90 hover:text-white"
                  >
                    {item.name}
                  </motion.button>
                ))}

                {/* Mobile CTA */}
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openWhatsAppChat}
                  className="w-full mt-4 px-6 py-3 font-medium rounded-full text-white bg-[#263b5c] shadow-lg hover:shadow-xl"
                >
                  Call Us
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
