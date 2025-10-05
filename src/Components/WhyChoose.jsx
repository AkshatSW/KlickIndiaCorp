import React, { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import bg from '../assets/4.jpg'

const stats = [
  { value: '50', label: 'Design Experts' },
  { value: '24/7', label: 'Floor Plan' },
  { value: '15+', label: 'Years of Experience' },
  { value: '2000+', label: 'Happy Clients' }
]

const WhyChoose = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="why-choose" className="relative overflow-hidden py-16 md:py-20">
      <div 
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div className="absolute inset-0 bg-slate-900/70" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 md:mb-10"
        >
          Why Indian Architect?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="py-6"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold gradient-text mb-1 sm:mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-slate-100/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)]">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose


