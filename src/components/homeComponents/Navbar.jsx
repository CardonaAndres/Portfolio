import { useState } from "react";
import { NavItem } from "../common/NavItem";
import { Menu, X, User, Code, Briefcase, MessageSquare, Github, Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenguage } from "../../context/LanguageContext";
import { OnChangeLenguage } from "../common/OnChangeLenguage.jsx";

export const Navbar = () => {
  const { texts } = useLenguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const links = [texts.home, texts.projects, texts.skills, texts.contact];

  const nameAnimation = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    })
  };

  return (
    <nav className="fixed w-full z-50">
      <div className="bg-white/80 dark:bg-blue-900/90 backdrop-blur-sm shadow-lg">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <motion.div initial="initial" animate="animate" variants={nameAnimation}
                className="relative group">
                <div className="flex items-center mb-1">
                  <span className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xl font-bold mr-3">
                    A
                  </span>
                  <h1 className="text-2xl font-bold text-white tracking-tight">
                    Andrés Cardona
                  </h1>
                </div>
                <motion.div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"
                  whileHover={{ width: "100%" }}
                />
              </motion.div>
            </div>
            <div className="flex items-center space-x-4">
              <motion.div className="hidden sm:block"
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}>
                <OnChangeLenguage />
              </motion.div>
              
              <motion.button onClick={toggleMenu} className="p-3 text-blue-600 dark:text-white rounded-xl hover:bg-blue-50 dark:hover:bg-blue-800/50" whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}>
                <motion.div animate={{ rotate: isMenuOpen ? 180 : 0 }} transition={{ duration: 0.5 }}>
                  {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }} className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm" onClick={toggleMenu}/>
        )}
      </AnimatePresence>

      <motion.div className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-blue-900 shadow-2xl"
        initial="closed" animate={isMenuOpen ? "open" : "closed"} variants={menuVariants}
      >
        <div className="p-8 h-full flex flex-col">
          <div className="flex justify-end mb-8">
            <motion.button onClick={toggleMenu} className="p-2 text-blue-600 dark:text-white rounded-lg hover:bg-blue-50 dark:hover:bg-blue-800/50" whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }} >
              <X size={24} />
            </motion.button>
          </div>

          <div className="space-y-6">
            {links.map((text, index) => (
              <motion.div key={index} custom={index} variants={itemVariants} className="group transform transition-transform hover:translate-x-2">
                <NavItem
                  icon={
                    index === 0 ? (
                      <User size={24} className="group-hover:text-blue-500 transition-colors" />
                    ) : index === 1 ? (
                      <Code size={24} className="group-hover:text-blue-500 transition-colors" />
                    ) : index === 2 ? (
                      <Briefcase size={24} className="group-hover:text-blue-500 transition-colors" />
                    ) : (
                      <MessageSquare size={24} className="group-hover:text-blue-500 transition-colors" />
                    )
                  }
                  text={text} href={text} onClose={toggleMenu}
                />
              </motion.div>
            ))}
          </div>

          <motion.div className="mt-auto pb-8" variants={itemVariants} custom={links.length}>
            <OnChangeLenguage />
          </motion.div>
        </div>
      </motion.div>
    </nav>
  );
}