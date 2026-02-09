import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

export function AnimatedText({ text, className = '' }) {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: i * 0.05,
      },
    }),
  }

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {text.split('').map((char, index) => (
        <motion.span key={index} variants={child} className="inline-block">
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  )
}

export function ParallaxSection({ children, offset = 50 }) {
  const ref = useRef(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, offset])

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  )
}

export function ScrollLinkAnimation({ children }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const springProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  const opacity = useTransform(springProgress, [0, 0.5, 1], [0, 1, 0.5])
  const scale = useTransform(springProgress, [0, 0.5, 1], [0.8, 1, 0.95])

  return (
    <motion.div ref={ref} style={{ opacity, scale }}>
      {children}
    </motion.div>
  )
}

export function GlowingText({ text, className = '', glowColor = '#00d9ff' }) {
  return (
    <motion.span
      className={className}
      style={{
        textShadow: `0 0 20px ${glowColor}`,
      }}
      animate={{
        textShadow: [
          `0 0 20px ${glowColor}`,
          `0 0 40px ${glowColor}`,
          `0 0 20px ${glowColor}`,
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {text}
    </motion.span>
  )
}

export function FloatingElement({ children, delay = 0 }) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [0, 1, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  )
}
