import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { cn } from '../../lib/cn'

export function Card(props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={cardVariants}
      className={cn('relative rounded-xl p-px group', props.className)}
    >
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-b from-sky-400/10 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        whileHover={{ opacity: 1 }}
      />
      <motion.div
        className="relative rounded-xl border border-white/10 bg-[#0b0c18]/50 p-6 shadow-sm backdrop-blur-md overflow-hidden transition-all duration-300 group-hover:border-sky-400/30 group-hover:shadow-lg group-hover:shadow-sky-500/10"
        whileHover={{
          borderColor: 'rgba(56, 189, 248, 0.3)',
          boxShadow: '0 0 30px rgba(56, 189, 248, 0.1)',
        }}
      >
        {props.children}
      </motion.div>
    </motion.div>
  )
}
