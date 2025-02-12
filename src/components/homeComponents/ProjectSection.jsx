import { useState, useEffect } from "react";
import { useLenguage } from "../../context/LanguageContext";
import { useProjects } from "../../hooks/useProjects";
import { ProjectCard } from "../common/ProjectCard";
import { Pagination } from "../common/Pagination";

export const ProjectSection = () => {
  const { texts } = useLenguage();
  const { projects } = useProjects();
  const [currentProject, setCurrentProject] = useState(0);
  const nextProject = () => setCurrentProject((prev) => (prev + 1) % projects.length);
  const prevProject = () =>setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  
  useEffect(() => {
    const intervalId = setInterval(() => { nextProject();}, 10000); // 10 seconds
    return () => clearInterval(intervalId);
  }, [projects.length]); 

  return (
    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold text-blue-900 dark:text-white">
            {texts.projects}
          </h1>
          <p className="text-lg text-blue-800 dark:text-blue-300 mt-2">
            {texts.projectDescription}
          </p>
        </div>
        <ProjectCard project={projects[currentProject]} />
        <Pagination
          currentProject={currentProject}
          totalProjects={projects.length}
          onPrev={prevProject}
          onNext={nextProject}
        />
      </div>
    </section>
  );
};
