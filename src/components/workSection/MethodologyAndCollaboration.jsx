import React from 'react';
import { motion } from "framer-motion";
import { Settings, Users } from "lucide-react";
import { useLenguage } from '../../context/LanguageContext';

export const MethodologyAndCollaboration = () => {

  const { texts } = useLenguage();

  return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-20 p-8 rounded-2xl bg-blue-800 border border-blue-500/10">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Settings className="w-6 h-6 text-blue-400" />
              {texts.methodologyTitle}
            </h3>
            <p className="text-gray-300">
              {texts.methodologyDescription}
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Users className="w-6 h-6 text-blue-400" />
              {texts.philosophyTitle}
            </h3>
            <p className="text-gray-300">
              {texts.philosophyDescription}
            </p>
          </div>
        </div>
      </motion.div>
  )
}
