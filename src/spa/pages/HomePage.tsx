import { Navbar } from "@/core/components/navigation/Navbar"
import { Hero } from "../components/Hero"
import { ProjectsSection } from "../components/ProjectsSection"
import { SecondaryProjects } from "../components/SecondaryProjects"
import { Footer } from "@/core/components/footer/Footer"
import { Timeline } from "../components/TimeLine"
import { SkillsShowcase } from "../components/SkillsShowcase"

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20 min-h-screen bg-black">
        <div id="about">
          <Hero />
        </div>
        <div id="projects">
          <ProjectsSection />
          <SecondaryProjects />
        </div>
        <div id="skills">
          <SkillsShowcase />
        </div>
        <div>
            <Timeline />
        </div>
      </div>
      <Footer />
    </>
  )
}

