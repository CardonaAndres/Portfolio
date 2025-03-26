import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLenguage } from "../../context/LanguageContext";

export const ProjectCard = ({ project }) => {
  const { texts, lenguage } = useLenguage();
  
  return (
    <motion.div initial={{ opacity: 0.8 }} animate={{ opacity: 1 }} 
      transition={{ 
        duration: 0.3, 
        ease: "easeInOut" 
      }} className="bg-blue-900 rounded-3xl shadow-2xl overflow-hidden my-1 w-full"
    >
      <div className="w-full flex items-center justify-center px-4 py-6">
        <div className="max-w-5xl w-full rounded-2xl overflow-hidden shadow-lg">
          <img src={project.image} alt={project.title}
            className="w-full h-auto object-contain bg-white" 
            loading="lazy"
            style={{ 
              maxHeight: '480px', 
              objectFit: 'contain', 
              objectPosition: 'center' 
            }}
          />
        </div>
      </div>

      <div className="p-8 space-y-6 text-white">
        <h3 className="text-3xl font-bold mb-4 leading-tight text-white/90">
          {project.title}
        </h3>
        
        <p className="text-white/80 text-base leading-relaxed mb-6">
          {project.description}
        </p>
      
        <div className="mb-10">
          <p className="text-lg font-semibold text-white mb-4">
            { lenguage === 'en' ? 'Technologies' : 'Tecnologías' }
          </p>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag, index) => (
              <motion.span 
                key={index} 
                initial={{ opacity: 0, filter: 'blur(4px)' }}
                animate={{ 
                  opacity: 1, 
                  filter: 'blur(0px)' 
                }} 
                transition={{ 
                  delay: index * 0.05, 
                  duration: 0.3,
                  type: "tween"
                }} 
                className="px-3 py-1.5 bg-white/10 text-white/90 text-sm font-medium rounded-lg flex items-center backdrop-blur-sm"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.3,
            type: "tween"
          }}
          className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-950/20 text-white font-semibold text-sm rounded-xl hover:bg-white/90 hover:text-blue-800 transition-all duration-300"
          whileTap={{ scale: 0.95 }}
        >
          {texts.viewMore}
          <ExternalLink className="w-4 h-4 ml-2 text-whit group-hover:text-blue-800" />
        </motion.a>
      </div>
    </motion.div>
  );
};