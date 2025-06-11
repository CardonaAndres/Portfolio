import { useState, useEffect } from 'react';
import { useLenguage } from '../../context/LanguageContext';
import { motion } from "framer-motion";
import { Heart, Code, Coffee, Zap } from "lucide-react";

export const HeroRightColumn = ({ fotoHV }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const { texts, lenguage } = useLenguage();
  
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

  const floatingElements = [
    {
      icon: <Heart className="w-3 h-3" />,
      text: lenguage === 'en' ? "I ❤️ TS" : "❤️ Amo TS",
      position: "top-8 -right-16",
      delay: 1.8,
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Code className="w-3 h-3" />,
      text: lenguage === 'en' ? "Code Lover" : "Amante del Código",
      position: "-left-12 top-16",
      delay: 2.2,
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: <Coffee className="w-3 h-3" />,
      text: lenguage === 'en' ? "Fueled by ☕" : "Energizado por ☕",
      position: "-right-10 bottom-20",
      delay: 2.6,
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: <Zap className="w-3 h-3" />,
      text: lenguage === 'en' ? "Always Learning" : "Siempre Aprendiendo",
      position: "-left-8 bottom-8",
      delay: 3.0,
      color: "from-yellow-500 to-green-500"
    }
  ];

  return (
    <motion.div className="relative" initial={{ opacity: 0, scale: 0.95 }} 
      animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background animated blurs */}
      <motion.div 
        className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-blue-400/20 blur-xl"
        animate={{
          x: isHovered ? mousePosition.x * -0.5 : 0,
          y: isHovered ? mousePosition.y * -0.5 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ type: "spring", stiffness: 50 }}
      />
      <motion.div 
        className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full bg-blue-600/20 blur-xl"
        animate={{
          x: isHovered ? mousePosition.x * 0.5 : 0,
          y: isHovered ? mousePosition.y * 0.5 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ type: "spring", stiffness: 50 }}
      />
      
      {/* Animated line */}
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
        {/* Main background container */}
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
        
        {/* Enhanced floating decorative elements */}
        <motion.div className="absolute -right-3 -top-3 w-12 h-12 bg-gradient-to-br from-blue-400/40 to-blue-500/40 rounded-xl rotate-12 backdrop-blur-sm border border-white/20"
          animate={{
            rotate: isHovered ? 15 : 12,
            scale: isHovered ? 1.05 : 1,
            x: isHovered ? mousePosition.x * 0.4 : 0,
            y: isHovered ? mousePosition.y * 0.4 : 0,
          }}
          transition={{ type: "spring", stiffness: 200 }}
        />
        <motion.div 
          className="absolute -left-3 -bottom-3 w-10 h-10 bg-gradient-to-br from-blue-500/40 to-blue-600/40 rounded-xl -rotate-12 backdrop-blur-sm border border-white/20"
          animate={{
            rotate: isHovered ? -15 : -12,
            scale: isHovered ? 1.05 : 1,
            x: isHovered ? mousePosition.x * 0.3 : 0,
            y: isHovered ? mousePosition.y * 0.3 : 0,
          }}
          transition={{ type: "spring", stiffness: 200 }}
        />
        
        <motion.div 
          className="absolute right-1/4 -top-4 w-6 h-6 bg-blue-400/30 rounded-lg rotate-45 backdrop-blur-sm"
          animate={{
            rotate: isHovered ? 50 : 45,
            x: isHovered ? mousePosition.x * 0.5 : 0,
            y: isHovered ? mousePosition.y * 0.5 : 0,
          }}
          transition={{ type: "spring", stiffness: 150 }}
        />
        <motion.div 
          className="absolute left-1/4 -bottom-4 w-5 h-5 bg-blue-500/30 rounded-lg -rotate-45 backdrop-blur-sm"
          animate={{
            rotate: isHovered ? -50 : -45,
            x: isHovered ? mousePosition.x * 0.5 : 0,
            y: isHovered ? mousePosition.y * 0.5 : 0,
          }}
          transition={{ type: "spring", stiffness: 150 }}
        />

        {/* Main image container */}
        <motion.div className="absolute inset-1 rounded-3xl overflow-hidden shadow-xl shadow-blue-600/20"
          whileHover={{ 
            scale: 1.04,
            boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.25), 0 8px 10px -6px rgba(59, 130, 246, 0.2)"
          }} 
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent z-10 opacity-0"
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
            <img src={fotoHV} alt="Andrés Cardona" 
              className="w-full h-full object-cover" loading="lazy" 
              width="320" height="320"
            />
          </motion.div>
          
          <div className="absolute inset-0 rounded-3xl border border-white/30" />
          <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-white/20 to-transparent rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-white/20 to-transparent rounded-br-3xl" />
        </motion.div>
      </div>

      {/* Enhanced floating badges */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.position} z-20`}
          initial={{ 
            opacity: 0, 
            scale: 0,
            rotate: -10 
          }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotate: 0,
            x: isHovered ? mousePosition.x * (0.1 + index * 0.05) : 0,
            y: isHovered ? mousePosition.y * (0.1 + index * 0.05) : 0,
          }}
          whileHover={{ 
            scale: 1.1,
            rotate: 5,
            y: -2
          }}
          transition={{ 
            delay: element.delay, 
            duration: 0.6,
            type: "spring",
            stiffness: 200
          }}
        >
          <div className={`bg-gradient-to-r ${element.color} p-2 rounded-full shadow-lg backdrop-blur-sm border border-white/30 flex items-center gap-1.5 min-w-max`}>
            <span className="text-white text-xs font-bold flex items-center gap-1">
              {element.icon}
              {element.text}
            </span>
            <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${element.color} opacity-20 blur-sm -z-10`}></div>
          </div>
        </motion.div>
      ))}

      {/* Professional badge - enhanced */}
      <motion.div 
        className="absolute -bottom-5 -right-3 bg-gradient-to-r from-blue-600 to-blue-500 py-2 px-5 rounded-full shadow-xl backdrop-blur-sm border border-blue-400/30"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3), 0 4px 6px -4px rgba(59, 130, 246, 0.2)"
        }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <span className="text-white text-sm font-semibold tracking-wide flex items-center gap-2">
          <Zap className="w-3 h-3" />
          {texts.profecional}
        </span>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-blue-300/20 blur-sm -z-10"></div>
      </motion.div>
      
      {/* Status indicator - enhanced */}
      <motion.div 
        className="absolute -left-2 -top-2 bg-white/95 py-2 px-4 rounded-full shadow-xl backdrop-blur-sm border border-white/50 flex items-center gap-2"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        <span className="text-blue-600 text-xs font-semibold flex items-center gap-1">
          <Code className="w-3 h-3" />
          {texts.jsMessage}
        </span>
      </motion.div>
    </motion.div>
  );
};