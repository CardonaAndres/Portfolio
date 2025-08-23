import { useLanguage } from '@/core/context/LanguageContext';
import { useState, useEffect, useCallback, useMemo, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Mail, ArrowRight } from 'lucide-react';
import { useHeroHook } from '../hooks/useHeroHook';
import { Card3D } from '../hero/Card3D';

// Componente memoizado para partículas flotantes
const FloatingParticle = memo(() => {
  const randomValues = useMemo(() => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: 3 + Math.random() * 2,
    delay: Math.random() * 2,
    size: 0.5 + Math.random() * 0.8,
  }), []);

  return (
    <motion.div
      className="absolute bg-gradient-to-r from-blue-400/40 to-purple-400/40 rounded-full"
      style={{
        left: `${randomValues.left}%`,
        top: `${randomValues.top}%`,
        width: `${randomValues.size}rem`,
        height: `${randomValues.size}rem`,
      }}
      animate={{
        y: [0, -120, 0],
        opacity: [0, 0.8, 0],
        scale: [0.5, 1, 0.5],
      }}
      transition={{
        duration: randomValues.duration,
        repeat: Infinity,
        delay: randomValues.delay,
        ease: "easeInOut",
      }}
    />
  );
});

// Componente memoizado para tags de especialidad
const SpecialtyTag = memo(({ tag, index, delay }: { 
  tag: string; 
  index: number; 
  delay: number; 
}) => (
  <motion.span
    key={index}
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ 
      delay,
      type: "spring",
      stiffness: 200,
      damping: 20,
    }}
    whileHover={{ 
      scale: 1.05,
      boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)",
    }}
    className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/15 to-purple-500/15 border border-blue-400/25 text-blue-300 text-sm font-medium backdrop-blur-sm shadow-lg hover:border-blue-400/40 transition-all duration-300 cursor-default"
  >
    <motion.span
      animate={{ 
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
      }}
      transition={{ 
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }}
      className="bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 bg-[length:200%_100%] bg-clip-text text-transparent"
    >
      {tag}
    </motion.span>
  </motion.span>
));

