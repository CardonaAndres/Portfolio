import { Hexagon } from "lucide-react";
import { motion } from "framer-motion";

export const AnimatedBackground = () => (
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(10,112,236,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(10,112,236,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
    
    {/* Floating Hexagons */}
    {Array.from({ length: 6 }, (_, i) => (
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
        <Hexagon className="w-8 h-8 text-blue-500/10" />
      </motion.div>
    ))}
  </div>
);