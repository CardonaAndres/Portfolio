import { AnimatePresence, motion } from 'framer-motion';
import type { TimelineItem } from '../assets/ts/types';
import { Calendar, CheckCircle, ChevronDown, MapPin, Target } from 'lucide-react';
import { useLanguage } from '@/core/context/LanguageContext';

interface TimelineCardProps {
  item: TimelineItem;
  index: number;
  isActive: boolean;
  onClick: () => void;
  horizontal?: boolean;
}

export const TimelineCard = ({ item, index, isActive, onClick, horizontal = false }: TimelineCardProps) => {
  const isSpanish = useLanguage().language == 'ES';
  // Horizontal Layout
  if (horizontal) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="w-full"
      >
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          onClick={onClick}
          className="relative group cursor-pointer"
        >
          {/* Card */}
          <div className="relative bg-gradient-to-br from-gray-900/80 to-black/60 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 min-h-[300px]">
            {/* Header */}
            <div className="flex flex-col items-center text-center mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color} bg-opacity-20 mb-3`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              
              <div className="flex items-center space-x-2 mb-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">{item.date}</span>
                {item.current && (
                  <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                    Actual
                  </span>
                )}
              </div>

              <h3 className="text-lg font-semibold text-white mb-1 line-clamp-2">
                {item.title}
              </h3>
              <p className="text-blue-400 font-medium mb-2 text-sm">{item.company}</p>
              <p className="text-xs text-gray-400 flex items-center space-x-1">
                <MapPin className="w-3 h-3" />
                <span>{item.location}</span>
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm mb-4 text-center line-clamp-3">
              {item.description}
            </p>

            {/* Expand Button */}
            <div className="flex justify-center">
              <motion.div
                animate={{ rotate: isActive ? 180 : 0 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </div>

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
                  <h4 className="text-sm font-medium text-white mb-3 flex items-center justify-center space-x-2">
                    <Target className="w-4 h-4 text-blue-400" />
                    <span>
                      {isSpanish ? 'Logros y Responsabilidades' : 'Achievements and responsibilities'}
                    </span>
                  </h4>
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start space-x-2 text-sm text-gray-300"
                      >
                        <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0 mt-1" />
                        <span className="text-left">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Glow Effect */}
          <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 rounded-2xl`} />
        </motion.div>
      </motion.div>
    );
  }

  // Vertical Layout (mobile)
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ delay: index * 0.1 }}
      className="relative flex items-center mb-12 pl-16"
    >
      {/* Timeline Node - Mobile */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="absolute left-8 transform -translate-x-1/2 z-10"
      >
        <div className={`relative w-8 h-8 rounded-full bg-gradient-to-r ${item.color} p-0.5`}>
          <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
            <item.icon className="w-4 h-4 text-white" />
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

      {/* Content Card - Mobile */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        onClick={onClick}
        className="relative w-full cursor-pointer"
      >
        <div className="relative group">
          {/* Card */}
          <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color} bg-opacity-20`}>
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm text-gray-400 flex items-center space-x-2">
                    <Calendar className="w-3 h-3" />
                    <span>{item.date}</span>
                  </span>
                  {item.current && (
                    <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                      Actual
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-blue-400 font-medium mb-2 text-sm">{item.company}</p>
                <p className="text-xs text-gray-400 flex items-center space-x-1">
                  <MapPin className="w-3 h-3" />
                  <span>{item.location}</span>
                </p>
              </div>
              <motion.div
                animate={{ rotate: isActive ? 90 : 0 }}
                className="text-gray-400"
              >
                <ChevronDown className="w-4 h-4" />
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
                        <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0 mt-1" />
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
    </motion.div>
  );
};