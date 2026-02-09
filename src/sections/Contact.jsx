import { motion } from 'framer-motion'
import { Section } from '../components/layout/Section'
import { Card } from '../components/ui/Card'
import { PillLink } from '../components/ui/PillLink'
import { Reveal } from '../components/ui/Reveal'

export function ContactSection(props) {
  const { resume } = props

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <Section id="contact" title="Let's Connect" subtitle="Feel free to reach out anytime.">
      <motion.div
        className="grid gap-6 sm:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <Reveal>
            <Card>
              <div className="text-lg font-bold text-white">Get in touch</div>
              <div className="mt-6 space-y-4 text-sm">
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <div className="text-white/50 font-medium mb-2">Email</div>
                  <motion.a
                    className="inline-block font-semibold text-sky-300 hover:text-sky-200 transition-colors"
                    href={`mailto:${resume.email}`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {resume.email}
                  </motion.a>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <div className="text-white/50 font-medium mb-2">Phone</div>
                  <motion.a
                    className="inline-block font-semibold text-sky-300 hover:text-sky-200 transition-colors"
                    href={`tel:${resume.phone}`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {resume.phone}
                  </motion.a>
                </motion.div>
              </div>
            </Card>
          </Reveal>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Reveal>
            <Card>
              <div className="text-lg font-bold text-white">Profiles</div>
              <motion.div
                className="mt-6 flex flex-wrap gap-3"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.08,
                      delayChildren: 0.2,
                    },
                  },
                }}
              >
                {resume.links.map((l) => (
                  <motion.div
                    key={`contact-${l.id}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <PillLink label={l.label} href={l.href} title={l.description} />
                  </motion.div>
                ))}
              </motion.div>
            </Card>
          </Reveal>
        </motion.div>
      </motion.div>
    </Section>
  )
}
