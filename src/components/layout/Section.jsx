import { motion } from 'framer-motion'

export function Section(props) {
  return (
    <motion.section
      id={props.id}
      className="scroll-mt-24 py-16 sm:py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="mb-10 sm:mb-12"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">{props.title}</h2>
        {props.subtitle ? <p className="mt-3 text-base text-white/70 font-medium">{props.subtitle}</p> : null}
      </motion.div>
      {props.children}
    </motion.section>
  )
}
