import { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, ArrowRight } from 'lucide-react';
import { Card3D } from '../hero/Card3D';
import { FloatingParticle } from '../hero/FloatingParticle';
import { SpecialtyTag } from '../hero/SpecialtyTag';
import { SocialLink } from '../hero/SocialLink';
import { ContactInfo } from '../hero/ContactInfo';
import { useHeroLogic } from '../hooks/useHeroLogic';

export const Hero = memo(() => {
  const {
    mousePosition,
    isHovered,
    setIsHovered,
    isMobile,
    isSpanish,
    specialtyTags,
    contactInfo,
    parallaxY,
    particleKeys,
    gridPatternStyle,
    handleProjectsClick,
    texts,
    socialMediaLinks,
    ANIMATION_DURATIONS
  } = useHeroLogic();

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Enhanced Animated Background */}
      <div 
        className="absolute inset-0"
        style={{ 
          transform: `translate3d(0, ${parallaxY}px, 0)`,
          willChange: 'transform'
        }}
      >
        {/* Grid Pattern animado */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          style={gridPatternStyle}
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
        <AnimatePresence mode="wait">
          {!isMobile && particleKeys.map((key) => (
            <FloatingParticle key={key} />
          ))}
        </AnimatePresence>

        {/* Orbes flotantes */}
        {!isMobile && (
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-transparent blur-3xl"
              style={{ 
                left: '30%', 
                top: '20%',
                willChange: 'transform, opacity'
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: ANIMATION_DURATIONS.orb1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute w-80 h-80 rounded-full bg-gradient-to-l from-purple-500/10 to-transparent blur-3xl"
              style={{ 
                right: '10%', 
                bottom: '20%',
                willChange: 'transform, opacity'
              }}
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: ANIMATION_DURATIONS.orb2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl xl:max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center lg:text-left space-y-6"
            >
              {/* Name Section */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold mb-4"
              >
                <motion.span 
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: ANIMATION_DURATIONS.gradient,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{ 
                    backgroundSize: '200% 100%',
                    willChange: 'background-position'
                  }}
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

              {/* Title and Tags Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }} 
                className="space-y-4"
              >
                <motion.h2 
                  className="text-xl font-bold"
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
                    willChange: 'background-position'
                  }}
                >
                  {isSpanish ? 'Desarrollador De Software' : 'Full Stack Developer'}
                </motion.h2>

                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  {specialtyTags.map((tag, index) => (
                    <SpecialtyTag
                      key={`${tag}-${index}`}
                      tag={tag}
                      index={index}
                      delay={0.6 + index * 0.1}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Description */}
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
                  style={{ willChange: 'opacity' }}
                >
                  {texts.description}
                </motion.span>
              </motion.p>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              >
                {contactInfo.map((contact, index) => (
                  <ContactInfo
                    key={`contact-${index}`}
                    href={contact.href}
                    icon={contact.icon}
                    text={contact.text}
                  />
                ))}
              </motion.div>

              {/* CTA Button */}
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
                  style={{ willChange: 'transform, box-shadow' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
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
                      duration: ANIMATION_DURATIONS.particles,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{ willChange: 'background' }}
                  />
                  
                  <Code2 className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10">
                    {isSpanish ? 'Ver Mis Proyectos' : 'View My Projects'}
                  </span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex justify-center lg:justify-start space-x-4"
              >
                {socialMediaLinks.map((item, index) => (
                  <SocialLink
                    key={`social-${item.name || item.href}-${index}`}
                    item={item}
                    index={index}
                    delay={0.8 + index * 0.1}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - 3D Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
              style={{ willChange: 'transform, opacity' }}
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