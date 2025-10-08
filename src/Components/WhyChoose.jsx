import React, { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'motion/react'

const stats = [
  { number: 30, suffix: '+', label: 'Years' },
  { number: 100, suffix: '+', label: 'Homes' },
  { number: 200, suffix: '+', label: 'Factories' },
  { number: 10, suffix: '+', label: 'Cities' }
]

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0)
  const counterRef = useRef(null)
  const isInView = useInView(counterRef, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime = null
      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        setCount(Math.floor(progress * end))
        if (progress < 1) requestAnimationFrame(animateCount)
        else setCount(end)
      }
      requestAnimationFrame(animateCount)
    }
  }, [isInView, end, duration])

  return (
    <span
      ref={counterRef}
      className="font-extrabold text-3xl sm:text-4xl md:text-5xl mb-1 sm:mb-2 flex justify-center w-full"
      style={{ color: '#31487a', textAlign: 'center' }}
    >
      {count}{suffix}
    </span>
  )
}

const WhyChoose = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      className="relative overflow-hidden py-20 md:py-24"
      style={{ backgroundColor: '#ffffff' }} // white base
    >
      {/* Soft blue tint overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(179, 207, 228, 0.1)', zIndex: 0 }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight"
          style={{ color: '#000000' }}
        >
          Architecture that blends Legacy with Innovation
        </motion.h2>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="py-6 flex flex-col items-center"
            >
              <AnimatedCounter end={s.number} suffix={s.suffix} duration={2.5} />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="font-semibold mt-3 text-lg sm:text-xl md:text-xl"
                style={{
                  color: '#31487a',
                  textAlign: 'center',
                  letterSpacing: '0.5px',
                }}
              >
                {s.label}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
