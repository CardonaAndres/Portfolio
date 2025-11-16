import { useState, useMemo, useCallback, memo } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Calendar, ArrowRight, MousePointerClick, Zap, Sparkles } from 'lucide-react';
import { InfoModal } from "./InfoModal";
import type { Project } from "../assets/ts/types";

interface Props {
  projects: Project[];
  language: string;
}

// Componente de partículas optimizado
const ParticleEffect = memo(() => {
  return (
    <>
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white"
          initial={{ 
            opacity: 0,
            x: `${Math.random() * 100}%`,
            y: '100%'
          }}
          animate={{ 
            opacity: [0, 1, 0],
            y: '-20%',
            x: `${Math.random() * 100}%`
          }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.2
          }}
        />
      ))}
    </>
  );
});

ParticleEffect.displayName = 'ParticleEffect';

// Componente de tarjeta de proyecto optimizado
const ProjectCard = memo(({ 
  project, 
  index, 
  gridClass,
  isLarge,
  texts,
  onProjectSelect
}: { 
  project: Project;
  index: number;
  gridClass: string;
  isLarge: boolean;
  texts: {
    techStack: string;
    viewProject: string;
    viewCode: string;
    openModal: string;
    features: string;
    impact: string;
    description: string;
    clickOrHover: string;
  };
  onProjectSelect: (project: Project) => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Memoizar el color extraído
  const extractedColor = useMemo(() => {
    if (project.color.includes('from-blue')) return '#3b82f6';
    if (project.color.includes('from-purple')) return '#a855f7';
    return '#10b981';
  }, [project.color]);

  const borderGradients = useMemo(() => [
    `linear-gradient(0deg, transparent, ${extractedColor})`,
    `linear-gradient(90deg, transparent, ${extractedColor})`,
    `linear-gradient(180deg, transparent, ${extractedColor})`,
    `linear-gradient(270deg, transparent, ${extractedColor})`,
    `linear-gradient(360deg, transparent, ${extractedColor})`
  ], [extractedColor]);

  const radialGradients = useMemo(() => {
    const colorWithAlpha = project.color.includes('from-blue') 
      ? 'rgba(59, 130, 246, 0.3)' 
      : project.color.includes('from-purple') 
      ? 'rgba(168, 85, 247, 0.3)' 
      : 'rgba(16, 185, 129, 0.3)';
    
    return [
      `radial-gradient(circle at 0% 0%, ${colorWithAlpha} 0%, transparent 50%)`,
      `radial-gradient(circle at 100% 0%, ${colorWithAlpha} 0%, transparent 50%)`,
      `radial-gradient(circle at 100% 100%, ${colorWithAlpha} 0%, transparent 50%)`,
      `radial-gradient(circle at 0% 100%, ${colorWithAlpha} 0%, transparent 50%)`,
      `radial-gradient(circle at 0% 0%, ${colorWithAlpha} 0%, transparent 50%)`
    ];
  }, [project.color]);

  const handleClick = useCallback(() => {
    onProjectSelect(project);
  }, [project, onProjectSelect]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const maxTechs = isLarge ? 5 : 4;
  const visibleTechs = project.technologies.slice(0, maxTechs);
  const remainingTechs = project.technologies.length - maxTechs;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        delay: index * 0.06,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }}
      className={`${gridClass} group relative`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="relative h-full bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 rounded-2xl overflow-hidden">
        
        {/* Borde brillante animado - Solo cuando hover */}
        {isHovered && (
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <motion.div
              className="absolute inset-0"
              animate={{
                background: borderGradients
              }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ padding: '2px' }}
            />
            <div className="absolute inset-[2px] bg-gray-900 rounded-2xl" />
          </div>
        )}

        <div className="relative">
          <div className="relative w-full overflow-hidden" style={{ minHeight: isLarge ? '400px' : '320px' }}>
            
            {/* Animated background gradient - Solo cuando hover */}
            {isHovered && (
              <motion.div 
                className="absolute inset-0"
                animate={{
                  background: radialGradients
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            )}
            
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40 mix-blend-overlay group-hover:opacity-60 transition-opacity duration-500`} />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/90 to-gray-900/40" />
            
            {/* Partículas - Solo cuando hover */}
            <AnimatePresence>
              {isHovered && <ParticleEffect />}
            </AnimatePresence>
            
            {/* Imagen principal */}
            <div className="absolute inset-0 flex items-center justify-center py-8 px-6">
              <motion.div 
                className="relative w-full h-full flex items-center justify-center"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5
                }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ perspective: 1000 }}
              >
                <img
                  src={project.images_urls[0]}
                  alt={project.title}
                  className="max-w-full max-h-full transition-all duration-700 rounded-lg"
                  loading="lazy"
                  style={{
                    filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.7)) drop-shadow(0 15px 30px rgba(0, 0, 0, 0.5))',
                    transform: isHovered ? 'translateZ(20px)' : 'translateZ(0)',
                  }}
                />
                
                {isHovered && (
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-r ${project.color} blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700`}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </motion.div>
            </div>

            {/* Badge */}
            <motion.div 
              className="absolute top-4 left-4 z-10"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              <motion.div 
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r ${project.color} backdrop-blur-xl border border-white/30 shadow-2xl`}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">{project.role}</span>
              </motion.div>
            </motion.div>

            {/* Hint interactivo */}
            <AnimatePresence>
              {isHovered && (
                <motion.div 
                  className="hidden md:block absolute top-4 right-4 z-10"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 20, opacity: 0 }}
                >
                  <motion.div 
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-black/95 backdrop-blur-xl border border-blue-400/60 shadow-2xl"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      borderColor: ['rgba(96, 165, 250, 0.6)', 'rgba(96, 165, 250, 1)', 'rgba(96, 165, 250, 0.6)']
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <MousePointerClick className="w-3.5 h-3.5 text-blue-400" />
                    <span className="text-xs text-blue-400 font-semibold">{texts.clickOrHover}</span>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Info Card */}
          <div className="p-5 space-y-4 relative z-10">
            <div className="space-y-3">
              <h3 
                className={`${isLarge ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'} font-bold text-transparent bg-clip-text bg-gradient-to-r ${project.color} line-clamp-1`}
              >
                {project.title}
              </h3>
              <p className={`text-sm text-gray-400 ${isLarge ? 'line-clamp-2' : 'line-clamp-1'}`}>
                {project.subtitle}
              </p>
            </div>

            {/* Tecnologías */}
            <div className="flex flex-wrap gap-1.5">
              {visibleTechs.map((tech) => (
                <span 
                  key={tech}
                  className="px-2.5 py-1 text-xs font-medium rounded-lg bg-gray-800/90 border border-gray-700 text-gray-300 hover:border-gray-600 hover:bg-gray-700/90 transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
              {remainingTechs > 0 && (
                <span 
                  className={`px-2.5 py-1 text-xs font-bold rounded-lg bg-gradient-to-r ${project.color} text-white shadow-lg`}
                >
                  +{remainingTechs}
                </span>
              )}
            </div>

            {/* Meta info */}
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{project.duration}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" />
                <span>{project.teamSize}</span>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-gradient-to-r ${project.color} text-white font-bold shadow-2xl transition-all duration-300 md:opacity-0 md:group-hover:opacity-100 relative overflow-hidden`}
            >
              {isHovered && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
                />
              )}
              
              <Zap className="w-4 h-4 relative z-10" />
              <span className="relative z-10">{texts.openModal}</span>
              <ArrowRight className="w-4 h-4 relative z-10" />
            </motion.button>
          </div>
        </div>

        {/* Glow effects - Solo cuando hover */}
        {isHovered && (
          <>
            <motion.div 
              className={`absolute -bottom-24 -right-24 w-48 h-48 bg-gradient-to-br ${project.color} blur-3xl pointer-events-none`}
              animate={{
                opacity: [0, 0.6, 0],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className={`absolute -top-24 -left-24 w-48 h-48 bg-gradient-to-br ${project.color} blur-3xl pointer-events-none`}
              animate={{
                opacity: [0, 0.4, 0],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </>
        )}
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export const ProjectsGrid = ({ projects, language }: Props) => {
  const isSpanish = language === 'ES';
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const texts = useMemo(() => ({
    techStack: isSpanish ? 'Stack Tecnológico' : 'Tech Stack',
    viewProject: isSpanish ? 'Ver Proyecto' : 'View Project',
    viewCode: isSpanish ? 'Ver Código' : 'View Code',
    openModal: isSpanish ? 'Ver detalles' : 'View details',
    features: isSpanish ? 'Características' : 'Features',
    impact: isSpanish ? 'Impacto' : 'Impact',
    description: isSpanish ? 'Descripción' : 'Description',
    clickOrHover: isSpanish ? 'Haz click para ver más' : 'Click to see more'
  }), [isSpanish]);

  const closeModal = useCallback(() => {
    setSelectedProject(null);
    setSelectedImage(0);
  }, []);

  const handleProjectSelect = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  // Memoizar el patrón de grid
  const gridPatterns = useMemo(() => [
    "md:col-span-7",
    "md:col-span-5",
    "md:col-span-6",
    "md:col-span-6",
    "md:col-span-5",
    "md:col-span-7",
    "md:col-span-8",
    "md:col-span-4",
  ], []);

  const getGridClass = useCallback((index: number) => {
    return gridPatterns[index % gridPatterns.length];
  }, [gridPatterns]);

  return (
    <>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {projects.map((project, index) => {
          const gridClass = getGridClass(index);
          const isLarge = gridClass.includes("col-span-7") || gridClass.includes("col-span-8");
          
          return (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              gridClass={gridClass}
              isLarge={isLarge}
              texts={texts}
              onProjectSelect={handleProjectSelect}
            />
          );
        })}
      </motion.div>

      <InfoModal 
        closeModal={closeModal}
        selectedProject={selectedProject}
        setSelectedImage={setSelectedImage}
        selectedImage={selectedImage}
        texts={texts}
      />
    </>
  );
};