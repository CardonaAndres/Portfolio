import React from 'react';
import { motion } from "framer-motion";

export const HeroRightColumn = ({ fotoHV }) => (
  <motion.div
    className="relative"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
  >
    <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
      {/* Marco con brillo animado */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-200 to-blue-500 dark:from-blue-400 dark:to-blue-600 animate-pulse-slow" />

      {/* Contenedor de la imagen */}
      <motion.div
        className="absolute inset-1 rounded-3xl overflow-hidden shadow-lg"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img src={fotoHV} alt="Andrés Cardona" className="w-full h-full object-cover"
          loading='lazy' width='320' height='320'/>
      </motion.div>
    </div>
  </motion.div>
);
