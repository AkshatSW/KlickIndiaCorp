import React from 'react'
import TrustedPartners from './TrustedPartners'
import ProjectsGrid from './ProjectsGrid'

// Project and partner data
import project1 from '../assets/1.jpg'
// ... import other project images
import adityaBirlaLogo from '../assets/companies/aditys birla.gif'
// ... import other logos

const Projects = () => {
  const trustedPartners = [
    { name: "Aditya Birla", logo: adityaBirlaLogo },
    // ... other partners
  ]

  const projects = [
    { id: 1, image: project1, title: "Luxury Residence", location: "New Delhi", category: "Residential" },
    // ... other projects
  ]

  const openWhatsAppChat = () => {
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER 
    const message = "Hello! I'm interested in your architectural design services. Could you please provide more information?"
    window.open(`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div id="projects">
      <TrustedPartners partners={trustedPartners} onBookCall={openWhatsAppChat} />
      <ProjectsGrid projects={projects} />
    </div>
  )
}

export default Projects
