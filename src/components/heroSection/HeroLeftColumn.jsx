import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export const HeroLeftColumn = ({ texts }) => {
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

  return (
    <motion.div className="text-left space-y-12 relative"
      variants={containerVariants} initial="hidden" animate="visible">
    
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl -z-10" />
      
      <motion.h2 variants={itemVariants} className="text-sm font-medium text-blue-500 dark:text-blue-400 tracking-wider uppercase relative inline-block after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-blue-500/30 after:-bottom-1 after:left-0">
        {texts.profecional}
      </motion.h2>

      <motion.div variants={itemVariants} className="text-5xl lg:text-7xl font-bold text-white leading-tight">
        {texts.title}{" "}
        <span className="relative">
          <span className="text-blue-500 dark:text-blue-400"> Andrés </span>
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0" />
        </span>
      </motion.div>

      <motion.p variants={itemVariants} className="text-lg text-white/90 leading-relaxed max-w-xl backdrop-blur-sm bg-white/5 p-6 rounded-2xl shadow-lg">
        {texts.aboutMe}
      </motion.p>

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
