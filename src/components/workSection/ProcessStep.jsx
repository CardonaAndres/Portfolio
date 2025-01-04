import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export const ProcessStep = ({ step, index, hoveredStep, setHoveredStep }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setHoveredStep(index)}
      onHoverEnd={() => setHoveredStep(null)}
      className="relative group"
    >
      <div className="relative p-8 rounded-2xl bg-blue-800 border border-blue-500/20 hover:border-blue-500 transition-all duration-300">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
            {step.icon}
          </div>
          <h3 className="text-xl font-semibold text-white">{step.title}</h3>
        </div>
        <p className="text-gray-300 mb-6">{step.description}</p>
        <motion.div
          animate={{ height: hoveredStep === index ? 'auto' : 0 }}
          initial={{ height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <ul className="space-y-3">
            {step.details.map((detail, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-2 text-gray-400"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                {detail}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
  