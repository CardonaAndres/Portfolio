import { memo } from "react";
import { motion } from "framer-motion";

export const TechBadge = memo(({ tech, index }: { tech: string, index: number }) => (
    <motion.div
        key={tech}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
            delay: 0.5 + index * 0.05,
            type: "spring",
            stiffness: 260,
            damping: 20
        }}
        className="px-2 py-1 text-xs rounded-md bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-gray-300 border border-white/10"
    >
        {tech}
    </motion.div>
));