import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLenguage } from "../../context/LanguageContext";

export const ProjectCard = ({ project }) => {

  const { texts } = useLenguage();
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }} className="bg-white dark:bg-blue-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 py-4 mx-1">
        <div className="flex flex-col md:flex-row h-full">
            <div className="md:w-2/5 p-4">
                <div className="relative rounded-lg overflow-hidden h-48 md:h-full">
                    <motion.img whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}
                        src={project.image} alt={project.title}
                        className="w-full h-full object-contain rounded-lg" loading="lazy"
                    />
                </div>
            </div>
            <div className="md:w-3/5 p-6 flex flex-col justify-between">
                <div className="space-y-4">
                    <div>
                        <span className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {project.title}
                        </span>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                            {project.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                            <span key={index} className="px-2.5 py-1 bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-200 text-sm font-medium rounded-md">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <motion.a href={project.link} target="_blank" rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm group"
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.98 }}>
                    {texts.viewMore}
                    <ExternalLink className="w-4 h-4 transition-transform group-hover:rotate-45" />
                </motion.a>
            </div>
        </div>
    </motion.div>
);
};
  