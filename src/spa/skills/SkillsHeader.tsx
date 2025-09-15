import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const SkillsHeader = ({ isSpanish }: { isSpanish: boolean }) => (
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
      <span className="block">
        {isSpanish ? 'Tecnologías que' : 'Technologies I'}
      </span>
      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mt-2">
        {isSpanish ? 'Domino' : 'Master'}
      </span>
    </h2>
  </motion.div>
);