import { useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { LevelColors, TechSkill } from "../assets/ts/types";

interface Props {
  programmingLanguages: TechSkill[];
  hoveredSkill: string | null;
  onHover: (categoryTitle: string, skillName: string ) => void;
  onLeave: () => void;
  levelColors: LevelColors;
  isSpanish: boolean;
}

export const ProgrammingLanguagesCarousel = ({ 
  programmingLanguages, 
  hoveredSkill, 
  onHover, 
  onLeave, 
  levelColors,
  isSpanish 
}: Props) => {
  // Para el carrusel infinito en mobile
  const duplicatedLanguages = useMemo(() => {
    // Duplicamos los elementos 3 veces para asegurar el loop infinito
    return [...programmingLanguages, ...programmingLanguages, ...programmingLanguages];
  }, [programmingLanguages]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">
          {isSpanish ? 'Lenguajes de Programación' : 'Programming Languages'}
        </h3>
        <p className="text-gray-400">
          {isSpanish ? 'Tecnologías que utilizo en el desarrollo' : 'Main technologies I use in development'}
        </p>
      </div>

      {/* Desktop: Grid normal - muestra todos */}
      <div className="hidden sm:flex flex-wrap justify-center gap-3">
        {programmingLanguages.map((language, index: number) => (
          <motion.div
            key={language.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onMouseEnter={() => onHover('Languages', language.name)}
            onMouseLeave={onLeave}
            className="relative cursor-pointer group"
          >
            <div className={`relative px-4 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 ${
              hoveredSkill === `Languages-${language.name}` ? 'transform scale-105' : ''
            }`}>
              <div className="flex flex-col items-center space-y-3">
                <div className="relative">
                  <img 
                    src={language.imageUrl}
                    alt={language.name}
                    className="w-12 h-12 object-contain"
                    style={{ 
                      filter: hoveredSkill === `Languages-${language.name}` ? 'brightness(1.2)' : 'brightness(1)'
                    }}
                  />
                </div>
                
                <span className="font-medium text-white text-sm text-center">{language.name}</span>
                
                <span className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${levelColors[language.level]} text-white font-medium`}>
                  {language.level}
                </span>
              </div>
            </div>

            <AnimatePresence>
              {hoveredSkill === `Languages-${language.name}` && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`absolute inset-0 bg-gradient-to-r ${language.color} opacity-20 blur-xl rounded-2xl -z-10`}
                />
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Mobile: Carrusel infinito con desplazamiento constante */}
      <div className="sm:hidden overflow-hidden relative">
        <div className="flex">
          <motion.div
            className="flex gap-3 min-w-max"
            animate={{
              x: [0, -100 * programmingLanguages.length]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: programmingLanguages.length * 2, // 2 segundos por elemento
                ease: "linear"
              }
            }}
          >
            {duplicatedLanguages.map((language, index: number) => (
              <div
                key={`${language.name}-${index}`}
                onTouchStart={() => onHover('Languages', language.name)}
                onTouchEnd={onLeave}
                className="relative flex-shrink-0 w-24"
              >
                <div className="relative px-3 py-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="relative">
                      <img 
                        src={language.imageUrl}
                        alt={language.name}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    
                    <span className="font-medium text-white text-xs text-center leading-tight">{language.name}</span>
                    
                    <span className={`text-xs px-2 py-0.5 rounded-full bg-gradient-to-r ${levelColors[language.level]} text-white font-medium`}>
                      {language.level}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Gradientes para fade effect en los bordes */}
        <div className="absolute left-0 top-0 w-8 h-full bg-gradient-to-r from-gray-900 to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 w-8 h-full bg-gradient-to-l from-gray-900 to-transparent pointer-events-none z-10" />
      </div>
    </motion.div>
  );
};