import { motion } from 'framer-motion'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { cn } from '../../lib/cn'

const navItems = [
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export function Navbar(props) {
  const activeId = useScrollSpy(navItems.map((i) => i.id))

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.4,
      },
    }),
  }

  return (
    <motion.header
      className="sticky top-0 z-10 border-b border-white/10 bg-gradient-to-b from-[#060712]/95 to-[#060712]/80 backdrop-blur-lg"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-4">
          <motion.a
            href="#top"
            aria-label="Go to top"
            className="group inline-flex items-center gap-3 hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 text-sm font-semibold text-white/90 font-serif">
              VA
            </span>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-semibold text-white font-serif tracking-tight">{props.name}</span>
              <span className="hidden text-xs font-semibold text-sky-400/70 sm:inline">Portfolio</span>
            </div>
          </motion.a>

          <motion.nav className="hidden items-center gap-1 text-sm sm:flex">
            {navItems.map((item, i) => {
              const isActive = item.id === activeId
              return (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    'rounded-lg px-4 py-2 font-semibold transition-all duration-200',
                    isActive
                      ? 'bg-sky-400/20 text-sky-300 border border-sky-400/30'
                      : 'text-white/70 hover:text-white hover:bg-white/5 border border-transparent',
                  )}
                >
                  {item.label}
                </motion.a>
              )
            })}
          </motion.nav>

          <motion.div
            className="hidden items-center gap-3 sm:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <motion.a
              className="rounded-lg border-2 border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-semibold text-sky-300 hover:border-sky-400/60 hover:bg-sky-400/20 transition-all duration-200"
              href={`mailto:${props.email}`}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(56, 189, 248, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}
