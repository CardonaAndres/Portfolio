import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, ArrowLeft, ArrowRight } from 'lucide-react';
import { ProjectCard } from '../projects/ProjectCard';
import { useProjectsHook } from '../hooks/useProjectsHook';

export const ProjectsSection = () => {
  const { projects } = useProjectsHook();
  const [activeProject, setActiveProject] = useState(0);
  const [_, setHoveredTech] = useState<null | string>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const nextProject = () => setActiveProject((prev) => (prev + 1) % projects.length);
  const prevProject = () => setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  
  useEffect(() => {
    const handleKeyPress = (e : any) => {
      if (e.key === 'ArrowRight') nextProject();
      if (e.key === 'ArrowLeft') prevProject();
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Detectar si es desktop
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768 && !('ontouchstart' in window));
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const currentProject = projects[activeProject];

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
            <span className="text-sm text-blue-400 font-medium">Proyectos Destacados</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Mi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Trabajo</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explora mis proyectos más recientes y descubre cómo transformo ideas en soluciones tecnológicas innovadoras
          </p>
        </motion.div>

        {/* Keyboard Navigation Hint - Solo Desktop */}
        {isDesktop && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center mb-8"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center space-x-3 px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm"
            >
              <span className="text-gray-400 text-sm">Puedes usar las teclas para navegar:</span>
              <div className="flex items-center space-x-2">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center space-x-1 px-2 py-1 bg-gray-700/50 rounded border border-gray-600/50"
                >
                  <ArrowLeft className="w-3 h-3 text-gray-300" />
                  <span className="text-xs text-gray-300">←</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center space-x-1 px-2 py-1 bg-gray-700/50 rounded border border-gray-600/50"
                >
                  <ArrowRight className="w-3 h-3 text-gray-300" />
                  <span className="text-xs text-gray-300">→</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Main Project Display */}
        <ProjectCard 
            setHoveredTech={setHoveredTech} 
            currentProject={currentProject}
            activeProject={activeProject}
            projects={projects}
        />

        <div className="absolute -bottom-15 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevProject}
            className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>

          {/* Progress Indicators */}
          <div className="flex space-x-2">
            {projects.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                aria-label={`Select Project ${index + 1}`}
                onClick={() => setActiveProject(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeProject 
                    ? 'w-8 bg-blue-500' 
                    : 'w-2 bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextProject}
            className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};