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
    <div className={`relative px-3 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 ${
      hoveredSkill === `${categoryTitle}-${skill.name}` ? 'transform scale-105' : ''
    }`}>
      <div className="flex items-center space-x-3">
        {/* Technology Image */}
        <div className="relative flex-shrink-0">
          <img 
            src={skill.imageUrl}
            alt={skill.name}
            className="w-8 h-8 object-contain"
            style={{ 
              filter: hoveredSkill === `${categoryTitle}-${skill.name}` ? 'brightness(1.2)' : 'brightness(1)'
            }}
          />
        </div>
        
        <div className="flex-1 min-w-0">
          {/* Technology Name */}
          <span className="text-sm font-medium text-white block truncate">
            {skill.name}
          </span>
          
          {/* Level Badge */}
          <span className={`inline-block text-xs px-2 py-0.5 mt-1 rounded-full bg-gradient-to-r ${levelColors[skill.level]} text-white font-medium`}>
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