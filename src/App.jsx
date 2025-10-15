// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Components
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import USP from './Components/USP';
import TrustedPartners from './Components/TrustedPartners';
import Expertise from './Components/Expertise';
import WhyChooseUs from './Components/WhyChooseUs';
import FeaturedProjects from './Components/Projects';
import Testimonials from './Components/Testimonials';
import Services from './Components/Services';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';

// Pages
import About from './Components/pages/About';
import ServicesPage from './Components/pages/servicesPage';
import ProjectsPage from './Components/pages/projectsPage';
import ContactPage from './Components/pages/contactPage';

function App() {
  return (
    <Router>
     <Helmet>
  {/* Basic Meta */}
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Klick India Corporation | Architecture & Design Excellence</title>
  <meta
    name="description"
    content="Leading architectural firm in Delhi offering innovative design solutions since 1992. Experts in architecture, interior design, and project planning."
  />
  <meta
    name="keywords"
    content="architecture, interior design, construction, delhi architects, commercial buildings, residential design"
  />
  <meta name="theme-color" content="#31487a" />
  <meta name="author" content="Klick India Corporation" />
  <meta name="robots" content="index, follow" />

  {/* Favicons */}
  <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
  <link rel="icon" type="image/x-icon" href="/favicon_io/favicon.ico" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
  <link rel="manifest" href="/favicon_io/site.webmanifest" />
  <link rel="mask-icon" href="/favicon_io/safari-pinned-tab.svg" color="#5bbad5" />
  <meta name="msapplication-TileColor" content="#2b5797" />

  {/* Open Graph (Facebook, LinkedIn, etc.) */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://klickindiacorporation.com/" />
  <meta
    property="og:title"
    content="Klick India Corporation | Architecture & Design Excellence"
  />
  <meta
    property="og:description"
    content="Leading architectural firm in Delhi offering innovative design solutions since 1992. Experts in architecture, interior design, and project planning."
  />
  <meta property="og:image" content="/favicon_io/og-image.jpg" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://klickindiacorporation.com/" />
  <meta
    name="twitter:title"
    content="Klick India Corporation | Architecture & Design Excellence"
  />
  <meta
    name="twitter:description"
    content="Leading architectural firm in Delhi offering innovative design solutions since 1992. Experts in architecture, interior design, and project planning."
  />
  <meta name="twitter:image" content="/favicon_io/og-image.jpg" />

  {/* Canonical URL */}
  <link rel="canonical" href="https://klickindiacorporation.com/" />
</Helmet>


      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <USP />
              <TrustedPartners />
              <Expertise />
              <Services />
              <WhyChooseUs />
              <FeaturedProjects />
              <Testimonials />
              <Footer />
            </>
          }
        />

        <Route path="/about" element={<><About /><Footer /></>} />
        <Route path="/servicepage" element={<><ServicesPage /><Footer /></>} />
        <Route path="/projects" element={<><ProjectsPage /><Footer /></>} />
        <Route path="/contact" element={<><ContactPage /><Footer /></>} />
      </Routes>
    </Router>
  );
}

export default App;
