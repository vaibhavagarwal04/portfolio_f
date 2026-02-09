import { motion } from 'framer-motion'
import { Section } from '../components/layout/Section'
import { Card } from '../components/ui/Card'
import { Reveal } from '../components/ui/Reveal'

export function RolesSection(props) {
  const { resume } = props

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <Section id="roles" title="Positions of Responsibility" subtitle="Leadership and organizational roles.">
      <motion.div
        className="grid gap-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {resume.roles.map((r) => (
          <motion.div key={`${r.title}-${r.dates}`} variants={itemVariants}>
            <Reveal>
              <Card>
                <motion.div
                  className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <div className="text-lg font-bold text-white">{r.title}</div>
                    <div className="mt-2 text-sm text-white/60 font-medium">
                      {r.organization} • {r.location}
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-sky-300 whitespace-nowrap">{r.dates}</div>
                </motion.div>
                <motion.ul
                  className="mt-5 space-y-3 text-sm leading-relaxed text-white/75"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.1,
                      },
                    },
                  }}
                  initial="hidden"
                  animate="visible"
                >
                  {r.bullets.map((b) => (
                    <motion.li
                      key={b}
                      className="flex gap-3"
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: { duration: 0.4 },
                        },
                      }}
                    >
                      <span className="text-sky-400 font-bold shrink-0">→</span>
                      <span>{b}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </Card>
            </Reveal>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
