import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTimelineHook } from '../hooks/useTimelineHook';
import type { ItemType } from '../assets/ts/types';
import { TrendingUp } from 'lucide-react';
import { useLanguage } from '@/core/context/LanguageContext';
import { TimelineCard } from '../timeline/TimelineCard';

export const Timeline = () => {
  const isSpanish = useLanguage().language === 'ES';
  const { types, timelineData } = useTimelineHook();
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<ItemType | 'all'>('all');

  const filteredData = selectedType === 'all' ? timelineData : timelineData.filter(item => item.type === selectedType);
  const handleItemClick = (itemId: number) => setActiveItem(activeItem === itemId ? null : itemId);
  const handleTypeSelect = (typeId: ItemType | 'all') => {
    setSelectedType(typeId);
    setActiveItem(null); // Cerrar item activo al cambiar filtro
  };

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(10,112,236,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(10,112,236,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
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
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-16"
        >
          {types.map((type) => (
            <motion.button
              key={type.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleTypeSelect(type.id)}
              className={`group relative flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
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
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-blue-500/20" />

          <AnimatePresence mode="wait">
            {filteredData.map((item, index) => (
              <TimelineCard
                key={item.id}
                item={item}
                index={index}
                isActive={activeItem === item.id}
                onClick={() => handleItemClick(item.id)}
              />
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

