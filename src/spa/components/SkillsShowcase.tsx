import { useState, useCallback } from 'react';
import { useSkillsHook } from '../hooks/useSkillsHook';
import { useLanguage } from '@/core/context/LanguageContext';
import { SkillsHeader } from '../skills/SkillsHeader';
import { SkillCategory } from '../skills/SkillCategory';
import { AnimatedBackground } from '../skills/AnimatedBackground';
import { ProgrammingLanguagesCarousel } from '../skills/ProgrammingLanguagesCarousel';


export const SkillsShowcase = () => {
  const isSpanish = useLanguage().language === 'ES';
  const { programmingLanguages, skillCategories, levelColors } = useSkillsHook();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const handleSkillHover = useCallback((categoryTitle: string, skillName: string) => {
    setHoveredSkill(`${categoryTitle}-${skillName}`);
  }, []);

  const handleSkillLeave = useCallback(() => {
    setHoveredSkill(null);
  }, []);

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <SkillsHeader isSpanish={isSpanish} />

        <ProgrammingLanguagesCarousel
          programmingLanguages={programmingLanguages}
          hoveredSkill={hoveredSkill}
          onHover={handleSkillHover}
          onLeave={handleSkillLeave}
          levelColors={levelColors}
          isSpanish={isSpanish}
        />

        {/* Main Skills Grid - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex: number) => (
            <SkillCategory
              key={category.title}
              category={category}
              categoryIndex={categoryIndex}
              hoveredSkill={hoveredSkill}
              onHover={handleSkillHover}
              onLeave={handleSkillLeave}
              levelColors={levelColors}
            />
          ))}
        </div>
      </div>
    </section>
  );
};