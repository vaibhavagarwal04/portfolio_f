import { motion } from 'framer-motion'

export function Container(props) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{props.children}</div>
}

export function AnimatedSection({ children, delay = 0 }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  )
}