// Componente memoizado para enlaces sociales
const SocialLink = memo(({ item, index, delay }: {
  item: any;
  index: number;
  delay: number;
}) => (
  <motion.a
    key={index}
    href={item.url}
    aria-label={`Link to ${item.name}`}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, scale: 0, rotate: -180 }}
    animate={{ opacity: 1, scale: 1, rotate: 0 }}
    transition={{ 
      delay,
      type: "spring",
      stiffness: 260,
      damping: 20,
    }}
    whileHover={{ 
      scale: 1.15,
      rotate: [0, 5, -5, 0],
      boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)",
      y: -5,
    }}
    whileTap={{ scale: 0.9 }}
    className="group relative p-4 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm border border-white/10 text-gray-300 hover:border-blue-400/50 transition-all duration-300 overflow-hidden"
  >
    {/* Efecto de brillo al hover */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
    {/* Partículas al hover */}
    <motion.div
      className="absolute inset-0 pointer-events-none"
      initial={false}
      animate={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
    >
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full"
          style={{
            left: `${20 + i * 30}%`,
            top: `${20 + i * 20}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </motion.div>
    
    <item.icon className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform duration-300" />
  </motion.a>
));

// Componente memoizado para información de contacto
const ContactInfo = memo(({ href, icon: Icon, text }: {
  href: string;
  icon: any;
  text: string;
}) => (
  <motion.a 
    href={href}
    whileHover={{ 
      x: 5,
      scale: 1.02,
    }}
    whileTap={{ scale: 0.98 }}
    className="group flex items-center space-x-3 p- text-gray-200 hover:text-blue-400 hover:border-blue-400/30 transition-all duration-300 backdrop-blur-sm"
  >
    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300">
      <Icon className="w-4 h-4" />
    </div>
    <span className="font-medium">{text}</span>
    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </motion.a>
));

export const Hero = memo(() => {
  const { texts, language, languages } = useLanguage();
  const { socialMediaLinks } = useHeroHook();
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Valores memoizados
  const isSpanish = useMemo(() => language === languages[1].code, [language, languages]);
  
  const specialtyTags = useMemo(() => [
    isSpanish ? 'Especialista Backend' : 'Backend Specialist',
    isSpanish ? 'Experto JavaScript' : 'JavaScript Expert',
  ], [isSpanish]);

  const contactInfo = useMemo(() => [
    {
      href: "mailto:11cardona31@gmail.com",
      icon: Mail,
      text: "11cardona31@gmail.com",
      type: "email"
    }
  ], []);

  // Callbacks memoizados
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const handleProjectsClick = useCallback(() => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);
    
    checkMobile();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, [handleMouseMove, handleScroll, checkMobile]);

  // Efecto parallax memoizado
  const parallaxY = useMemo(() => scrollY * 0.3, [scrollY]);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Enhanced Animated Background */}
      <div 
        className="absolute inset-0"
        style={{ transform: `translateY(${parallaxY}px)` }}
      >
        {/* Grid Pattern animado */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
          animate={{ 
            backgroundPosition: ['0px 0px', '80px 80px'],
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />


        {/* Floating Particles */}
        <AnimatePresence>
          {[...Array(25)].map((_, i) => (
            <FloatingParticle key={i}  />
          ))}
        </AnimatePresence>

        {/* Orbes flotantes grandes */}
        {!isMobile && (
          <>
            <motion.div
              className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-transparent blur-3xl"
              style={{ left: '30%', top: '20%' }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute w-80 h-80 rounded-full bg-gradient-to-l from-purple-500/10 to-transparent blur-3xl"
              style={{ right: '10%', bottom: '20%' }}
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </>
        )}
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
              className="text-center lg:text-left space-y-8"
            >
              {/* Enhanced Name con efecto typing */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4"
              >
                <motion.span 
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{ backgroundSize: '200% 100%' }}
                >
                  Andrés  
                </motion.span>
                <motion.span 
                  className="text-white ml-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Cardona
                </motion.span>
              </motion.h1>

              {/* Enhanced Title con animación de texto */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }} 
                className="space-y-4"
              >
                <motion.h2 
                  className="text-xl sm:text-2xl font-bold"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    background: 'linear-gradient(45deg, #e5e7eb, #9ca3af, #e5e7eb)',
                    backgroundSize: '200% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {isSpanish ? 'Desarrollador De Software' : 'Full Stack Developer'}
                </motion.h2>

                {/* Tags de especialidad mejorados */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  {specialtyTags.map((tag, index) => (
                    <SpecialtyTag
                      key={index}
                      tag={tag}
                      index={index}
                      delay={0.6 + index * 0.1}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Enhanced Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                <motion.span
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {texts.description}
                </motion.span>
              </motion.p>

              {/* Enhanced Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                {contactInfo.map((contact, index) => (
                  <ContactInfo
                    key={index}
                    href={contact.href}
                    icon={contact.icon}
                    text={contact.text}
                  />
                ))}
              </motion.div>

              {/* Enhanced CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }} 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.button 
                  onClick={handleProjectsClick}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative flex items-center justify-center space-x-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold overflow-hidden transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Efecto de partículas en el botón */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      background: [
                        'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                        'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                        'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  <Code2 className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10">
                    {isSpanish ? 'Ver Mis Proyectos' : 'View My Projects'}
                  </span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </motion.div>

              {/* Enhanced Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex justify-center lg:justify-start space-x-4"
              >
                {socialMediaLinks.map((item, index) => (
                  <SocialLink
                    key={index}
                    item={item}
                    index={index}
                    delay={0.8 + index * 0.1}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Enhanced 3D Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
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
});

Hero.displayName = 'Hero';