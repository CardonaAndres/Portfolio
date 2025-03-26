import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useProjects } from "../../hooks/useProjects";
import { useLenguage } from "../../context/LanguageContext";
import { ProjectCard } from "./ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const ProjectsCarousel = () => {
  const { texts } = useLenguage();
  const { projects } = useProjects();
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextProject, 5000);
    return () => clearInterval(intervalId);
  }, [projects.length]);

  return (
    <div className="relative w-full max-w-4xl mx-auto sm:px-6 lg:px-8 group">
      <div className="text-center mb-4">
        <h3 className="text-4xl font-bold text-blue-900 dark:text-white">
          {texts.projects}
        </h3>
      </div>

      <div className="relative w-full">
        <button onClick={prevProject} className="absolute left-[-18px] top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center backdrop-blur-md shadow-lg rounded-full border-2 border-blue-900 transition-all duration-300 z-20 bg-blue-700/70" aria-label="Previous project"
        >
          <ChevronLeft className="text-blue-900 dark:text-white" size={24} />
        </button>

        <button onClick={nextProject} className="absolute right-[-18px] top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center backdrop-blur-md shadow-lg rounded-full border-2 border-blue-900 transition-all duration-300 z-20 bg-blue-700/70" 
        >
          <ChevronRight className="text-blue-900 dark:text-white" size={24} />
        </button>

        <motion.div key={currentProject} initial={{ opacity: 0.8, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2, ease: "easeInOut" }}
          className="w-full max-w-xl mx-auto shadow-xl rounded-lg overflow-hidden relative z-10"
        >
          <ProjectCard project={projects[currentProject]} />
        </motion.div>
      </div>

      <div className="flex justify-center mt-6 space-x-3">
        {projects.map((_, index) => (
          <button key={index} aria-label="Project indicator"
            onClick={() => setCurrentProject(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentProject === index
                ? "bg-blue-900 dark:bg-white scale-125"
                : "bg-blue-200 dark:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
};