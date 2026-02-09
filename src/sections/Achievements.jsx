import { Section } from '../components/layout/Section'
import { Card } from '../components/ui/Card'
import { Reveal } from '../components/ui/Reveal'

export function AchievementsSection(props) {
  const { resume } = props

  return (
    <Section id="achievements" title="Achievements" subtitle="Competitive programming and professional accomplishments.">
      <div className="grid gap-5">
        {resume.achievements.map((a) => (
          <Reveal key={`${a.title}-${a.dates}`}>
            <Card>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="text-lg font-bold text-white">{a.title}</div>
                  {a.subtitle ? <div className="mt-2 text-sm text-white/60 font-medium">{a.subtitle}</div> : null}
                </div>
                <div className="text-sm font-semibold text-sky-300 whitespace-nowrap">{a.dates}</div>
              </div>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/75">
                {a.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="text-sky-400 font-bold shrink-0">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
