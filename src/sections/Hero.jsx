import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Card } from '../components/ui/Card'
import { PillLink } from '../components/ui/PillLink'
import { resume } from '../resumeData'
import { AnimatedText, GlowingText, FloatingElement } from '../components/ui/AnimatedText'

export function Hero(props) {
  const { resume } = props
  const ref = useRef(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden" ref={ref}>
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 -left-40 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-0 -right-32 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />
      </div>

      <motion.div
        className="grid gap-10 sm:grid-cols-[1.3fr_0.7fr] sm:items-start relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{ y, opacity }}
      >
        <div>
          <motion.div variants={itemVariants}>
            <motion.p
              className="text-xs font-bold uppercase tracking-[0.3em] text-sky-400"
              animate={{
                letterSpacing: ['0.3em', '0.4em', '0.3em'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              B.Tech (CS) • KIET
            </motion.p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-4">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight text-white">
              <GlowingText text={resume.name} glowColor="#38bdf8" />
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80"
          >
            Frontend-focused developer with strong DSA fundamentals and competitive programming experience. I build
            responsive, user-friendly web apps using React/Next.js and clean component design.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-6 flex flex-wrap gap-2">
            {resume.links.map((l, index) => (
              <motion.div
                key={l.id}
                initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  delay: 0.5 + index * 0.08,
                  duration: 0.5,
                  type: 'spring',
                  stiffness: 100,
                }}
              >
                <PillLink label={l.label} href={l.href} title={l.description} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-4">
            <motion.a
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg hover:shadow-xl hover:shadow-sky-500/50 transition-all duration-200 relative overflow-hidden group"
              href="#skills"
              whileHover={{
                scale: 1.08,
                boxShadow: '0 0 30px rgba(56, 189, 248, 0.8)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                whileHover={{ opacity: 0.2, x: ['-100%', '100%'] }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative">Explore My Work</span>
            </motion.a>

            <motion.a
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:border-sky-400/50 hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
              href={`mailto:${resume.email}`}
              whileHover={{
                scale: 1.08,
                borderColor: 'rgba(56, 189, 248, 0.5)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>

        <motion.div variants={itemVariants}>
          <FloatingElement delay={0.2}>
            <Card>
              <h3 className="text-sm font-semibold text-white/90">Quick Info</h3>
              <div className="mt-4 space-y-3">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-sm text-white/70"
                >
                  <div className="text-white/50">Phone</div>
                  <div className="font-medium text-white/85">{resume.phone}</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-sm text-white/70"
                >
                  <div className="text-white/50">Email</div>
                  <div className="font-medium text-white/85">{resume.email}</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="text-sm text-white/70"
                >
                  <div className="text-white/50">Highlights</div>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/70">
                    <motion.li
                      animate={{
                        color: ['rgba(255, 255, 255, 0.7)', 'rgba(56, 189, 248, 0.9)', 'rgba(255, 255, 255, 0.7)'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      LeetCode rating: 1518
                    </motion.li>
                    <motion.li
                      animate={{
                        color: ['rgba(255, 255, 255, 0.7)', 'rgba(56, 189, 248, 0.9)', 'rgba(255, 255, 255, 0.7)'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.3,
                      }}
                    >
                      CodeChef: 2★ (rating ~1482)
                    </motion.li>
                  </ul>
                </motion.div>
              </div>
            </Card>
          </FloatingElement>
        </motion.div>
      </motion.div>
    </section>
  )
}
