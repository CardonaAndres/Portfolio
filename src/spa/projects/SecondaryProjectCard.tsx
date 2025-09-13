import { motion } from "framer-motion";
import type { ProjectSecondary } from "../assets/ts/types";
import { ExternalLink, Github } from "lucide-react";
import { getColorClasses } from "../assets/ts/styles";

interface Props {
  index: number;
  project: ProjectSecondary;
  setHoveredProject: (value: number | null) => void;
  isSpanish: boolean;
}

export const SecondaryProjectCard = ({ index, project, setHoveredProject, isSpanish }: Props) => {
  const colorClasses = getColorClasses(project.color);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
      className="group relative h-full"
    >
      <div
        className={`relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl rounded-xl overflow-hidden border border-white/10 hover:${colorClasses.border} transition-all duration-300 h-full flex flex-col shadow-lg hover:${colorClasses.shadow}`}
      >
        {/* Project Image - Fixed height */}
        <div className="relative overflow-hidden rounded-t-xl h-48 flex-shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain bg-gray-900/50 transition-none"
          />
        </div>

        {/* Content - Flexible height */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Title - Fixed space */}
          <div className="mb-3">
            <h3
              className={`text-xl font-semibold text-center text-white ${colorClasses.hoverText} transition-colors leading-tight`}
            >
              {project.title}
            </h3>
          </div>

          {/* Description - Flexible space */}
          <div className="flex-1 mb-4 justify-center">
            <p className="text-center text-gray-400 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technologies - Fixed space */}
          <div className="mb-4">
            <div className="flex flex-wrap justify-center gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`px-2 py-1 text-xs rounded-md ${colorClasses.techBg} whitespace-nowrap`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons - Fixed at bottom */}
          <div className="flex items-center space-x-3 mt-auto">
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => console.log(`Demo de ${project.title}`)}
                className={`flex-1 px-4 py-2 ${colorClasses.buttonPrimary} rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer w-full`}
              >
                <ExternalLink className="w-4 h-4" />
                <span>{isSpanish ? "Explorar" : "Explore"}</span>
              </motion.a>
            )}

            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 bg-white/10 ${
                  colorClasses.buttonSecondary
                } border border-white/20 rounded-lg text-white text-sm font-medium transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer ${
                  project.demo ? "" : "w-full"
                }`}
              >
                <Github className="w-4 h-4" />
                <span>{isSpanish ? "Código" : "Code"}</span>
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
