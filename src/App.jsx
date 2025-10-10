import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components for homepage
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import USP from './Components/USP';
import TrustedPartners from './Components/TrustedPartners';
import Expertise from './Components/Expertise';
import WhyChooseUs from './Components/WhyChooseUs';
import FeaturedProjects from './Components/Projects';
import Testimonials from './Components/Testimonials';

// Pages
import About from './Components/pages/About';
import ServicesPage from './Components/pages/ServicesPage';
import ProjectsPage from './Components/pages/projectsPage';
import ContactPage from './Components/pages/ContactPage';

// Footer
import Footer from './Components/Footer';

// Scroll to top on route change
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />  {/* Scrolls to top on every route change */}
      <Navbar />
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <USP />
              <TrustedPartners />
              <Expertise />
              <WhyChooseUs />
              <FeaturedProjects />
              <Testimonials />
              <Footer />
            </>
          }
        />

        {/* About Page */}
        <Route
          path="/about"
          element={
            <>
              <About />
              <Footer />
            </>
          }
        />

        {/* Services Page */}
        <Route
          path="/servicepage"
          element={
            <>
              <ServicesPage />
              <Footer />
            </>
          }
        />

        {/* Projects Page */}
        <Route
          path="/projects"
          element={
            <>
              <ProjectsPage />
              <Footer />
            </>
          }
        />

        {/* Contact Page */}
        <Route
          path="/contact"
          element={
            <>
              <ContactPage />
              <Footer />
              </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
