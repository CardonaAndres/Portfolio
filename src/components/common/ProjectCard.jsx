import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Code, Calendar, Tag } from "lucide-react";
import { useLenguage } from "../../context/LanguageContext";

export const ProjectCard = ({ project }) => {
  const { texts } = useLenguage();
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, ease: "easeOut" }} 
      className="bg-white dark:bg-blue-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-blue-700 my-6"
    >
      {/* Versión móvil con nuevo diseño */}
      <div className="md:hidden">
        <div className="p-5 pb-0">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
            {project.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-200 text-sm leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>
        </div>
        
        <div className="mx-5 rounded-xl overflow-hidden bg-gray-100 dark:bg-blue-700 p-2 mb-4 shadow-inner">
          <div className="relative rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent z-10" />
            <motion.img 
              src={project.image} 
              alt={project.title}
              className="w-full h-48 object-contain bg-white dark:bg-blue-600 rounded-lg" 
              loading="lazy"
            />
          </div>
        </div>
        
        <div className="px-5 pb-5">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-gray-100 dark:bg-blue-700 text-gray-600 dark:text-gray-200 text-xs font-medium rounded-md flex items-center"
              >
                <Tag className="w-3 h-3 mr-1 text-blue-500 dark:text-blue-300" />
                {tag}
              </span>
            ))}
          </div>
          
          <motion.a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full gap-2 py-3 bg-blue-500 text-white font-medium text-sm rounded-xl group hover:bg-blue-600 transition-all duration-300"
            whileTap={{ scale: 0.97 }}
          >
            {texts.viewMore}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
        </div>
      </div>

      {/* Versión desktop con diseño horizontal mejorado */}
      <div className="hidden md:block h-full">
        <div className="flex flex-row h-full">
          <div className="w-2/5 p-6 flex items-center justify-center">
            <div className="relative rounded-xl overflow-hidden bg-gray-100 dark:bg-blue-700 p-3 w-full h-64 group">
              <motion.img 
                whileHover={{ scale: 1.03 }} 
                transition={{ duration: 0.4 }}
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-contain bg-white dark:bg-blue-600 rounded-lg" 
                loading="lazy"
              />
              <motion.div 
                className="absolute bottom-3 left-3 right-3 bg-white/90 dark:bg-blue-900/90 backdrop-blur-sm p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ y: 10 }}
                whileHover={{ y: 0 }}
              >
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-200">
                  <Code className="w-4 h-4 mr-2 text-blue-500 dark:text-blue-300" />
                  {project.techStack || project.tags.slice(0, 3).join(', ')}
                </div>
              </motion.div>
            </div>
          </div>
          
          <div className="w-3/5 p-6 flex flex-col justify-between">
            <div>    
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-200 text-base leading-relaxed mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1.5 bg-gray-100 dark:bg-blue-700 text-gray-700 dark:text-gray-200 text-sm font-medium rounded-lg flex items-center group hover:bg-gray-200 dark:hover:bg-blue-600 transition-colors duration-200"
                  >
                    <Tag className="w-3.5 h-3.5 mr-1.5 text-blue-500 dark:text-blue-300 group-hover:rotate-12 transition-transform duration-300" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <motion.a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500 text-white font-medium text-sm rounded-xl group hover:bg-blue-600 transition-all duration-300 w-fit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {texts.viewMore}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};