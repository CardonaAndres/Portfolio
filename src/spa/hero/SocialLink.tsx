import { memo } from "react";
import { motion } from "framer-motion";

export const SocialLink = memo(({ item, index, delay }: {
  item: any;
  index: number;
  delay: number;
}) => (
  <motion.a
    key={index}
    href={item.url}
    aria-label={`Link to ${item.name}`}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, scale: 0, rotate: -180 }}
    animate={{ opacity: 1, scale: 1, rotate: 0 }}
    transition={{ 
      delay,
      type: "spring",
      stiffness: 260,
      damping: 20,
    }}
    whileHover={{ 
      scale: 1.15,
      rotate: [0, 5, -5, 0],
      boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)",
      y: -5,
    }}
    whileTap={{ scale: 0.9 }}
    className="group relative p-4 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm border border-white/10 text-gray-300 hover:border-blue-400/50 transition-all duration-300 overflow-hidden"
  >
    {/* Efecto de brillo al hover */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
    {/* Partículas al hover */}
    <motion.div
      className="absolute inset-0 pointer-events-none"
      initial={false}
      animate={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
    >
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full"
          style={{
            left: `${20 + i * 30}%`,
            top: `${20 + i * 20}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </motion.div>
    
    <item.icon className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform duration-300" />
  </motion.a>
));