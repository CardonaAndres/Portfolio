import { useLanguage } from "@/core/context/LanguageContext";
import type { Project } from "../assets/ts/types";
import { AnimatePresence, motion } from "framer-motion";
import { 
  ExternalLink, 
  Lock, 
  Users, 
  Calendar, 
  Briefcase,
  Target,
  ChevronRight,
  Code2,
  Sparkles
} from 'lucide-react';
import { useEffect, useState } from "react";
 
interface Props {
  currentProject: Project;
  activeProject: number;
  setHoveredTech: (value: string | null) => void;
  projects: Project[];
}
 
export const ProjectCard = ({ currentProject, activeProject, setHoveredTech }: Props) => {
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { language } = useLanguage();
  const isSpanish = language === 'ES';

  // Detectar si es mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
 
  return (
    <div className="relative max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        {/* Left: Project Info */}
        <motion.div
          key={currentProject.id}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          className="order-2 lg:order-1"
        >
          {/* Project Number */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-4 mb-6"
          >
            <span className="text-6xl lg:text-8xl font-bold text-gray-800">
              0{activeProject + 1}
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-800 to-transparent" />
          </motion.div>
 
          {/* Project Title & Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
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
            transition={{ delay: 0.15 }}
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
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <motion.p
              className="text-gray-300 leading-relaxed cursor-pointer relative"
              onMouseEnter={() => !isMobile && setIsInfoVisible(true)}
              onMouseLeave={() => !isMobile && setIsInfoVisible(false)}
              onClick={() => isMobile && setIsInfoVisible(!isInfoVisible)}
            >
              {currentProject.description}
              
              {/* Indicator de más info */}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: isInfoVisible ? 0.7 : 0.3, 
                  scale: isInfoVisible ? 1.1 : 1 
                }}
                transition={{ duration: 0.2 }}
                className="ml-2 text-blue-400 text-sm"
              >
                {isMobile ? '👆' : 'ℹ️'}
              </motion.span>
            </motion.p>

            {/* Tooltip/Modal con información adicional */}
            <AnimatePresence>
              {isInfoVisible && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute z-50 mt-2 p-7 bg-gray-800/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-700 max-w-md"
                  style={{ 
                    left: isMobile ? '50%' : '0',
                    transform: isMobile ? 'translateX(-50%)' : 'none'
                  }}
                >
                  <div className="space-y-3">
                    {/* Título de la info adicional */}
                    <h4 className="text-blue-400 font-semibold text-sm">
                      Información adicional
                    </h4>
                    
                    {/* Descripción larga */}
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {currentProject.longDescription}
                    </p>
                  </div>
                  
                  {/* Flecha del tooltip */}
                  <div className="absolute -top-2 left-4 w-4 h-4 bg-gray-800 rotate-45 border-l border-t border-gray-700"></div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
 
          {/* Technologies */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }} 
            className="mb-8"
          >
            <h4 className="text-sm text-gray-400 mb-3 flex items-center space-x-2">
              <Code2 className="w-4 h-4" />
              <span>{isSpanish ? 'Stack Tecnológico' : 'Tech Stack'}</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {currentProject.technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  onHoverStart={() => setHoveredTech(tech)}
                  onHoverEnd={() => setHoveredTech(null)}
                  className="px-3 py-1.5 text-sm rounded-full bg-white/10 text-white border border-white/20 hover:border-blue-400/50 hover:bg-blue-500/10 transition-all cursor-pointer"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
 
          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {currentProject.url && (
              <motion.a
                href={currentProject.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden flex items-center space-x-2 px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all"
              >
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <span>{isSpanish ? 'Explorar Proyecto' : 'View Project'}</span>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500"
                  whileHover={{ scale: 1.2, rotate: 45 }}
                  transition={{ duration: 0.6 }}
                  style={{ zIndex: -1 }}
                />
              </motion.a>
            )}
          </motion.div>
        </motion.div>
 
        {/* Right: Visual Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="order-1 lg:order-2 relative"
        >
          {/* 3D Card Container */}
          <div className="relative w-full mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.id}
                initial={{ rotateY: -90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: 90, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
                style={{ perspective: 1000 }}
              >
                {/* Project Card */}
                <motion.div
                  whileHover={{ rotateY: 5, rotateX: -3, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`relative rounded-2xl bg-gradient-to-br ${currentProject.color} p-[2px] overflow-hidden shadow-2xl`}
                >
                  <div className="relative rounded-2xl bg-gradient-to-br from-gray-900/95 to-black/95 overflow-hidden backdrop-blur-xl">
                    {/* Project Images Gallery */}
                    {currentProject.images_urls.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                      >
                        {/* Main Image - Aspect ratio para screenshots web */}
                        <div className="relative w-full bg-gray-900">
                          <img
                            src={currentProject.images_urls[0]}
                            alt={`${currentProject.title} screenshot`}
                            className="w-full h-full object-cover object-top"
                            loading="lazy"
                          />
                          
                          {/* Subtle gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                          
                          {/* Hover shine effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0"
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />

                          {/* Long Description Overlay */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileHover={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 opacity-0 group-hover:opacity-100"
                          >
                            <div className="text-center max-w-md">
                              <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileHover={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                                className="text-white text-sm md:text-base leading-relaxed"
                              >
                                {currentProject.longDescription}
                              </motion.p>
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}

                    {/* Decorative elements */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"
                    />
                    <motion.div
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.05, 0.15, 0.05]
                      }}
                      transition={{ duration: 6, repeat: Infinity }}
                      className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl"
                    />
                  </div>
                </motion.div>

                {/* Floating badge */}
                {currentProject.private && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                    className="absolute -top-6 -right-3 px-3 py-1.5 rounded-full bg-gray-800 border border-gray-700 shadow-lg"
                  >
                    <div className="flex items-center space-x-1.5">
                      <Lock className="w-3.5 h-3.5 text-gray-400" />
                      <span className="text-xs text-gray-400 font-medium">Private</span>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Impact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="my-6 p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
          >
            <div className="flex items-start space-x-3">
              <Target className="w-5 h-5 text-blue-400 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-blue-400 mb-1">
                  {isSpanish ? 'Impacto del Proyecto' : 'Project Impact'}
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
            transition={{ delay: 0.35 }}
            className="my-6"
          >
            <h4 className="text-sm text-gray-400 mb-3 flex items-center space-x-2">
              <Sparkles className="w-4 h-4" />
              <span>{isSpanish ? 'Características Principales' : 'Key Features'}</span>
            </h4>
            <div className="space-y-2">
              {currentProject.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className="flex items-center space-x-2 text-gray-300"
                >
                  <ChevronRight className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};