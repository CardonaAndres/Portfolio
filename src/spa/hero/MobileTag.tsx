import { memo } from 'react';
import { motion } from 'framer-motion';

export const MobileTag = memo(({ tag, index }: { tag: any, index: number }) => (
    <motion.div
        key={tag.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
            delay: 0.8 + index * 0.08,
            duration: 0.3,
            ease: "easeOut"
        }}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center space-x-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${tag.color} backdrop-blur-sm`}
    >
        <tag.icon className="w-3 h-3 text-white" />
        <span className="text-xs font-medium text-white">{tag.text}</span>
    </motion.div>
));