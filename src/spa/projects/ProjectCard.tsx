import { useEffect, useState, useCallback, useMemo } from "react";
import { useLanguage } from "@/core/context/LanguageContext";
import type { Project } from "../assets/ts/types";
import { AnimatePresence, motion } from "framer-motion";
import { FeatureItem } from "./FeatureItem";
import { InfoModal } from "./InfoModal";
import { TechBadge } from "./TechBadge";
import { ExternalLink, Users, Calendar, Briefcase, Target, Code2, Sparkles, Info, Github } from 'lucide-react';

interface Props {
  currentProject: Project;
  activeProject: number;
  setHoveredTech: (value: string | null) => void;
  projects: Project[];
}

 
export const ProjectCard = ({ currentProject, activeProject, setHoveredTech }: Props) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [_, setIsImageHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { language } = useLanguage();
  const isSpanish = language === 'ES';
  const texts = useMemo(() => ({
    moreInfo: isSpanish ? 'Más info' : 'More info',
    hoverHint: isSpanish ? 'Pasa el cursor para más detalles' : 'Hover for more details',
    techStack: isSpanish ? 'Stack Tecnológico' : 'Tech Stack',
    exploreProject: isSpanish ? 'Explorar Proyecto' : 'View Project',
    projectImpact: isSpanish ? 'Impacto del Proyecto' : 'Project Impact',
    keyFeatures: isSpanish ? 'Características Principales' : 'Key Features',
    tapForInfo: isSpanish ? 'Toca para más info' : 'Tap for more info',
    viewCode: isSpanish ? 'Ver Código' : 'View Code'
  }), [isSpanish]);

  // Optimizar detección de mobile con debounce
  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
  }, []);

  useEffect(() => {
    checkMobile();
    let timeoutId: NodeJS.Timeout;
    
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, 150); // Debounce
    };
    
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [checkMobile]);

  // Handlers optimizados
  const handleDescriptionInteraction = useCallback(() => {
    setShowModal(true);
  }, []);

  const handleImageHoverStart = useCallback(() => {
    if (!isMobile) {
      setIsImageHovered(true);
    }
  }, [isMobile]);

  const handleImageHoverEnd = useCallback(() => {
    if (!isMobile) {
      setIsImageHovered(false);
    }
  }, [isMobile]);

  const handleImageTap = useCallback(() => {
    setShowModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, []);

  // Variantes de animación optimizadas
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" as const }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" as const }
    }
  };
 
  return (
    <div className="relative max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        {/* Left: Project Info */}
        <motion.div
          key={`${currentProject.id}-info`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 lg:order-1"
        >
          {/* Project Number */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center space-x-4 mb-6"
          >
            <span className="text-6xl lg:text-8xl font-bold text-gray-800 select-none">
              0{activeProject + 1}
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-800 to-transparent" />
          </motion.div>
 
          {/* Project Title & Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.3 }}
            className="mb-6"
          >
            <h3 className={`text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${currentProject.color} mb-2`}>
              {currentProject.title}
            </h3>
            <p className="text-xl text-gray-400">{currentProject.subtitle}</p>
          </motion.div>
 
          {/* Role & Duration Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="flex flex-wrap gap-3 mb-6"
          >
            <div className='flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20'>
              <Briefcase className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400 font-medium">{currentProject.role}</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-400">{currentProject.duration}</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <Users className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-400">{currentProject.teamSize}</span>
            </div>
          </motion.div>
 
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.3 }}
            className="mb-6"
          >
            <motion.p
              className="text-gray-300 leading-relaxed cursor-pointer relative"
              onClick={handleDescriptionInteraction}
            >
              {currentProject.description}
              
              {/* Indicator de más info */}
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-2 text-blue-400 text-sm select-none hover:text-blue-300 transition-colors"
              >
                {isMobile ? `${texts.tapForInfo} 👆` : `${texts.moreInfo} 💬`}
              </motion.span>
            </motion.p>
          </motion.div>
 
          {/* Technologies */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }} 
            className="mb-8"
          >
            <h4 className="text-sm text-gray-400 mb-3 flex items-center space-x-2">
              <Code2 className="w-4 h-4" />
              <span>{texts.techStack}</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {currentProject.technologies.map((tech, index) => (
                <TechBadge 
                  key={tech} 
                  tech={tech} 
                  index={index} 
                  setHoveredTech={setHoveredTech} 
                />
              ))}
            </div>
          </motion.div>
 
          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.3 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {currentProject.url && (
              <motion.a
                href={currentProject.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden flex items-center space-x-2 px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 active:scale-95"
              >
                <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                <span>{texts.exploreProject}</span>
              </motion.a>
            )}
            
            {currentProject.github_url && (
              <motion.a
                href={currentProject.github_url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden flex items-center space-x-2 px-6 py-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-200 active:scale-95 border border-gray-700"
              >
                <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
                <span>{texts.viewCode}</span>
              </motion.a>
            )}
          </motion.div>
        </motion.div>
 
        {/* Right: Visual Display */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="order-1 lg:order-2 relative"
        >
          {/* 3D Card Container */}
          <div className="relative w-full mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentProject.id}-card`}
                initial={{ rotateY: -90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: 90, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative"
                style={{ perspective: 1000 }}
              >
                {/* Project Card */}
                <motion.div
                  whileHover={!isMobile ? { 
                    rotateY: 3, 
                    rotateX: -2, 
                    scale: 1.01,
                    transition: { type: "spring", stiffness: 400, damping: 25 }
                  } : {}}
                  whileTap={isMobile ? { scale: 0.98 } : {}}
                  className={`relative rounded-2xl bg-gradient-to-br ${currentProject.color} p-[2px] overflow-hidden shadow-2xl ${isMobile ? 'cursor-pointer active:scale-98' : ''}`}
                  onClick={handleImageTap}
                >
                  <div className="relative rounded-2xl bg-gradient-to-br from-gray-900/95 to-black/95 overflow-hidden backdrop-blur-xl">
                    {/* Project Images Gallery */}
                    {currentProject.images_urls.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="relative group"
                        onHoverStart={handleImageHoverStart}
                        onHoverEnd={handleImageHoverEnd}
                      >
                        {/* Main Image */}
                        <div className="relative w-full bg-gray-900">
                          <img
                            src={currentProject.images_urls[0]}
                            alt={`${currentProject.title} screenshot`}
                            className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                            loading="lazy"
                            decoding="async"
                          />
                          
                          {/* Click hint - Visible para todos */}
                          <motion.div
                            initial={{ opacity: 0.8 }}
                            animate={{ 
                              opacity: [0.8, 0.4, 0.8],
                              scale: [1, 1.05, 1]
                            }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-2 bg-black/70 backdrop-blur-sm rounded-full text-xs text-white/90 flex items-center space-x-2 pointer-events-none"
                          >
                            <Info className="w-3 h-3" />
                            <span>{isMobile ? texts.tapForInfo : isSpanish ? 'Haz clic para más detalles' : 'Click for details'}</span>
                          </motion.div>
                          
                          {/* Subtle gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
                        </div>
                      </motion.div>
                    )}

                    {/* Decorative elements optimizados */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl opacity-50" />
                    <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl opacity-30" />
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Impact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="my-6 p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
          >
            <div className="flex items-start space-x-3">
              <Target className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-blue-400 mb-1">
                  {texts.projectImpact}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {currentProject.impact}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.3 }}
            className="my-6"
          >
            <h4 className="text-sm text-gray-400 mb-3 flex items-center space-x-2">
              <Sparkles className="w-4 h-4" />
              <span>{texts.keyFeatures}</span>
            </h4>
            <div className="space-y-2">
              {currentProject.features.map((feature, index) => (
                <FeatureItem key={`${feature}-${index}`} feature={feature} index={index} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Modal Universal */}
      <InfoModal
        isVisible={showModal}
        onClose={closeModal}
        longDescription={currentProject.longDescription}
        isSpanish={isSpanish}
        isMobile={isMobile}
      />
    </div>
  );
};