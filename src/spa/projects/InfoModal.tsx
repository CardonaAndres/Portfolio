import { AnimatePresence, motion } from "framer-motion";
import { memo, useCallback } from "react";
import { ExternalLink, Users, Calendar, Briefcase, Github, ArrowRight, Sparkles, ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { Project } from "../assets/ts/types";

interface Props {
  selectedProject: Project | null;
  closeModal: () => void;
  setSelectedImage: React.Dispatch<React.SetStateAction<number>>;
  selectedImage: number;
  texts: Record<string, string>;
}

// Componente de badge memoizado
const InfoBadge = memo(({ icon: Icon, text, gradient }: { 
  icon: React.ElementType; 
  text: string; 
  gradient?: string;
  border?: string;
}) => (
  <div className={`flex items-center space-x-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full ${
    gradient 
      ? `bg-gradient-to-r ${gradient} shadow-lg shadow-current/20` 
      : 'bg-gray-800/80 border border-gray-700/50 backdrop-blur-sm'
  }`}>
    <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
    <span className={`text-xs sm:text-sm font-semibold ${gradient ? 'text-white' : 'text-gray-300'}`}>
      {text}
    </span>
  </div>
));

InfoBadge.displayName = 'InfoBadge';

// Componente de thumbnail memoizado
const ImageThumbnail = memo(({ 
  url, 
  index, 
  isSelected, 
  onClick 
}: { 
  url: string; 
  index: number; 
  isSelected: boolean; 
  onClick: () => void;
}) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.08, y: -4 }}
    whileTap={{ scale: 0.95 }}
    className={`relative flex-shrink-0 w-20 h-16 sm:w-32 sm:h-24 rounded-xl sm:rounded-2xl overflow-hidden border-2 sm:border-3 transition-all shadow-lg ${
      isSelected
        ? 'border-blue-500 shadow-blue-500/50 ring-2 ring-blue-500/30'
        : 'border-gray-700/50 opacity-50 hover:opacity-100 hover:border-gray-500'
    }`}
  >
    <img
      src={url}
      alt={`Thumbnail ${index + 1}`}
      className="w-full h-full object-cover"
      loading="lazy"
    />
    {isSelected && (
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
    )}
  </motion.button>
));

ImageThumbnail.displayName = 'ImageThumbnail';

// Componente de feature memoizado
const FeatureItem = memo(({ feature, delay }: { feature: string; delay: number }) => (
  <motion.li
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    className="flex items-start space-x-2 sm:space-x-3 text-gray-300 bg-white/5 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-green-700/30 hover:border-green-600/50 transition-all"
  >
    <span className="text-green-400 mt-0.5 text-lg sm:text-xl flex-shrink-0">✓</span>
    <span className="text-xs sm:text-sm leading-relaxed">{feature}</span>
  </motion.li>
));

FeatureItem.displayName = 'FeatureItem';

// Componente de tech badge memoizado
const TechBadge = memo(({ tech, delay }: { tech: string; delay: number }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay }}
    whileHover={{ scale: 1.08, y: -2 }}
    className="px-3 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-lg sm:rounded-xl bg-white/10 border border-white/20 text-gray-200 hover:bg-white/20 hover:border-white/30 transition-all shadow-lg cursor-default"
  >
    {tech}
  </motion.span>
));

TechBadge.displayName = 'TechBadge';

