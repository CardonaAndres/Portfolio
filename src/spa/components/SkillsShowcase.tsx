import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2,
  Server,
  Database,
  Terminal,
  Palette,
  GitBranch,
  Zap,
  Layers,
  Package,
  Sparkles,
  Hexagon,
  Box,
  Activity,
  Braces,
  FileCode2,
  MonitorSmartphone,
  Workflow
} from 'lucide-react';

// Tipos TypeScript
interface TechSkill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  level: SkillLevel;
  projects: string;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  skills: TechSkill[];
}

type SkillLevel = 'Experto' | 'Avanzado' | 'Intermedio' | 'Básico';

type LevelColors = {
  [K in SkillLevel]: string;
};

export const SkillsShowcase = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [selectedTech, setSelectedTech] = useState<TechSkill | null>(null);

  // Lenguajes de programación (para el encabezado)
  const programmingLanguages: TechSkill[] = [
    { name: 'HTML / CSS', icon: Box, level: 'Experto', projects: '+10', color: 'from-orange-500 to-red-500' },
    { name: 'JavaScript', icon: Braces, level: 'Experto', projects: '+20', color: 'from-yellow-500 to-yellow-600' },
    { name: 'TypeScript', icon: FileCode2, level: 'Avanzado', projects: '+10', color: 'from-blue-500 to-blue-600' },
    { name: 'Python', icon: Code2, level: 'Intermedio', projects: '+4', color: 'from-green-500 to-green-600' },
    { name: 'PHP', icon: Code2, level: 'Intermedio', projects: '+5', color: 'from-purple-500 to-purple-600' },
  ];

  // Categorías principales (4 columnas)
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      icon: MonitorSmartphone,
      color: 'from-purple-600 to-pink-600',
      skills: [
        { name: 'React', icon: Layers, level: 'Avanzado', projects: '+20', color: 'from-cyan-500 to-blue-500' },
        { name: 'Vue.js', icon: Layers, level: 'Básico', projects: '+3', color: 'from-cyan-500 to-blue-500' },
        { name: 'Tailwind CSS', icon: Palette, level: 'Avanzado', projects: '+14', color: 'from-teal-500 to-cyan-500' },
      ]
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'from-green-600 to-emerald-600',
      skills: [
        { name: 'Node.js', icon: Hexagon, level: 'Experto', projects: '+17', color: 'from-green-600 to-green-700' },
        { name: 'Express.js', icon: Zap, level: 'Avanzado', projects: '+17', color: 'from-gray-500 to-gray-600' },
        { name: 'NestJS', icon: Package, level: 'Avanzado', projects: '+8', color: 'from-red-500 to-pink-500' },
        { name: 'FastAPI', icon: Activity, level: 'Intermedio', projects: '+4', color: 'from-teal-500 to-green-500' },
        { name: 'Laravel', icon: Workflow, level: 'Intermedio', projects: '+6', color: 'from-red-600 to-red-700' },
      ]
    },
    {
      title: 'Base de Datos',
      icon: Database,
      color: 'from-orange-600 to-red-600',
      skills: [
        { name: 'MySQL', icon: Database, level: 'Avanzado', projects: '+15', color: 'from-blue-600 to-blue-700' },
        { name: 'PostgreSQL', icon: Database, level: 'Avanzado', projects: '+12', color: 'from-blue-500 to-indigo-600' },
        { name: 'MongoDB', icon: Database, level: 'Básico', projects: '+3', color: 'from-green-600 to-green-700' },
        { name: 'SQL Server', icon: Database, level: 'Intermedio', projects: '+10', color: 'from-red-600 to-red-700' },
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: Terminal,
      color: 'from-indigo-600 to-purple-600',
      skills: [
        { name: 'Docker', icon: Package, level: 'Intermedio', projects: '+10', color: 'from-blue-500 to-blue-600' },
        { name: 'Git/GitHub', icon: GitBranch, level: 'Avanzado', projects: 'Todos', color: 'from-gray-600 to-gray-700' }
      ]
    }
  ];

  const levelColors: LevelColors = {
    'Experto': 'from-emerald-400 to-green-500',
    'Avanzado': 'from-blue-400 to-indigo-500',
    'Intermedio': 'from-yellow-400 to-orange-500',
    'Básico': 'from-gray-400 to-gray-500'
  };

  const handleSkillHover = (categoryTitle: string, skillName: string) => {
    setHoveredSkill(`${categoryTitle}-${skillName}`);
  };

  const handleSkillLeave = () => {
    setHoveredSkill(null);
  };

  const handleTechSelect = (tech: TechSkill) => {
    setSelectedTech(tech);
  };

  const handleModalClose = () => {
    setSelectedTech(null);
  };

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(10,112,236,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(10,112,236,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Floating Hexagons */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Hexagon className={`w-8 h-8 text-blue-500/10`} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-4"
          >
            <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
            <span className="text-sm text-blue-400 font-medium">Tech Stack</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Tecnologías que
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mt-2">
              Domino
            </span>
          </h2>
        </motion.div>

        {/* Programming Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Lenguajes de Programación</h3>
            <p className="text-gray-400">Tecnologías principales que utilizo en el desarrollo</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {programmingLanguages.map((language, index) => (
              <motion.div
                key={language.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => handleSkillHover('Languages', language.name)}
                onMouseLeave={handleSkillLeave}
                onClick={() => handleTechSelect(language)}
                className="relative cursor-pointer group"
              >
                <div className={`relative px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 ${
                  hoveredSkill === `Languages-${language.name}` ? 'transform scale-105' : ''
                }`}>
                  <div className="flex items-center space-x-2">
                    <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${language.color} flex items-center justify-center`}>
                      <language.icon className="w-3 h-3 text-white" />
                    </div>
                    <span className="font-medium text-white text-sm">{language.name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full bg-gradient-to-r ${levelColors[language.level]} text-white`}>
                      {language.level}
                    </span>
                  </div>
                </div>

                {/* Hover Glow */}
                <AnimatePresence>
                  {hoveredSkill === `Languages-${language.name}` && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={`absolute inset-0 bg-gradient-to-r ${language.color} opacity-20 blur-xl rounded-full -z-10`}
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Skills Grid - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
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

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      onMouseEnter={() => handleSkillHover(category.title, skill.name)}
                      onMouseLeave={handleSkillLeave}
                      onClick={() => handleTechSelect(skill)}
                      className="relative cursor-pointer"
                    >
                      <div className={`relative px-3 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 ${
                        hoveredSkill === `${category.title}-${skill.name}` ? 'transform scale-105' : ''
                      }`}>
                        <div className="flex items-center space-x-2">
                          <div className={`w-4 h-4 rounded-sm bg-gradient-to-r ${skill.color} flex items-center justify-center`}>
                            <skill.icon className="w-2.5 h-2.5 text-white" />
                          </div>
                          <span className="text-sm font-medium text-white">{skill.name}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full bg-gradient-to-r ${levelColors[skill.level]} text-white`}>
                            {skill.level}
                          </span>
                        </div>
                      </div>

                      {/* Hover Glow */}
                      <AnimatePresence>
                        {hoveredSkill === `${category.title}-${skill.name}` && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-20 blur-xl rounded-full -z-10`}
                          />
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>

                {/* Category Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 -z-10`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Selected Tech Modal */}
        <AnimatePresence>
          {selectedTech && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleModalClose}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-md w-full"
              >
                <div className="bg-gray-900 rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${selectedTech.color}`}>
                        <selectedTech.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{selectedTech.name}</h3>
                        <span className={`inline-block mt-2 text-sm px-3 py-1 rounded-full bg-gradient-to-r ${levelColors[selectedTech.level]} text-white`}>
                          {selectedTech.level}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={handleModalClose}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="space-y-4 text-gray-300">
                    <p>He trabajado con {selectedTech.name} en {selectedTech.projects} proyectos, aplicando las mejores prácticas y manteniéndome actualizado con las últimas características.</p>
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-sm text-gray-400">Click fuera para cerrar</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};