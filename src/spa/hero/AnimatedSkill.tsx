import { memo } from "react";
import { motion } from "framer-motion";

export const AnimatedSkill = memo(({ skill, index, isMobile }: { 
    skill: string, 
    index: number, 
    isMobile: boolean 
}) => (
    <motion.span 
        key={skill} 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ 
            delay: isMobile ? 1.1 + index * 0.03 : 1.5 + index * 0.05,
            duration: 0.3,
            ease: "easeOut"
        }}
        whileHover={!isMobile ? { scale: 1.1 } : {}}
        whileTap={isMobile ? { scale: 0.95 } : {}}
        className="px-2 sm:px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30"
    >
        {skill}
    </motion.span>
));