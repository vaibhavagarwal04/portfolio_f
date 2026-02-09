import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll'

export function Reveal(props) {
  const { ref, revealed } = useRevealOnScroll()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={cn('will-change-transform', props.className)}
    >
      {props.children}
    </motion.div>
  )
}
