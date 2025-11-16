import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, MousePointerClick } from 'lucide-react';
import { ProjectsGrid } from '../projects/ProjectsGrid';
import { useProjectsHook } from '../hooks/useProjectsHook';
import { useLanguage } from '@/core/context/LanguageContext';

export const ProjectsSection = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'ES';  
  const { projects } = useProjectsHook();
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-black overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(10,112,236,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(10,112,236,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <motion.div
          style={{ y: parallaxY }}
          className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: parallaxY }}
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">
              {isSpanish ? 'Proyectos Destacados' : 'Featured Projects'}
            </span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            {isSpanish ? 'Mi' : 'My'}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              {isSpanish ? 'Trabajo' : 'Work'}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {isSpanish 
              ? 'Explora mis proyectos más recientes y descubre cómo transformo ideas en soluciones tecnológicas innovadoras' 
              : 'Explore my latest projects and see how I turn ideas into innovative tech solutions'}
          </p>

          {/* Call to Action - Solo Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="hidden lg:flex items-center justify-center gap-2 mt-8"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <MousePointerClick className="w-5 h-5 text-blue-400" />
            </motion.div>
            <p className="text-gray-300 text-base font-medium">
              {isSpanish 
                ? 'Haz clic en cualquier proyecto para descubrir los detalles completos y el impacto generado' 
                : 'Click on any project to discover the full details and impact achieved'}
            </p>
          </motion.div>
        </motion.div>

        {/* Bento Grid de proyectos */}
        <ProjectsGrid projects={projects} language={language} />
      </div>
    </section>
  );
};