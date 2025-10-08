import React from 'react'
import { motion } from 'motion/react'
import {
  Building2,
  Home,
  Briefcase,
  Hotel,
  GraduationCap,
  Map,
  Trees,
  Ruler
} from 'lucide-react'

const expertiseList = [
  { icon: Building2, title: 'Commercial', description: 'Office buildings, retail complexes, mixed-use developments' },
  { icon: Home, title: 'Residential', description: 'Luxury homes, apartments, residential communities' },
  { icon: Briefcase, title: 'Offices', description: 'Corporate headquarters, business parks, workspaces' },
  { icon: Hotel, title: 'Hospitality', description: 'Hotels, resorts, restaurants, entertainment venues' },
  { icon: GraduationCap, title: 'Institutional', description: 'Educational facilities, healthcare, public buildings' },
  { icon: Map, title: 'Master Planning', description: 'Urban planning, landscape design, infrastructure' },
  { icon: Trees, title: 'Landscape', description: 'Garden design, outdoor spaces, environmental planning' },
  { icon: Ruler, title: 'Interiors', description: 'Interior architecture, furniture design, space planning' }
]

const Expertise = () => {
  return (
    <section className="relative py-20" style={{ backgroundColor: '#314870' }}>
      <div className="container mx-auto px-6 max-w-6xl text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: '#FFFFFF' }}
        >
         Our Expertise
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl mb-12"
          style={{ color: '#fdf6ec' }}
        >
          Expertise that turns ideas into landmark spaces
        </motion.p>

        {/* Expertise Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {expertiseList.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="rounded-xl p-8 hover:-translate-y-2 transition-transform duration-300 cursor-pointer shadow-md"
                style={{
                  backgroundColor: '#ffffff',
                  border: '2px solid #e3d6b5'
                }}
              >
                {/* Icon illustration */}
                <div
                  className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full"
                  style={{ backgroundColor: '#314870' }}
                >
                  <Icon color="#ffffff" size={24} />
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: '#314870' }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm text-gray-700"
                  style={{ color: '#314870' }}
                >
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <button
            className="px-12 py-4 text-lg font-semibold rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
            style={{
              backgroundColor: '#ffffff',
              color: '#314870'
            }}
          >
            Explore Our Projects
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Expertise
