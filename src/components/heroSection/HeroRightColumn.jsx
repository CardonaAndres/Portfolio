import { useState, useEffect } from 'react';
import { useLenguage } from '../../context/LanguageContext';
import { motion } from "framer-motion";

export const HeroRightColumn = ({ fotoHV }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const { texts } = useLenguage();
  
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) / 50;
    const moveY = (clientY - window.innerHeight / 2) / 50;
    setMousePosition({ x: moveX, y: moveY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-blue-400/20 blur-xl"
        animate={{
          x: isHovered ? mousePosition.x * -0.5 : 0,
          y: isHovered ? mousePosition.y * -0.5 : 0,
        }}
        transition={{ type: "spring", stiffness: 50 }}
      />
      <motion.div 
        className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full bg-blue-600/20 blur-xl"
        animate={{
          x: isHovered ? mousePosition.x * 0.5 : 0,
          y: isHovered ? mousePosition.y * 0.5 : 0,
        }}
        transition={{ type: "spring", stiffness: 50 }}
      />
      
      <motion.div 
        className="absolute -right-10 top-1/3 w-10 h-px bg-gradient-to-l from-transparent to-blue-500"
        initial={{ width: 0, opacity: 0 }}
        animate={{ 
          width: 40, 
          opacity: 1,
          x: isHovered ? mousePosition.x * -0.3 : 0,
          y: isHovered ? mousePosition.y * -0.3 : 0,
        }}
        transition={{ delay: 0.8, duration: 0.7 }}
      />
      
      <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
        <motion.div 
          className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/40 to-blue-600/40 backdrop-blur-sm overflow-hidden"
          animate={{
            x: isHovered ? mousePosition.x * 0.2 : 0,
            y: isHovered ? mousePosition.y * 0.2 : 0,
          }}
          transition={{ type: "spring", stiffness: 100 }}
        >

          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute -right-3 -top-3 w-12 h-12 bg-blue-500/30 rounded-xl rotate-12"
          animate={{
            rotate: isHovered ? 15 : 12,
            scale: isHovered ? 1.05 : 1,
            x: isHovered ? mousePosition.x * 0.4 : 0,
            y: isHovered ? mousePosition.y * 0.4 : 0,
          }}
          transition={{ type: "spring", stiffness: 200 }}
        />
        <motion.div 
          className="absolute -left-3 -bottom-3 w-10 h-10 bg-blue-600/30 rounded-xl -rotate-12"
          animate={{
            rotate: isHovered ? -15 : -12,
            scale: isHovered ? 1.05 : 1,
            x: isHovered ? mousePosition.x * 0.3 : 0,
            y: isHovered ? mousePosition.y * 0.3 : 0,
          }}
          transition={{ type: "spring", stiffness: 200 }}
        />
        
        <motion.div 
          className="absolute right-1/4 -top-4 w-6 h-6 bg-blue-400/20 rounded-lg rotate-45"
          animate={{
            rotate: isHovered ? 50 : 45,
            x: isHovered ? mousePosition.x * 0.5 : 0,
            y: isHovered ? mousePosition.y * 0.5 : 0,
          }}
          transition={{ type: "spring", stiffness: 150 }}
        />
        <motion.div 
          className="absolute left-1/4 -bottom-4 w-5 h-5 bg-blue-500/20 rounded-lg -rotate-45"
          animate={{
            rotate: isHovered ? -50 : -45,
            x: isHovered ? mousePosition.x * 0.5 : 0,
            y: isHovered ? mousePosition.y * 0.5 : 0,
          }}
          transition={{ type: "spring", stiffness: 150 }}
        />

        <motion.div 
          className="absolute inset-1 rounded-3xl overflow-hidden shadow-xl shadow-blue-600/20"
          whileHover={{ 
            scale: 1.04,
            boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.25), 0 8px 10px -6px rgba(59, 130, 246, 0.2)"
          }} 
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent z-10 opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          
          <motion.div
            className="w-full h-full"
            animate={{
              x: isHovered ? mousePosition.x * -0.4 : 0,
              y: isHovered ? mousePosition.y * -0.4 : 0,
            }}
            transition={{ type: "spring", stiffness: 40 }}
          >
            <img 
              src={fotoHV} 
              alt="Andrés Cardona" 
              className="w-full h-full object-cover"
              loading="lazy" 
              width="320" 
              height="320"
            />
          </motion.div>
          
          {/* Borde brillante mejorado */}
          <div className="absolute inset-0 rounded-3xl border border-white/30" />
          
          {/* Resplandor en esquinas */}
          <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-white/20 to-transparent rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-white/20 to-transparent rounded-br-3xl" />
        </motion.div>
      </div>

      {/* Etiqueta con animación mejorada */}
      <motion.div 
        className="absolute -bottom-5 -right-3 bg-gradient-to-r from-blue-600 to-blue-500 py-1.5 px-4 rounded-full shadow-lg"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3), 0 4px 6px -4px rgba(59, 130, 246, 0.2)"
        }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <span className="text-white text-sm font-semibold tracking-wide"> {texts.profecional} </span>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-blue-300/20 blur-sm -z-10"></div>
      </motion.div>
      
      {/* Indicador de skill con animación */}
      <motion.div 
        className="absolute -left-4 -top-2 bg-white/90 py-1 px-3 rounded-full shadow-lg flex items-center gap-1"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        <span className="text-blue-600 text-xs font-medium"> {texts.jsMessage} </span>
      </motion.div>
    </motion.div>
  );
};