import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import WhyChoose from './Components/WhyChoose'
import TrustedPartners from './Components/TrustedPartners'
import Projects from './Components/Projects'
import Expertise from './Components/Expertise'
import About from './Components/About'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'
import Services from './Components/Services'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <WhyChoose />
      <TrustedPartners />
      <Expertise />
      <Services />
      <Projects />
      <About />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
