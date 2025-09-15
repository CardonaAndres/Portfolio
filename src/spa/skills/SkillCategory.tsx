import { motion } from "framer-motion";
import { Hexagon } from "lucide-react";
import { SkillItem } from "./SkillItem";
import type { LevelColors, SkillCategory as SkillCategoryType } from "../assets/ts/types";

interface Props {
    category: SkillCategoryType;
    categoryIndex: number;
    hoveredSkill: string | null;
    onHover: (categoryTitle: string, skillName: string ) => void;
    onLeave: () => void;
    levelColors: LevelColors;
}

export const SkillCategory = ({ 
  category, 
  categoryIndex, 
  hoveredSkill, 
  onHover, 
  onLeave, 
  levelColors 
}: Props) => (
  <motion.div
    key={category.title}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: categoryIndex * 0.1 }}
    className="relative group"
  >
    {/* Category Card */}
    <div className="relative bg-gray-900/30 backdrop-blur-xl rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-500 h-full">
      {/* Category Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} shadow-lg`}>
            <category.icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-bold text-white">{category.title}</h3>
        </div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="text-gray-600"
        >
          <Hexagon className="w-4 h-4" />
        </motion.div>
      </div>

      {/* Skills Grid Layout - 2 per row on desktop, responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {category.skills.map((skill: any, skillIndex: number) => (
          <SkillItem
            key={skill.name}
            skill={skill}
            index={skillIndex}
            categoryTitle={category.title}
            hoveredSkill={hoveredSkill}
            onHover={onHover}
            onLeave={onLeave}
            levelColors={levelColors}
          />
        ))}
      </div>

      {/* Category Glow */}
      <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 -z-10`} />
    </div>
  </motion.div>
);