import { motion } from 'framer-motion';
import { ChevronRight } from "lucide-react";

export const FeatureItem = ({ feature, index }: { feature: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.4 + index * 0.05 }}
    className="flex items-center space-x-2 text-gray-300"
  >
    <ChevronRight className="w-4 h-4 text-blue-400 flex-shrink-0" />
    <span className="text-sm">{feature}</span>
  </motion.div>
);