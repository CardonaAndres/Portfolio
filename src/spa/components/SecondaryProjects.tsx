import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code2, ChevronRight } from 'lucide-react';
import { useHeroHook } from '../hooks/useHeroHook';
import { useProjectsHook } from '../hooks/useProjectsHook';
import { getColorClasses } from '../assets/ts/styles';

export const SecondaryProjects = () => {
  const { socialMediaLinks } = useHeroHook();
  const { secondaryProjects } = useProjectsHook();
  const [_, setHoveredProject] = useState<null | number>(null);

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(10,112,236,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(10,112,236,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-4"
          >
            <Code2 className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">Más Proyectos</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Otros Trabajos
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 mt-2">
              Destacados
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explora más proyectos que demuestran mi versatilidad en desarrollo web, 
            desde landing pages hasta aplicaciones completas
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {secondaryProjects.map((project, index) => {
              const colorClasses = getColorClasses(project.color);
              
              return (
              <motion.div
                key={project.id}
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
                <div className={`relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl rounded-xl overflow-hidden border border-white/10 hover:${colorClasses.border} transition-all duration-300 h-full flex flex-col shadow-lg hover:${colorClasses.shadow}`}>
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
                      <h3 className={`text-xl font-semibold text-white ${colorClasses.hoverText} transition-colors leading-tight`}>
                        {project.title}
                      </h3>
                    </div>

                    {/* Description - Flexible space */}
                    <div className="flex-1 mb-4">
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies - Fixed space */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
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
                      <motion.a href={project.demo} target="_blank"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => console.log(`Demo de ${project.title}`)}
                        className={`flex-1 px-4 py-2 ${colorClasses.buttonPrimary} rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Explorar</span>
                      </motion.a>
                      
                      <motion.a href={project.github} target="_blank"  whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }} className={`px-4 py-2 bg-white/10 ${colorClasses.buttonSecondary} border border-white/20 rounded-lg text-white text-sm font-medium transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer`}
                      >
                        <Github className="w-4 h-4" />
                        <span>Código</span>
                      </motion.a>
                    </div>
                  </div>
                </div>

              </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a href={socialMediaLinks[0].url}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
          >
            <span className='flex items-center gap-2'>
              <Github /> Ver más en GitHub
            </span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};