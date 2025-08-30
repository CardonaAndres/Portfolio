import { memo } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const ContactInfo = memo(({ href, icon: Icon, text }: {
  href: string;
  icon: any;
  text: string;
}) => (
  <motion.a 
    href={href}
    whileHover={{ 
      x: 5,
      scale: 1.02,
    }}
    whileTap={{ scale: 0.98 }}
    className="group flex items-center space-x-3 p- text-gray-200 hover:text-blue-400 hover:border-blue-400/30 transition-all duration-300 backdrop-blur-sm"
  >
    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300">
      <Icon className="w-4 h-4" />
    </div>
    <span className="font-medium">{text}</span>
    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </motion.a>
));