// Componente de galería de imágenes optimizado
const ImageGallery = memo(({ 
  project, 
  selectedImage, 
  onNext, 
  onPrev, 
  onSelectImage 
}: {
  project: Project;
  selectedImage: number;
  onNext: () => void;
  onPrev: () => void;
  onSelectImage: (index: number) => void;
}) => {
  const hasMultipleImages = project.images_urls.length > 1;

  return (
    <div className="space-y-4 sm:space-y-5">
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-800/50 shadow-2xl">
        {/* Fondo dinámico optimizado */}
        <div className="absolute inset-0">
          <img
            src={project.images_urls[selectedImage]}
            alt=""
            className="w-full h-full object-cover scale-125 blur-3xl opacity-20"
            loading="lazy"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30 mix-blend-soft-light`} />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-gray-900/20" />
        </div>

        {/* Imagen principal */}
        <div className="relative p-3 sm:p-6 md:p-10 lg:p-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex items-center justify-center"
            >
              <img
                src={project.images_urls[selectedImage]}
                alt={`${project.title} - Image ${selectedImage + 1}`}
                className="max-w-full h-auto rounded-xl sm:rounded-2xl shadow-2xl border border-white/10"
                style={{
                  maxHeight: '500px',
                  filter: 'drop-shadow(0 30px 60px rgba(0, 0, 0, 0.6))'
                }}
                loading="lazy"
              />
            </motion.div>
          </AnimatePresence>

          {/* Controles de navegación */}
          {hasMultipleImages && (
            <>
              <motion.button
                onClick={onPrev}
                whileHover={{ scale: 1.1, x: -3 }}
                whileTap={{ scale: 0.95 }}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2 sm:p-4 rounded-full bg-black/90 backdrop-blur-xl border border-white/30 hover:bg-black/95 transition-all shadow-2xl hover:shadow-blue-500/20"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </motion.button>
              
              <motion.button
                onClick={onNext}
                whileHover={{ scale: 1.1, x: 3 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2 sm:p-4 rounded-full bg-black/90 backdrop-blur-xl border border-white/30 hover:bg-black/95 transition-all shadow-2xl hover:shadow-blue-500/20"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </motion.button>

              {/* Indicador de posición */}
              <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-2 sm:space-x-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-black/90 backdrop-blur-xl border border-white/30 shadow-2xl">
                <span className="text-xs sm:text-sm text-white font-semibold">
                  {selectedImage + 1}
                </span>
                <div className="w-1 h-1 rounded-full bg-white/40" />
                <span className="text-xs sm:text-sm text-white/60 font-medium">
                  {project.images_urls.length}
                </span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Thumbnails */}
      {hasMultipleImages && (
        <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 px-1 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
          {project.images_urls.map((url, idx) => (
            <ImageThumbnail
              key={idx}
              url={url}
              index={idx}
              isSelected={selectedImage === idx}
              onClick={() => onSelectImage(idx)}
            />
          ))}
        </div>
      )}
    </div>
  );
});

ImageGallery.displayName = 'ImageGallery';

// Componente principal optimizado
export const InfoModal = memo(({ 
  selectedProject, 
  closeModal, 
  setSelectedImage, 
  selectedImage, 
  texts 
}: Props) => {
  const nextImage = useCallback(() => {
    if (selectedProject) {
      setSelectedImage((prev) => (prev + 1) % selectedProject.images_urls.length);
    }
  }, [selectedProject, setSelectedImage]);

  const prevImage = useCallback(() => {
    if (selectedProject) {
      setSelectedImage((prev) => (prev - 1 + selectedProject.images_urls.length) % selectedProject.images_urls.length);
    }
  }, [selectedProject, setSelectedImage]);

  const handleSelectImage = useCallback((index: number) => {
    setSelectedImage(index);
  }, [setSelectedImage]);

  // Memoizar secciones para evitar re-renders innecesarios
  const hasImpact = selectedProject?.impact;
  const hasFeatures = selectedProject?.features && selectedProject.features.length > 0;
  const hasUrl = selectedProject?.url;
  const hasGithub = selectedProject?.github_url;

  if (!selectedProject) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        onClick={closeModal}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-[95vw] sm:max-w-[90vw] lg:max-w-[85vw] xl:max-w-[1400px] max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 border border-gray-800/50 rounded-2xl sm:rounded-3xl shadow-2xl"
        >
          {/* Botón de cierre mejorado */}
          <motion.button
            onClick={closeModal}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-4 right-4 z-50 p-2 sm:p-3 rounded-full bg-black/90 backdrop-blur-xl border border-white/30 hover:bg-red-600/90 hover:border-red-500 transition-all shadow-2xl"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </motion.button>

          <div className="p-4 sm:p-6 lg:p-8">
            {/* Header */}
            <div className="space-y-3 sm:space-y-4 pb-4 sm:pb-6 border-b border-gray-800/50">
              <div className="flex items-start justify-between gap-3 sm:gap-4 pr-12">
                <div className="flex-1 space-y-2 sm:space-y-3">
                  <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${selectedProject.color} leading-tight`}>
                    {selectedProject.title}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-3xl">
                    {selectedProject.subtitle}
                  </p>
                </div>
              </div>

              {/* Badges de información */}
              <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
                <InfoBadge icon={Briefcase} text={selectedProject.role} gradient={selectedProject.color} />
                <InfoBadge icon={Calendar} text={selectedProject.duration} />
                <InfoBadge icon={Users} text={selectedProject.teamSize} />
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8 mt-6 sm:mt-8">
              {/* Galería de imágenes */}
              {selectedProject.images_urls.length > 0 && (
                <ImageGallery
                  project={selectedProject}
                  selectedImage={selectedImage}
                  onNext={nextImage}
                  onPrev={prevImage}
                  onSelectImage={handleSelectImage}
                />
              )}

              {/* Descripción */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative overflow-hidden bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-gray-700/50 backdrop-blur-xl shadow-xl"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/5 rounded-full blur-3xl" />
                <div className="relative">
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-5">
                    <div className={`p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-gradient-to-br ${selectedProject.color} bg-opacity-20`}>
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-blue-400">{texts.description}</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base whitespace-pre-line">
                    {selectedProject.longDescription}
                  </p>
                </div>
              </motion.div>

              {/* Impacto */}
              {hasImpact && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="relative overflow-hidden bg-gradient-to-br from-purple-900/40 to-purple-950/40 rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-purple-700/50 backdrop-blur-xl shadow-xl"
                >
                  <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-purple-600/10 rounded-full blur-3xl" />
                  <div className="relative">
                    <h4 className="text-lg sm:text-xl font-bold text-purple-400 mb-3 sm:mb-4 flex items-center gap-2">
                      <span className="text-xl sm:text-2xl">📊</span>
                      {texts.impact}
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      {selectedProject.impact}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Features */}
              {hasFeatures && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="relative overflow-hidden bg-gradient-to-br from-green-900/40 to-green-950/40 rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-green-700/50 backdrop-blur-xl shadow-xl"
                >
                  <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-green-600/10 rounded-full blur-3xl" />
                  <div className="relative">
                    <h4 className="text-lg sm:text-xl font-bold text-green-400 mb-4 sm:mb-6 flex items-center gap-2">
                      <span className="text-xl sm:text-2xl">✨</span>
                      {texts.features}
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                      {selectedProject.features!.map((feature, idx) => (
                        <FeatureItem
                          key={idx}
                          feature={feature}
                          delay={0.3 + idx * 0.05}
                        />
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative overflow-hidden bg-gradient-to-br from-cyan-900/40 to-blue-950/40 rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-cyan-700/50 backdrop-blur-xl shadow-xl"
              >
                <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-cyan-600/10 rounded-full blur-3xl" />
                <div className="relative">
                  <h4 className="text-lg sm:text-xl font-bold text-cyan-400 mb-4 sm:mb-6 flex items-center gap-2">
                    <span className="text-xl sm:text-2xl">🛠️</span>
                    {texts.techStack}
                  </h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {selectedProject.technologies.map((tech, idx) => (
                      <TechBadge
                        key={tech}
                        tech={tech}
                        delay={0.4 + idx * 0.03}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Action Buttons */}
              {(hasUrl || hasGithub) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4"
                >
                  {hasUrl && (
                    <motion.a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03, y: -3 }}
                      whileTap={{ scale: 0.97 }}
                      className={`flex-1 min-w-full sm:min-w-[220px] flex items-center justify-center space-x-2 sm:space-x-3 px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r ${selectedProject.color} text-white hover:shadow-2xl hover:shadow-current/40 transition-all text-sm sm:text-base font-bold border border-white/20`}
                    >
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>{texts.viewProject}</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.a>
                  )}

                  {hasGithub && (
                    <motion.a
                      href={selectedProject.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03, y: -3 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex-1 min-w-full sm:min-w-[220px] flex items-center justify-center space-x-2 sm:space-x-3 px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl bg-gray-800 text-white hover:bg-gray-700 hover:shadow-2xl hover:shadow-gray-700/50 transition-all text-sm sm:text-base font-bold border border-gray-700"
                    >
                      <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>{texts.viewCode}</span>
                    </motion.a>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
});

InfoModal.displayName = 'InfoModal';