import { motion, AnimatePresence } from "framer-motion";
import type { LevelColors, TechSkill } from "../assets/ts/types";

interface Props {
    skill: TechSkill;
    index: number;
    categoryTitle: string;
    hoveredSkill: string | null;
    onHover: (categoryTitle: string, skillName: string ) => void;
    onLeave: () => void;
    levelColors: LevelColors;
}

export const SkillItem = ({ 
  skill, 
  index, 
  categoryTitle, 
  hoveredSkill, 
  onHover, 
  onLeave, 
  levelColors 
}: Props) => (
  <motion.div
    key={skill.name}
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    onMouseEnter={() => onHover(categoryTitle, skill.name)}
    onMouseLeave={onLeave}
    className="relative cursor-pointer"
  >
    <div className={`relative p-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 ${
      hoveredSkill === `${categoryTitle}-${skill.name}` ? 'transform scale-105' : ''
    }`}>
      {/* Vertical Layout */}
      <div className="flex flex-col items-center text-center space-y-2">
        {/* Technology Image */}
        <div className="relative flex-shrink-0">
          <img 
            src={skill.imageUrl}
            alt={skill.name}
            className="w-7 h-7 sm:w-8 sm:h-8 object-contain transition-all duration-300"
            style={{ 
              filter: hoveredSkill === `${categoryTitle}-${skill.name}` ? 'brightness(1.2)' : 'brightness(1)'
            }}
          />
        </div>
        
        {/* Technology Name */}
        <div className="w-full">
          <h3 className="text-xs sm:text-sm font-medium text-white leading-tight break-words">
            {skill.name}
          </h3>
        </div>
        
        {/* Level Badge */}
        <div className="w-full flex justify-center">
          <span className={`inline-block text-xs px-2 py-0.5 rounded-full bg-gradient-to-r ${levelColors[skill.level]} text-white font-medium whitespace-nowrap`}>
            {skill.level}
          </span>
        </div>
      </div>
    </div>

    {/* Hover Glow */}
    <AnimatePresence>
      {hoveredSkill === `${categoryTitle}-${skill.name}` && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-20 blur-xl rounded-xl -z-10`}
        />
      )}
    </AnimatePresence>
  </motion.div>
);