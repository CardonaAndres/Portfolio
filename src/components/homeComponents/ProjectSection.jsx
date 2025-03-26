import { SkillsSection } from "../projects/SkillSection";
import { ProjectsCarousel } from "../projects/ProjectsCarousel";

export const ProjectSection = () => {
  return (
    <section className="w-full py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        <div className="w-full h-full">
          <SkillsSection />
        </div>
        <div className="w-full h-full">
          <ProjectsCarousel />
        </div>
      </div>
    </section>
  );
};
