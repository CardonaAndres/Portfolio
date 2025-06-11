import { SkillsSection } from "../projects/SkillSection";
import { ProjectsCarousel } from "../projects/ProjectsCarousel";
import { Header } from "../projects/Header";

export const ProjectSection = () => {

  return (
    <section className="w-full py-16 transition-colors duration-300 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <Header />

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="w-full h-full">
            <SkillsSection />
          </div>
          <div className="w-full h-full">
            <ProjectsCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};