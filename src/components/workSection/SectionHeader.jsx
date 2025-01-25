import { motion } from "framer-motion";
import { useLenguage } from '../../context/LanguageContext';

export const SectionHeader = () => {

  const { texts } = useLenguage();

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }} className="text-center mb-20" >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {texts.myProcessJob}
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              {texts.myProcessJobDescription}
            </p>
    </motion.div>
  )
}
