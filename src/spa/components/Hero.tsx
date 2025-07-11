import { useLanguage } from '@/core/context/LanguageContext';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Mail, Phone } from 'lucide-react';
import { useHeroHook } from '../hooks/useHeroHook';
import { Card3D } from '../hero/Card3D';

export const Hero = () => {
  const { texts, language, languages } = useLanguage();
  const isSpanish = language === languages[1].code;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { socialMediaLinks } = useHeroHook();

  useEffect(() => {
    const handleMouseMove = (e : any) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    
    // Check if mobile
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(10,112,236,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(10,112,236,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mr-3">
                  Andrés  
                </span>
                Cardona

              </motion.h1>

              {/* Title */}
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }} className="text-xl sm:text-2xl text-gray-200 mb-6"
              >
                { isSpanish ? 'Desarrollador De Software' : 'Full Stack Developer' }
                <span className="block text-lg text-gray-300 mt-2">
                { isSpanish ? 'Especialista Backend • Experto en el ecosistema JavaScript' 
                  : 'Backend Specialist • JavaScript Ecosystem Expert' 
                }
                </span>
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-gray-200 mb-8 max-w-xl mx-auto lg:mx-0"
              >
                { texts.description }
              </motion.p>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 text-sm"
              >
                <a href="mailto:11cardona31@gmail.com" className="flex items-center space-x-2 text-gray-200 hover:text-blue-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>11cardona31@gmail.com</span>
                </a>
                <a href="tel:+573012524648" className="flex items-center space-x-2 text-gray-200 hover:text-blue-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+57 301 252 4648</span>
                </a>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div onClick={() => window.location.href = '#projects'} 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }} className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <motion.button whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }} className="group flex items-center space-x-2 px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300 bg-white/20"
                >
                  <Code2 className="w-4 h-4" />
                  <span>Softwares que cuentan historias</span>
                </motion.button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex justify-center lg:justify-start space-x-4"
              >
                {socialMediaLinks.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.url}
                    aria-label={item.name}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-full bg-white/10 text-gray-300 hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300"
                  >
                    <item.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - 3D Card with Floating Tags */}
            <Card3D 
              setIsHovered={setIsHovered} 
              isHovered={isHovered} 
              isMobile={isMobile} 
              mousePosition={mousePosition}
            />
          </div>
        </div>
      </div>
    </section>
  );
};