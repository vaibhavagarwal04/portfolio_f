import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Section } from '../components/layout/Section'
import { Card } from '../components/ui/Card'
import { PillLink } from '../components/ui/PillLink'
import { Reveal } from '../components/ui/Reveal'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

export function ProjectsSection(props) {
  const { resume } = props
  const ref = useRef(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  return (
    <Section id="projects" title="Featured Projects" subtitle="Building modern, responsive web applications.">
      <motion.div
        ref={ref}
        className="grid gap-6 lg:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {resume.projects.filter((p) => p.featured).map((p, index) => (
          <motion.div key={p.id} variants={itemVariants}>
            <Reveal>
              <motion.div
                className="relative rounded-xl overflow-hidden group"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  {/* Animated gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-sky-500/0 via-transparent to-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    animate={{
                      opacity: [0, 0.1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />

                  <motion.div
                    className="flex flex-col gap-4 h-full relative z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <motion.div
                        className="text-lg font-bold text-white relative inline-block"
                        whileHover={{
                          scale: 1.05,
                          color: '#38bdf8',
                        }}
                      >
                        {p.name}
                      </motion.div>
                      <p className="mt-2 text-sm text-white/70">{p.tagline}</p>
                    </motion.div>

                    <motion.div
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2, staggerChildren: 0.05 }}
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.05,
                          },
                        },
                      }}
                    >
                      {p.stack.map((tech) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          whileHover={{
                            scale: 1.15,
                            boxShadow: '0 0 15px rgba(56, 189, 248, 0.5)',
                            background: 'rgba(56, 189, 248, 0.2)',
                          }}
                          className="rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-300 cursor-pointer transition-all"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>

                    {p.bullets && (
                      <motion.ul
                        className="space-y-2 text-sm text-white/70"
                        variants={{
                          hidden: { opacity: 0 },
                          visible: {
                            opacity: 1,
                            transition: {
                              staggerChildren: 0.08,
                            },
                          },
                        }}
                        initial="hidden"
                        whileInView="visible"
                      >
                        {p.bullets.slice(0, 2).map((b) => (
                          <motion.li
                            key={b}
                            className="flex gap-2"
                            variants={{
                              hidden: { opacity: 0, x: -15 },
                              visible: {
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.5 },
                              },
                            }}
                            whileHover={{ x: 5, color: 'rgba(255, 255, 255, 0.9)' }}
                          >
                            <motion.span
                              className="shrink-0 text-sky-400"
                              animate={{
                                x: [0, 3, 0],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: 'easeInOut',
                              }}
                            >
                              →
                            </motion.span>
                            <span>{b}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}

                    <div className="mt-auto flex gap-3 pt-4">
                      {p.links?.demo && (
                        <motion.a
                          href={p.links.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 rounded-lg border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-300 hover:bg-sky-400/20 transition-colors"
                          whileHover={{
                            scale: 1.08,
                            boxShadow: '0 0 20px rgba(56, 189, 248, 0.4)',
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.span
                            animate={{
                              rotate: [0, 15, 0],
                            }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: 'easeInOut',
                            }}
                          >
                            <FiExternalLink className="w-4 h-4" />
                          </motion.span>
                          Demo
                        </motion.a>
                      )}
                      {p.links?.repo && (
                        <motion.a
                          href={p.links.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 hover:border-white/20 hover:bg-white/10 transition-colors"
                          whileHover={{ scale: 1.08 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiGithub className="w-4 h-4" />
                          Code
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                </Card>
              </motion.div>
            </Reveal>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

