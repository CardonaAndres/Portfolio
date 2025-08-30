import { memo, useMemo } from "react";
import { motion } from "framer-motion";

export const FloatingParticle = memo(() => {
  const randomValues = useMemo(() => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: 3 + Math.random() * 2,
    delay: Math.random() * 2,
    size: 0.5 + Math.random() * 0.8,
  }), []);

  return (
    <motion.div
      className="absolute bg-gradient-to-r from-blue-400/40 to-purple-400/40 rounded-full"
      style={{
        left: `${randomValues.left}%`,
        top: `${randomValues.top}%`,
        width: `${randomValues.size}rem`,
        height: `${randomValues.size}rem`,
      }}
      animate={{
        y: [0, -120, 0],
        opacity: [0, 0.8, 0],
        scale: [0.5, 1, 0.5],
      }}
      transition={{
        duration: randomValues.duration,
        repeat: Infinity,
        delay: randomValues.delay,
        ease: "easeInOut",
      }}
    />
  );
});
