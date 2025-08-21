import { useState, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTimelineHook } from '../hooks/useTimelineHook';
import type { ItemType } from '../assets/ts/types';
import { TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/core/context/LanguageContext';
import { TimelineCard } from '../timeline/TimelineCard';

export const Timeline = () => {
  const isSpanish = useLanguage().language === 'ES';
  const { types, timelineData } = useTimelineHook();
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<ItemType | 'all'>('all');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Memoizar datos filtrados para evitar recálculos
  const filteredData = useMemo(() => 
    selectedType === 'all' ? timelineData : timelineData.filter(item => item.type === selectedType),
    [selectedType, timelineData]
  );
  
  // Callbacks optimizados
  const handleItemClick = useCallback((itemId: number) => {
    setActiveItem(prev => prev === itemId ? null : itemId);
  }, []);
  
  const handleTypeSelect = useCallback((typeId: ItemType | 'all') => {
    setSelectedType(typeId);
    setActiveItem(null);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, []);

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  }, []);

  // Detectar si es móvil para renderizado condicional
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Background Effects - Simplificados para móvil */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(10,112,236,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(10,112,236,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Animaciones de fondo solo en desktop */}
        {!isMobile && (
          <>
            <motion.div
              animate={{
                y: [0, -50, 0],
                x: [0, 50, 0],
              }}
              transition={{ duration: 20, repeat: Infinity }}
              className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                y: [0, 50, 0],
                x: [0, -50, 0],
              }}
              transition={{ duration: 25, repeat: Infinity }}
              className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            />
          </>
        )}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-4"
          >
            <TrendingUp className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">{isSpanish ? 'Mi Trayectoria' : 'My Journey'}</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {isSpanish ? 'Experiencia y' : 'Experience and'}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mt-2">
              {isSpanish ? 'Formación' : 'Education'}
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {isSpanish ? 
              'Un recorrido por mi desarrollo profesional, educación y logros más significativos' 
              : 'A journey through my professional development, education, and most significant achievements'
            }
          </p>
        </motion.div>

        {/* Filtros - Optimizados con will-change */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-16"
        >
          <AnimatePresence mode="wait">
            {types.map((type) => (
              <motion.button
                key={type.id}
                whileHover={!isMobile ? { scale: 1.05 } : {}}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleTypeSelect(type.id)}
                className={`group relative flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 will-change-transform ${
                  selectedType === type.id
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {selectedType === type.id && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute inset-0 bg-gradient-to-r ${type.color} rounded-full`}
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
                <type.icon className="w-4 h-4 relative z-10" />
                <span className="font-medium relative z-10">{type.label}</span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Desktop Horizontal Timeline */}
        <div className="relative hidden lg:block">
          {/* Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll('left')}
            className="absolute top-1/2 -translate-y-1/2 z-20 bg-gray-800/80 hover:bg-gray-700/80 backdrop-blur-sm rounded-full p-3 border border-gray-600/50 transition-all duration-300 shadow-lg"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll('right')}
            className="absolute right-1 top-1/2 -translate-y-1/2 z-20 bg-gray-800/80 hover:bg-gray-700/80 backdrop-blur-sm rounded-full p-3 border border-gray-600/50 transition-all duration-300 shadow-lg"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </motion.button>

          {/* Horizontal Timeline */}
          <div 
            ref={scrollContainerRef}
            className="relative overflow-x-auto pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {/* Timeline Line - Horizontal */}
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

            <div className="flex space-x-8 px-16 min-w-max">
              {filteredData.map((item, index) => (
                <motion.div
                  key={`horizontal-${selectedType}-${item.id}`}
                  initial={{ opacity: 0, x: 50, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.9 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    damping: 20,
                    stiffness: 100
                  }}
                  className="relative flex flex-col items-center min-w-80 max-w-80"
                >
                    {/* Timeline Dot */}
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="relative z-10 w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 shadow-lg shadow-blue-400/25 mb-6 cursor-pointer"
                      onClick={() => handleItemClick(item.id)}
                    >
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse opacity-75" />
                    </motion.div>

                    {/* Timeline Card - Horizontal Layout */}
                    <div className="w-full">
                      <TimelineCard
                        item={item}
                        index={index}
                        isActive={activeItem === item.id}
                        onClick={() => handleItemClick(item.id)}
                        horizontal={true}
                      />
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>

          {/* Scroll Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(filteredData.length / 3) }).map((_, index) => (
              <motion.div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-600"
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>

        {/* Mobile Vertical Timeline - Optimizado */}
        <div className="lg:hidden">
          {/* Timeline Line - Vertical */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-blue-500/20" />

          {/* Renderizado optimizado con lazy loading */}
          <AnimatePresence mode="popLayout">
            {filteredData.map((item, index) => (
              <motion.div
                key={`vertical-${selectedType}-${item.id}`}
                initial={false}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <TimelineCard
                  item={item}
                  index={index}
                  isActive={activeItem === item.id}
                  onClick={() => handleItemClick(item.id)}
                  horizontal={false}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};