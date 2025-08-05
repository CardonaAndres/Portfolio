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
  const [scrollY, setScrollY] = useState(0);
  const { socialMediaLinks } = useHeroHook();

  useEffect(() => {
    const handleMouseMove = (e: any) => setMousePosition({ x: e.clientX, y: e.clientY });
    const handleScroll = () => setScrollY(window.scrollY);
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Parallax effect for background elements
  const parallaxY = scrollY * 0.5;

  return (
    <section className="relative min-h-screen  overflow-hidden flex items-center">
      {/* Enhanced Animated Background */}
      <div 
        className="absolute inset-0"
        style={{ transform: `translateY(${parallaxY}px)` }}
      >
        {/* Animated Grid Pattern */}
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"
          animate={{ 
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center lg:text-left"
            >

              {/* Enhanced Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mr-3">
                  Andrés  
                </span>
                Cardona

              </motion.h1>

              {/* Enhanced Title */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }} 
                className="mb-8"
              >
                <h2 className="text-1xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 mb-3">
                  {isSpanish ? 'Desarrollador De Software' : 'Full Stack Developer'}
                </h2>
                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  {[
                    isSpanish ? 'Especialista Backend' : 'Backend Specialist',
                    isSpanish ? 'Experto JavaScript' : 'JavaScript Expert'
                  ].map((tag, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 text-blue-300 text-sm font-medium backdrop-blur-sm"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Enhanced Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                {texts.description}
              </motion.p>

              {/* Enhanced Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8"
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

              {/* Enhanced CTA Button */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }} 
                className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10"
              >
                <motion.button 
                  onClick={() => window.location.href = '#projects'}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative flex items-center space-x-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold overflow-hidden transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transition-opacity duration-300" />
                  <Code2 className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">
                    {isSpanish ? 'Ver Mis Proyectos' : 'View My Projects'}
                  </span>
                </motion.button>
              </motion.div>

              {/* Enhanced Social Links */}
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
                    aria-label={`Link to ${item.name}`}
                    target="_blank"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 10,
                      boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 text-gray-300 hover:bg-blue-500/20 hover:border-blue-400/40 hover:text-blue-300 transition-all duration-300 group"
                  >
                    <item.icon className="w-6 h-6 group-hover:drop-shadow-lg" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Enhanced 3D Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="relative"
            >
              <Card3D 
                setIsHovered={setIsHovered} 
                isHovered={isHovered} 
                isMobile={isMobile} 
                mousePosition={mousePosition}
              />
              
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
};