import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function Footer(props) {
  const ref = useRef(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, 100])

  return (
    <motion.footer
      ref={ref}
      className="border-t border-white/10 bg-gradient-to-b from-transparent to-white/5 py-12 text-sm relative overflow-hidden"
      style={{ y }}
    >
      {/* Animated background lines */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-sky-500/5 to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between relative z-10">
        <motion.div
          className="text-white/60 font-medium"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()}{' '}
          <motion.span
            className="text-sky-300"
            animate={{
              color: ['#38bdf8', '#64b5f6', '#38bdf8'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {props.resume.name}
          </motion.span>
          . All rights reserved.
        </motion.div>

        <motion.a
          className="w-fit font-semibold text-white/70 hover:text-sky-300 transition-colors duration-200"
          href="#top"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{
            y: -3,
            color: '#38bdf8',
            textShadow: '0 0 10px rgba(56, 189, 248, 0.5)',
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ display: 'inline-block' }}
          >
            ↑
          </motion.span>{' '}
          Back to top
        </motion.a>
      </div>
    </motion.footer>
  )
}
