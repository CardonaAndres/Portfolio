import { useState } from "react";
import { NavItem } from "../common/NavItem";
import { Menu, X, User, Code, Briefcase, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useLenguage } from "../../context/LanguageContext";
import { OnChangeLenguage } from "../common/OnChangeLenguage.jsx";

export const Navbar = () => {

  const { texts, changeLenguage } = useLenguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const links = [ texts.home, texts.projects, texts.skills, texts.contact ];  

  return (
    <nav className="bg-white/80 dark:bg-blue-900/90 backdrop-blur-sm fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.h1
            className="text-2xl font-bold text-blue-600 dark:text-white"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Andrés Cardona
          </motion.h1>

          <div className="hidden md:flex space-x-8">
            {links.map(
              (text, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <NavItem icon={ 
                      index === 0 ? ( <User size={18} /> ) : index === 1 ? 
                      ( <Code size={18} /> ) : index === 2 ? ( <Briefcase size={18} />) : 
                        ( <MessageSquare size={18} /> )
                    } text={text} href={text}
                  />
                
                </motion.div>
              )
            )} 
              <motion.div whileHover={{ scale: 1.1, rotate: 2 }} whileTap={{ scale: 0.95 }} >    
                <OnChangeLenguage />       
              </motion.div>       
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMenu}
            className="md:hidden p-2 text-blue-600 dark:text-white rounded-lg"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.5 }}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      <motion.div
        className="md:hidden bg-white dark:bg-blue-900 p-4 rounded-lg shadow-lg"
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {isMenuOpen && (
          <div className="flex flex-col space-y-4">
            {links.map(
              (text, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <NavItem icon={ 
                      index === 0 ? ( <User size={18} /> ) : index === 1 ? 
                      (<Code size={18} /> ) : index === 2 ? ( <Briefcase size={18} />) : 
                        ( <MessageSquare size={18} /> )
                    } text={text} href={text}
                  />
                </motion.div>
              )
            )}
              <motion.div whileHover={{ scale: 1.1, rotate: 2 }} whileTap={{ scale: 0.95 }} >    
                <OnChangeLenguage />       
              </motion.div> 
          </div>
        )}
      </motion.div>
    </nav>
  );
};
