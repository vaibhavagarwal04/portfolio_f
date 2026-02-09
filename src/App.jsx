import { resume } from './resumeData'
import { Container } from './components/layout/Container'
import { Navbar } from './components/layout/Navbar'
import { BackgroundNoise } from './components/layout/BackgroundNoise'
import { CrazyLoader } from './components/ui/CrazyLoader'
import { Hero } from './sections/Hero'
import { EducationSection } from './sections/Education'
import { ProjectsSection } from './sections/Projects'
import { SkillsSection } from './sections/Skills'
import { ContactSection } from './sections/Contact'
import { Footer } from './sections/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#060712] text-white">
      <CrazyLoader />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-128 w-lg rounded-full bg-sky-500/15 blur-3xl" />
        <div className="absolute -right-40 top-24 h-112 w-md rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute left-1/2 top-152 h-120 w-120 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <Navbar name={resume.name} email={resume.email} links={resume.links} />

      <main id="top" className="relative">
        <BackgroundNoise />
        <Container>
          <Hero resume={resume} />
          <EducationSection resume={resume} />
          <ProjectsSection resume={resume} />
          <SkillsSection resume={resume} />

          <ContactSection resume={resume} />
          <Footer resume={resume} />
        </Container>
      </main>
    </div>
  )
}
