import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import TrustedPartners from './Components/TrustedPartners'
import Expertise from './Components/Expertise'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'
import Services from './Components/Services'
import USP from './Components/USP'
import WhyChooseUs from './Components/WhyChooseUs'
import FeaturedProjects from './Components/Projects'


function App() {
  return (
    <>
      <Navbar />
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
  )
}

export default App
