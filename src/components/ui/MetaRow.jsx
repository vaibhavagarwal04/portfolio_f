import { motion } from 'framer-motion'

export function MetaRow(props) {
  return (
    <motion.div
      className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="font-semibold text-white/70 text-sm"
        animate={{
          color: ['rgba(255, 255, 255, 0.7)', 'rgba(255, 255, 255, 0.9)', 'rgba(255, 255, 255, 0.7)'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {props.left}
      </motion.div>
      <motion.div className="text-sky-300 font-semibold text-sm">{props.right}</motion.div>
    </motion.div>
  )
}
