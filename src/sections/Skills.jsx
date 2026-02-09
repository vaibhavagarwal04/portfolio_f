import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Section } from '../components/layout/Section'
import { Card } from '../components/ui/Card'
import { cn } from '../lib/cn'

const categories = [
  'Languages',
  'Frameworks & Libraries',
  'Database & Backend',
  'Core Subjects',
  'Developer Tools',
  'Soft Skills',
]

function getSkills(resume, category) {
  switch (category) {
    case 'Languages':
      return resume.skills.languages
    case 'Core Subjects':
      return resume.skills.coreSubjects
    case 'Frameworks & Libraries':
      return resume.skills.frameworksAndLibraries
    case 'Database & Backend':
      return resume.skills.databaseAndBackend
    case 'Developer Tools':
      return resume.skills.developerTools
    case 'Soft Skills':
      return resume.skills.softSkills
    default:
      return []
  }
}

export function SkillsSection(props) {
  const { resume } = props
  const [category, setCategory] = useState('Frameworks & Libraries')
  const [query, setQuery] = useState('')

  const skills = useMemo(() => {
    const list = getSkills(resume, category)
    const q = query.trim().toLowerCase()
    if (!q) return list
    return list.filter((s) => s.toLowerCase().includes(q))
  }, [resume, category, query])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  }

  return (
    <Section id="skills" title="Technical Skills" subtitle="Languages, frameworks, and tools I use.">
      <div className="grid gap-6 lg:grid-cols-[1fr_2fr]">
        <Card>
          <div className="text-lg font-bold text-white mb-6">Filter Skills</div>

          <div className="mb-6">
            <label className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-3 block">Search</label>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. React, SQL, OS"
              className={cn(
                'w-full rounded-lg border-2 border-white/10 bg-white/5 px-4 py-3 text-sm text-white font-medium',
                'outline-none placeholder:text-white/35 focus:border-sky-400/50 focus:bg-white/10 transition-all duration-200',
              )}
            />
          </div>

          <div className="mb-4">
            <div className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-4">Category</div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => {
                const active = c === category
                return (
                  <motion.button
                    key={c}
                    onClick={() => setCategory(c)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      'rounded-lg border-2 px-3 py-2 text-xs font-bold transition-all duration-200 uppercase tracking-wide',
                      active
                        ? 'border-sky-400 bg-sky-400/20 text-sky-300 shadow-lg shadow-sky-500/20'
                        : 'border-white/10 bg-white/5 text-white/70 hover:border-sky-400/30 hover:bg-white/10',
                    )}
                  >
                    {c}
                  </motion.button>
                )
              })}
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-baseline justify-between gap-4 mb-6">
            <div className="text-lg font-bold text-white">{category}</div>
            <div className="text-xs font-bold text-sky-400 bg-sky-400/20 px-3 py-1 rounded-full">{skills.length} items</div>
          </div>

          <motion.div
            className="flex flex-wrap gap-3"
            key={category}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {skills.map((s) => (
              <motion.span
                key={s}
                variants={itemVariants}
                whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(56, 189, 248, 0.4)' }}
                className="rounded-lg border-2 border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-semibold text-sky-300 hover:border-sky-400/60 hover:bg-sky-400/20 transition-all duration-200 cursor-pointer"
              >
                {s}
              </motion.span>
            ))}
          </motion.div>
        </Card>
      </div>
    </Section>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
}
