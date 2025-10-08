import React from 'react'
import { motion } from 'motion/react'

// ProjectCard Component
const ProjectCard = ({ project, index }) => {
  const [isHover, setIsHover] = React.useState(false)
  const [pointer, setPointer] = React.useState({ x: 0, y: 0 })
  const cardRef = React.useRef(null)

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
    return {
      rotateY: relX * 8,
      rotateX: -relY * 8,
    }
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
      className="group cursor-pointer overflow-hidden rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl transition-all duration-300 hover:shadow-purple-500/25 hover:shadow-2xl relative"
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="h-52 sm:h-64 w-full object-cover"
          initial={{ scale: 1.05, filter: "brightness(0.95)" }}
          whileInView={{ scale: 1, filter: "brightness(1)" }}
          animate={isHover ? { scale: 1.08, filter: "brightness(1.12) saturate(1.12)" } : {}}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>

      <motion.div className="p-6 relative z-10">
        <motion.h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300">
          {project.title}
        </motion.h3>
        <motion.p className="flex items-center text-gray-300 transition-colors duration-300 mb-4">
          {project.location}
        </motion.p>
        <motion.p className="text-sm text-gray-400 transition-colors duration-300 mb-4 line-clamp-2">
          Exceptional {project.category.toLowerCase()} design showcasing modern architecture and innovative solutions.
        </motion.p>
        <motion.button
          className="px-4 py-2 rounded-2xl brand-button text-white font-medium text-sm transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Project
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

// ProjectsGrid Component
const ProjectsGrid = ({ projects }) => {
  return (
    <section style={{ backgroundColor: '#efefef' }} className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl" style={{ color: '#31487a' }}>
            Featured Projects
          </h2>
          <p className="text-lg text-gray-700">
            A glimpse of our architectural achievements
          </p>
        </motion.div>

        {/* Project Grid */}
        <motion.div 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsGrid
