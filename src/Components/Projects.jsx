import React, { useRef, useState } from 'react'
import { motion } from 'motion/react'

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null)
  const [isHover, setIsHover] = useState(false)
  const [pointer, setPointer] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setPointer({ x, y })
  }

  const tilt = () => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return { rotateX: 0, rotateY: 0 }
    const relX = (pointer.x / rect.width) * 2 - 1
    const relY = (pointer.y / rect.height) * 2 - 1
    return { rotateY: relX * 8, rotateX: -relY * 8 }
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30, scale: 0.96, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
      viewport={{ once: true, margin: "-10px" }}
      transition={{ duration: 0.3, delay: index * 0.03, type: "spring", stiffness: 500, damping: 28 }}
      animate={isHover ? tilt() : { rotateX: 0, rotateY: 0 }}
      whileHover={{ z: 20 }}
      className="group cursor-pointer overflow-hidden rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl transition-all duration-300 hover:shadow-purple-500/25 relative"
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
    >
      <div className="relative overflow-hidden">
        <motion.img src={project.image} alt={project.title} className="h-52 sm:h-64 w-full object-cover" initial={{ scale: 1.05, filter: "brightness(0.95)" }} whileInView={{ scale: 1, filter: "brightness(1)" }} animate={isHover ? { scale: 1.08, filter: "brightness(1.12) saturate(1.12)" } : {}} transition={{ duration: 0.3, ease: "easeOut" }} />
      </div>
      <motion.div className="p-6 relative z-10">
        <motion.h3 className="mb-3 text-xl font-bold text-white">{project.title}</motion.h3>
        <motion.p className="flex items-center text-gray-300 mb-4">{project.location}</motion.p>
        <motion.p className="text-sm text-gray-400 mb-4 line-clamp-2">
          Exceptional {project.category.toLowerCase()} design showcasing modern architecture.
        </motion.p>
        <motion.button className="px-4 py-2 rounded-2xl brand-button text-white font-medium text-sm" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          View Project
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

const Projects = () => {
  const projects = [
    { id: 1, image: "/assets/1.jpg", title: "Luxury Residence", location: "New Delhi", category: "Residential" },
    { id: 2, image: "/assets/2.jpeg", title: "Commercial Plaza", location: "Gurugram", category: "Commercial" },
    { id: 3, image: "/assets/3.jpg", title: "Hotel Landmark", location: "Mumbai", category: "Hospitality" },
    { id: 4, image: "/assets/4.jpg", title: "Industrial Complex", location: "Faridabad", category: "Industrial" },
    { id: 5, image: "/assets/5.jpg", title: "Educational Campus", location: "Noida", category: "Educational" },
    { id: 6, image: "/assets/6.webp", title: "Landscape Design", location: "Chandigarh", category: "Landscape" }
  ]

  return (
    <section style={{ backgroundColor: '#efefef' }} className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div className="mb-12 text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl" style={{ color: '#31487a' }}>Featured Projects</h2>
          <p className="text-lg text-gray-700">A glimpse of our architectural achievements</p>
        </motion.div>

        <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.2 }}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
