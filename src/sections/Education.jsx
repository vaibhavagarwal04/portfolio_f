import { motion } from 'framer-motion'
import { Section } from '../components/layout/Section'
import { Card } from '../components/ui/Card'
import { MetaRow } from '../components/ui/MetaRow'
import { Reveal } from '../components/ui/Reveal'

export function EducationSection(props) {
  const { resume } = props

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <Section id="education" title="Education" subtitle="Academic background and qualifications.">
      <motion.div
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {resume.education.map((e) => (
          <motion.div key={`${e.title}-${e.dates}`} variants={itemVariants}>
            <Reveal>
              <Card>
                <motion.div
                  className="flex items-start justify-between gap-4"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex-1">
                    <div className="text-lg font-bold text-white">{e.title}</div>
                    <div className="mt-2 text-sm text-white/60 font-medium">{e.institution}</div>
                  </div>
                  <div className="shrink-0 text-right text-sm font-semibold text-sky-300 whitespace-nowrap">
                    {e.dates}
                  </div>
                </motion.div>
                <div className="mt-5 space-y-3 text-sm">
                  <MetaRow left="Score" right={e.score} />
                  <MetaRow left="Location" right={e.location} />
                </div>
              </Card>
            </Reveal>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
