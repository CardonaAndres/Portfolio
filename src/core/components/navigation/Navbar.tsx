import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Globe, ChevronDown, Layers } from 'lucide-react';
import { useNavigation } from '@/core/hooks/useNavigation';
import { useLanguage } from '@/core/context/LanguageContext';

export const Navbar = () => {
  const { navItems } = useNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState<string>('about');
  const [hoveredItem, setHoveredItem] = useState<null | string>(null);
  const { language, changeLanguage, languages } = useLanguage();
  const [langOpen, setLangOpen] = useState(false);
  
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY.current ? 'down' : 'up';
      
      // Solo ocultar si se scrollea hacia abajo más de 20px y no está al inicio
      if (direction === 'down' && scrollY > 70 && scrollY > lastScrollY.current) {
        setVisible(false);
      } else if (direction === 'up' || scrollY < 70) {
        setVisible(true);
      }
      
      // Actualizar estado de scrolled para el backdrop
      setScrolled(scrollY > 20);
      
      lastScrollY.current = scrollY > 0 ? scrollY : 0;
      ticking.current = false;
    };

    const requestTick = () => {
      if (!ticking.current) {
        requestAnimationFrame(updateScrollDirection);
        ticking.current = true;
      }
    };

    const handleScroll = () => requestTick();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menús cuando se hace invisible el navbar
  useEffect(() => {
    if (!visible) {
      setIsOpen(false);
      setLangOpen(false);
    }
  }, [visible]);

  const navbarVariants = {
    visible: {
      y: 0 as number,
      transition: {
        duration: 0.1,
        ease: [0.4, 0.0, 0.2, 1] as const
      }
    },
    hidden: {
      y: '-100%',
      transition: {
        duration: 0.1,
        ease: [0.4, 0.0, 0.2, 1] as const
      }
    }
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial="visible"
        animate={visible ? "visible" : "hidden"}
        variants={navbarVariants}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'backdrop-blur-xl bg-black/70 shadow-2xl shadow-blue-500/10' 
            : 'backdrop-blur-sm bg-black/30'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10"
            >
              <div className="flex items-center space-x-2 cursor-pointer">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="relative"
                >
                  <Sparkles className="w-8 h-8 text-blue-500" />
                  <div className="absolute inset-0 w-8 h-8 bg-blue-500 blur-xl opacity-50"></div>
                </motion.div>
   
                <h1 className="text-lg font-bold tracking-tight">
                    <span className="relative inline-block text-blue-500 drop-shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 hover:drop-shadow-[0_0_40px_rgba(59,130,246,0.8)]">
                        Andrés
                    <span className="absolute -inset-1 -z-10 animate-pulse rounded-md bg-blue-500/20 blur-md"></span>
                    </span>
                    <span className="relative ml-1 text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
                        Cardona
                    </span>
                </h1>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="relative hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => setActiveSection(item.id)}
                  className="relative px-4 py-2 group"
                >
                  <div className="flex items-center space-x-2 text-gray-300 group-hover:text-white transition-colors duration-300">
                    <item.icon className="w-4 h-4" />
                    <span className="font-medium lg:text-sm">
                      {language === 'ES' ? item.label : item.labelEn}
                    </span>
                  </div>
                  
                  {/* Hover Effect */}
                  <AnimatePresence>
                    {hoveredItem === item.id && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute inset-0 -z-10 bg-blue-500/20 rounded-lg blur-md"
                      />
                    )}
                  </AnimatePresence>

                  {/* Active Indicator */}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                    />
                  )}
                </motion.a>
              ))}

              {/* Language Selector */}
              <div className="relative ml-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300"
                >
                  <Globe className="w-4 h-4" />
                  <span className="font-medium">{language}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${langOpen ? 'rotate-180' : ''}`} />
                </motion.button>

                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      className="absolute top-full mt-2 right-0 w-48 bg-black/90 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden"
                    >
                      {languages.map((lang, index) => (
                        <motion.button
                          key={lang.code}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          onClick={() => {
                            changeLanguage(lang.code);
                            setLangOpen(false);
                          }}
                          className={`w-full flex items-center space-x-3 px-4 py-3 hover:bg-blue-500/20 transition-all duration-300 ${
                            language === lang.code ? 'bg-blue-500/10 text-blue-400' : 'text-gray-300 hover:text-white'
                          }`}
                        >
                          <span className="text-2xl">{lang.flag}</span>
                          <span className="font-medium">{lang.label}</span>
                          {language === lang.code && (
                            <motion.div
                              layoutId="langActive"
                              className="ml-auto w-2 h-2 bg-blue-500 rounded-full"
                            />
                          )}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile Controls */}
            <div className="flex lg:hidden items-center space-x-3">
              {/* Mobile Language Selector */}
              {!isOpen && (
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setLangOpen(!langOpen)}
                  className="p-2 rounded-lg bg-white/10 backdrop-blur-sm"
                >
                  <Globe className="w-5 h-5 text-white" />
                </motion.button>
              )}
              
              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2 rounded-lg bg-white/10 backdrop-blur-sm"
              >
                <motion.div
                  animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Layers className="w-5 h-5 text-white" />
                </motion.div>
                {/* Notification Dot */}
                {!isOpen && (
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full"
                  />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Language Dropdown */}
        <AnimatePresence>
          {(langOpen && !isOpen) && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-white/10 bg-black/80 backdrop-blur-xl"
            >
              <div className="container mx-auto px-4 py-2">
                {languages.map((lang, index) => (
                  <motion.button
                    key={lang.code}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    onClick={() => {
                      changeLanguage(lang.code);
                      setLangOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 ${
                      language === lang.code ? 'bg-blue-500/20 text-blue-400' : 'text-gray-300'
                    }`}
                  >
                    <span className="text-2xl">{lang.flag}</span>
                    <span className="font-medium">{lang.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Sliding Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-72 bg-black/95 backdrop-blur-2xl z-40 lg:hidden border-r border-white/10"
          >
            <div className="flex flex-col h-full">
              {/* Navigation Items */}
              <div className="flex-1 overflow-y-auto py-8">
                <div className="px-4 space-y-1">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.id}
                      href={`#${item.id}`}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => {
                        setActiveSection(item.id);
                        setIsOpen(false);
                      }}
                      className={`flex items-center space-x-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                        activeSection === item.id
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="text-lg font-medium">
                        {language === 'ES' ? item.label : item.labelEn}
                      </span>
                      {activeSection === item.id && (
                        <motion.div
                          layoutId="activeMobile"
                          className="ml-auto w-1 h-8 bg-blue-500 rounded-full"
                        />
                      )}
                    </motion.a>
                  ))}
                  <motion.button
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.1 }}
                    className="flex items-center space-x-4 px-4 py-3 rounded-xl transition-all duration-300 bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white w-full"
                    onClick={() => {
                      changeLanguage(language === 'ES' ? 'EN' : 'ES');
                      setIsOpen(false);
                    }}
                  >
                    <Globe className="w-5 h-5" />
                    <span className="text-lg font-medium">
                      {language === 'ES' ? 'English' : 'Español'}
                    </span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
            style={{ marginLeft: '18rem' }}
          />
        )}
      </AnimatePresence>
    </>
  );
};