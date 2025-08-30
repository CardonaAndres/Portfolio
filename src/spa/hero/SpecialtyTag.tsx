import { memo } from "react";
import { motion } from "framer-motion";

export const SpecialtyTag = memo(({ tag, index, delay }: { 
  tag: string; 
  index: number; 
  delay: number; 
}) => (
  <motion.span
    key={index}
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ 
      delay,
      type: "spring",
      stiffness: 200,
      damping: 20,
    }}
    whileHover={{ 
      scale: 1.05,
      boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)",
    }}
    className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500/15 to-purple-500/15 border border-blue-400/25 text-blue-300 text-sm font-medium backdrop-blur-sm shadow-lg hover:border-blue-400/40 transition-all duration-300 cursor-default"
  >
    <motion.span
      animate={{ 
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
      }}
      transition={{ 
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }}
      className="bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 bg-[length:200%_100%] bg-clip-text text-transparent"
    >
      {tag}
    </motion.span>
  </motion.span>
));