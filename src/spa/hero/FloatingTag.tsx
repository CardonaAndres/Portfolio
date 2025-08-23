import { memo } from "react";
import { motion } from "framer-motion";

export const FloatingTag = memo(({ tag, index, mousePosition }: { 
    tag: any, 
    index: number, 
    mousePosition: { x: number, y: number } 
}) => (
    <motion.div
        key={tag.id}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ 
            delay: 0.6 + index * 0.08,
            duration: 0.4,
            ease: "easeOut"
        }}
        style={{
            position: 'absolute',
            ...tag.position,
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
            zIndex: 10,
        }}
        className="hidden sm:block"
    >
        <motion.div
            animate={{
                y: [0, -8, 0],
                rotate: [-1, 1, -1],
            }}
            transition={{ 
                duration: 3 + index * 0.5,
                repeat: Infinity, 
                ease: "easeInOut" 
            }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            className={`group relative flex items-center space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r ${tag.color} backdrop-blur-sm cursor-pointer shadow-lg`}
        >
            <tag.icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            <span className="text-xs sm:text-sm font-medium text-white whitespace-nowrap">{tag.text}</span>
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </motion.div>
    </motion.div>
));