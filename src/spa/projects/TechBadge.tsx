import { motion } from "framer-motion";

export const TechBadge = ({ tech, index, setHoveredTech }: { tech: string; index: number; setHoveredTech: (value: string | null) => void }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.6 + index * 0.05 }}
    whileHover={{ scale: 1.05, y: -1 }}
    whileTap={{ scale: 0.95 }}
    onHoverStart={() => setHoveredTech(tech)}
    onHoverEnd={() => setHoveredTech(null)}
    className="px-3 py-1.5 text-sm rounded-full bg-white/10 text-white border border-white/20 hover:border-blue-400/50 hover:bg-blue-500/10 transition-all duration-200 cursor-pointer active:scale-95"
  >
    {tech}
  </motion.span>
);