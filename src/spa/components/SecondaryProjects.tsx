import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Code2, ChevronRight } from 'lucide-react';
import { useHeroHook } from '../hooks/useHeroHook';
import { useProjectsHook } from '../hooks/useProjectsHook';
import { useLanguage } from '@/core/context/LanguageContext';
import { SecondaryProjectCard } from '../projects/SecondaryProjectCard';

export const SecondaryProjects = () => {
  const isSpanish = useLanguage().language === 'ES';
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
            <span className="text-sm text-blue-400 font-medium">
              {isSpanish ? 'Más Proyectos' : 'More Projects'}
            </span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {isSpanish ? 'Otros Trabajos' : 'Other Works'}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 mt-2">
              {isSpanish ? 'Destacados' : 'Featured'}
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {isSpanish ? 'Explora más proyectos que demuestran mi versatilidad en desarrollo web, desde landing pages hasta aplicaciones completas.' : 'Explore more projects that showcase my versatility in web development, from landing pages to full applications.'}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {secondaryProjects.map((project, index) => (
                <SecondaryProjectCard 
                  index={index} 
                  project={project}
                  setHoveredProject={setHoveredProject}
                  isSpanish={isSpanish}
                />
            ))}
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
              <Github /> {isSpanish ? 'Ver más en GitHub' : 'View more on GitHub'}
            </span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};