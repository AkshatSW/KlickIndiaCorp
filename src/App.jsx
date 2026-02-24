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

const SITE_URL = 'https://klickindiacorporation.com';
const OG_IMAGE = `${SITE_URL}/favicon_io/android-chrome-512x512.png`;

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ArchitecturalFirm",
  "name": "Klick India Corporation",
  "url": SITE_URL,
  "logo": `${SITE_URL}/favicon_io/android-chrome-512x512.png`,
  "description": "Leading architectural firm offering innovative design solutions since 1992. Experts in architecture, interior design, and project planning.",
  "foundingDate": "1992",
  "founder": {
    "@type": "Person",
    "name": "Mr. Suneet Pasricha"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Flat No H-1201, AVJ Heights, Zeta-1",
    "addressLocality": "Greater Noida",
    "addressRegion": "Uttar Pradesh",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-98736-93425",
    "contactType": "customer service",
    "email": "klickindiacorp@gmail.com",
    "availableLanguage": ["English", "Hindi"]
  },
  "sameAs": [],
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "knowsAbout": [
    "Architecture",
    "Interior Design",
    "Master Planning",
    "Building Design",
    "Landscape Design",
    "MEP Engineering",
    "Project Management"
  ]
};

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
          content="Leading architectural firm offering innovative design solutions since 1992. Experts in architecture, interior design, landscape design, MEP engineering, and project planning across India."
        />
        <meta
          name="keywords"
          content="architecture firm India, interior design Delhi, commercial building architects, residential design, master planning, MEP engineering, landscape design, project management, Klick India Corporation"
        />
        <meta name="theme-color" content="#31487a" />
        <meta name="author" content="Klick India Corporation" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/x-icon" href="/favicon_io/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />

        {/* Open Graph (Facebook, LinkedIn, etc.) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:title" content="Klick India Corporation | Architecture & Design Excellence" />
        <meta property="og:description" content="Leading architectural firm offering innovative design solutions since 1992. Experts in architecture, interior design, and project planning across India." />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:site_name" content="Klick India Corporation" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`${SITE_URL}/`} />
        <meta name="twitter:title" content="Klick India Corporation | Architecture & Design Excellence" />
        <meta name="twitter:description" content="Leading architectural firm offering innovative design solutions since 1992. Experts in architecture, interior design, and project planning across India." />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* Canonical URL */}
        <link rel="canonical" href={`${SITE_URL}/`} />

        {/* Structured Data - Organization */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
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

        <Route
          path="/health"
          element={
            <div style={{ fontFamily: 'monospace', padding: '2rem', maxWidth: '600px', margin: '5rem auto' }}>
              <h1 style={{ color: '#31487a', marginBottom: '1rem' }}>Site Status</h1>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  {[
                    ['Status', 'OK'],
                    ['Site', 'klickindiacorporation.com'],
                    ['Version', '1.0.0'],
                    ['Build', import.meta.env.MODE],
                    ['Timestamp', new Date().toISOString()],
                  ].map(([key, value]) => (
                    <tr key={key} style={{ borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '0.5rem 1rem 0.5rem 0', fontWeight: 600, color: '#11132c' }}>{key}</td>
                      <td style={{ padding: '0.5rem 0', color: '#555' }}>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
