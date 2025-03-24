import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Sparkles } from "lucide-react";
import { useState } from "react";
import { useLenguage } from "../../context/LanguageContext";

export const HeroLeftColumn = ({ texts }) => {
  const { lenguage } = useLenguage();
  const [hoverState, setHoverState] = useState({ email: false, title: false });

  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const titleChars = `${texts.title}Andrés`.split("");
  const blueLettersIndex = lenguage === 'es' ? [10, 11, 12, 13, 14, 15] : [9, 10, 11, 12, 13, 14 ];

  return (
    <motion.div className="text-left space-y-12 relative" variants={containerVariants} initial="hidden" animate="visible">
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full blur-3xl -z-10" />
      
      <motion.div variants={itemVariants} className="mb-8 flex items-center">
        <motion.div  className="mr-3 p-1.5 bg-blue-500 rounded-full flex items-center justify-center" whileHover={{ scale: 1.1, rotate: 5 }} >
          <Sparkles className="w-4 h-4 text-white" />
        </motion.div>
        <span className="text-sm font-medium text-blue-400 tracking-wider uppercase">{texts.profecional}</span>
        <motion.div className="ml-4 h-px w-20 bg-gradient-to-r from-blue-600 to-transparent" initial={{ width: 0, opacity: 0 }}
          animate={{ width: 80, opacity: 1 }} transition={{ delay: 1, duration: 0.8 }}
        />
      </motion.div>

      <motion.h1 variants={itemVariants} className="text-4xl lg:text-7xl font-bold text-slate-800 dark:text-white leading-tight mb-8"
        onMouseEnter={() => setHoverState({...hoverState, title: true})}
        onMouseLeave={() => setHoverState({...hoverState, title: false})}>
        <div className="overflow-hidden">
          {titleChars.map((char, index) => (
            <motion.span  key={index} className={blueLettersIndex.includes(index) ? "relative inline-block text-blue-500 dark:text-blue-400 transition-colors duration-200 hover:text-blue-700 dark:hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 font-bold glow animate-glow" : ""}
            initial={{ y: 40, opacity: 0 }} 
            animate={{ 
              y: 0, 
              opacity: 1,
              scale: hoverState.title && blueLettersIndex.includes(index) ? 1.1 : 1,
              textShadow: hoverState.title && blueLettersIndex.includes(index) ? "0 0 8px rgba(59, 130, 246, 0.6)" : "none"
            }}
            transition={{ 
              delay: lenguage === 'es' ? '' : 0.8 + index * 0.04,
              duration: 0.5,
              ease: "easeOut"
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
          ))}
        </div>
        
        <motion.div 
          className="h-1 w-1/2 bg-gradient-to-r from-blue-500/80 via-blue-400/50 to-transparent mt-4 rounded-full"
          initial={{ width: "0%", opacity: 0 }}
          animate={{ 
            width: hoverState.title ? "70%" : "50%", 
            opacity: 1,
            x: hoverState.title ? 10 : 0
          }}
          transition={{ duration: 0.5 }}
        />
      </motion.h1>

      <motion.div variants={itemVariants} >
        <motion.p variants={itemVariants} className="text-lg text-white/90 leading-relaxed max-w-xl backdrop-blur-sm bg-white/5 p-6 rounded-2xl shadow-lg">
          {texts.aboutMe}
        </motion.p>
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
        <motion.span className="group flex items-center gap-4 text-white/90 hover:text-whitetransition-all duration-300 ease-out"
          whileHover={{ scale: 1.02, x: 5 }}>
          <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-blue-500/20 shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300 backdrop-blur-sm">
            <Mail className="w-5 h-5" />
          </div>
          <span className="font-medium tracking-wide">11cardona31@gmail.com</span>
        </motion.span>

        <div className="flex gap-6">
          {[
            { Icon: Github, href: "https://github.com/CardonaAndres" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/andrés-cardona-18418a206" }
          ].map(({ Icon, href }) => (
            <motion.a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label="Social media" className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl  hover:bg-blue-500/20 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
              whileHover={{ scale: 1.1, rotate: 5, transition: { type: "spring", stiffness: 300 }}}
            >
              <Icon className="w-6 h-6 text-white/90 hover:text-white transition-colors" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};