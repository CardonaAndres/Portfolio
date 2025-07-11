import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTimelineHook } from '../hooks/useTimelineHook';
import type { ItemType, TimelineItem } from '../assets/ts/types';
import { Calendar, MapPin, ChevronRight, Target, TrendingUp, CheckCircle } from 'lucide-react';

export const Timeline = () => {
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
            <span className="text-sm text-blue-400 font-medium">Mi Trayectoria</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Experiencia y
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mt-2">
              Formación
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Un recorrido por mi desarrollo profesional, educación y logros más significativos
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

// Componente separado para las tarjetas del timeline
interface TimelineCardProps {
  item: TimelineItem;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

const TimelineCard = ({ item, index, isActive, onClick }: TimelineCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ delay: index * 0.1 }}
      className={`relative flex flex-col lg:flex-row items-center mb-12 ${
        isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
      }`}
    >
      {/* Timeline Node */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex z-10"
      >
        <div className={`relative w-12 h-12 rounded-full bg-gradient-to-r ${item.color} p-0.5`}>
          <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
            <item.icon className="w-5 h-5 text-white" />
          </div>
          {item.current && (
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-blue-500/50 blur-xl"
            />
          )}
        </div>
      </motion.div>

      {/* Content Card */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        onClick={onClick}
        className={`relative w-full lg:w-5/12 ${
          isEven ? 'lg:pr-12' : 'lg:pl-12'
        } cursor-pointer`}
      >
        <div className="relative group">
          {/* Card */}
          <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color} bg-opacity-20`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm text-gray-400 flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </span>
                  {item.current && (
                    <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                      Actual
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-blue-400 font-medium mb-2">{item.company}</p>
                <p className="text-sm text-gray-400 flex items-center space-x-1">
                  <MapPin className="w-3 h-3" />
                  <span>{item.location}</span>
                </p>
              </div>
              <motion.div
                animate={{ rotate: isActive ? 90 : 0 }}
                className="text-gray-400"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.div>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm mb-4">
              {item.description}
            </p>

            {/* Expanded Content */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 pt-4 border-t border-white/10"
                >
                  <h4 className="text-sm font-medium text-white mb-3 flex items-center space-x-2">
                    <Target className="w-4 h-4 text-blue-400" />
                    <span>Logros y Responsabilidades</span>
                  </h4>
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start space-x-2 text-sm text-gray-300"
                      >
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Glow Effect */}
          <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
        </div>
      </motion.div>

      {/* Empty Space for Timeline Balance */}
      <div className="hidden lg:block lg:w-5/12" />
    </motion.div>
  );
};

