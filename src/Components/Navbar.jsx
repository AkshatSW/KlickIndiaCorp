import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import logo from "../assets/KlickIndiaLogoTransparent.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/servicepage" },
    { name: "Projects", path: "/projects" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 z-50 w-full transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? "rgba(17, 19, 44, 0.9)" : "transparent",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(255,255,255,0.1)" : "none",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.img
              src={logo}
              alt="Klick India Logo"
              whileHover={{ scale: 1.05 }}
              className="h-16 w-auto sm:h-20"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`transition-colors duration-300 ${
                  location.pathname === item.path
                    ? "text-[#ffffff] font-semibold"
                    : isScrolled
                    ? "text-gray-200 hover:text-white"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Desktop CTA Button */}
            <Link
              to="/contact"
              className="ml-4 px-4 sm:px-6 py-2 text-sm sm:text-base font-medium text-[#11132c] bg-[#ffffff] rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl inline-block text-center"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleMobileMenu}
            className="md:hidden relative z-50 flex flex-col justify-center items-center w-8 h-8 text-white"
          >
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 0 : -4,
              }}
              transition={{ duration: 0.3 }}
              className="w-6 h-0.5 bg-current transform origin-center transition-all duration-300"
            />
            <motion.span
              animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-0.5 bg-current mt-1 transition-all duration-300"
            />
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -8 : 4,
              }}
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
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-[#11132c]/90 backdrop-blur-xl border-b border-white/10"
            >
              <div className="px-4 py-4 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block w-full text-left py-2 px-2 rounded-lg transition-colors duration-300 ${
                      location.pathname === item.path
                        ? "text-[#bcc3d3] font-semibold"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile Contact Button */}
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full mt-4 px-6 py-3 font-medium rounded-lg text-[#11132c] bg-[#ffffff] shadow-lg hover:shadow-xl text-center"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
