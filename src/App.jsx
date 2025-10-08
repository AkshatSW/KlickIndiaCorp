import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import TrustedPartners from './Components/TrustedPartners'
import Projects from './Components/Projects'
import Expertise from './Components/Expertise'
import About from './Components/About'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'
import Services from './Components/Services'
import USP from './Components/USP'
import WhyChooseUs from './Components/WhyChooseUs'

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
      <Projects />
      <About />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
