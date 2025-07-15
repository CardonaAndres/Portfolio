import { motion } from "framer-motion"
import { useHeroHook } from "../hooks/useHeroHook";
import { useState, useEffect } from "react";
import { useLanguage } from "@/core/context/LanguageContext";

interface Props {
    setIsHovered : (value : boolean) => void;
    isHovered : boolean;
    isMobile : boolean;
    mousePosition : { x : number, y : number }
}

export const Card3D = ({ setIsHovered, isHovered, isMobile, mousePosition } : Props) => {
  const { skills, floatingTags } = useHeroHook();
  const [showCode, setShowCode] = useState(true);
  const [isFlipping, setIsFlipping] = useState(false);
  const { language } = useLanguage();
  const isSpanish = language === 'ES';

  // Alternar cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setShowCode(prev => !prev);
        setIsFlipping(false);
      }, 300); // Mitad de la duración del flip
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        <motion.div
        animate={{
            rotateY: isHovered ? 10 : 0,
            rotateX: isHovered ? -10 : 0,
            rotateZ: isFlipping ? 180 : 0,
        }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-md"
        style={{ perspective: 1000 }}
        >
        {/* Floating Tags around the card */}
        {floatingTags.map((tag, index) => (
            <motion.div
            key={tag.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
            style={{
                position: 'absolute',
                ...(isMobile ? tag.mobilePosition : tag.position),
                transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
                zIndex: 10,
            }}
            className="hidden sm:block"
            >
            <motion.div
                animate={{
                y: [0, -10, 0],
                rotate: [-2, 2, -2],
                }}
                transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.1, rotate: 0 }}
                className={`group relative flex items-center space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r ${tag.color} backdrop-blur-sm cursor-pointer shadow-lg`}
            >
                <tag.icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                <span className="text-xs sm:text-sm font-medium text-white whitespace-nowrap">{tag.text}</span>
                <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
            </motion.div>
        ))}

        {/* Glowing Background */}
        {!isMobile && (<div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl" />)}
        
        {/* Card Container */}
        <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-black/90 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl" />
            
            {/* Card Content - Alternating between code and photo */}
            <motion.div
                key={showCode ? 'code' : 'photo'}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="relative"
            >
                {showCode ? (
                    // Code Preview
                    <div>
                        <div className="flex items-center space-x-2 mb-5">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        
                        <div className="font-mono text-xs sm:text-sm space-y-2">
                            <div className="text-gray-500">// Skills & Technologies</div>
                            <div>
                            <span className="text-blue-400">const</span>
                            <span className="text-white ml-2">developer</span>
                            <span className="text-gray-400 ml-2">=</span>
                            <span className="text-gray-400 ml-2">{'{'}</span>
                            </div>
                            <div className="ml-4">
                            <span className="text-green-400">name:</span>
                            <span className="text-orange-400 ml-2">'Andrés Cardona'</span>,
                            </div>
                            <div className="ml-4">
                            <span className="text-green-400">role:</span>
                            <span className="text-orange-400 ml-2">'Full Stack Developer'</span>,
                            </div>
                            <div className="ml-4">
                            <span className="text-green-400">experience:</span>
                            <span className="text-purple-400 ml-2">'1.6+ years'</span>,
                            </div>
                            <div className="ml-4">
                            <span className="text-green-400">expertise:</span>
                            <span className="text-gray-400 ml-2">[</span>
                            </div>
                            <div className="ml-8 space-y-1">
                            {['JavaScript', 'TypeScript', 'Node.js', 'Express.js'].map((skill, i) => (
                                <motion.div
                                key={skill}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1 + i * 0.1 }}
                                >
                                <span className="text-orange-400">'{skill}'</span>,
                                </motion.div>
                            ))}
                            </div>
                            <div className="ml-4 text-gray-400">],</div>
                            <div className="text-gray-400">{'}'}</div>
                            
                        </div>
                    </div>
                ) : (
                    // Photo Section
                    <div className="flex flex-col items-center space-y-4">
                        <div className="relative">
                            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                                <img
                                    src="/assets/imgs/me/FotoHV.webp" // Reemplaza con la ruta de tu foto
                                    alt="Andrés Cardona"
                                    className="w-full h-full rounded-full object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-md -z-10" />
                        </div>
                        
                        <div className="text-center">
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                                Andrés Cardona
                            </h3>
                            <div className="mt-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                                <span className="text-blue-400 text-xs sm:text-sm">
                                    { isSpanish ? 'Desarrollador De Software' : 'Full Stack Developer' }
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </motion.div>

            {/* Animated Skills - Only show in code view */}
            {showCode && (
                <div className="mt-6 flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <motion.span key={skill} initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.5 + index * 0.05 }}
                    whileHover={{ scale: 1.1 }} className="px-2 sm:px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30"
                    >
                    {skill}
                    </motion.span>
                ))}
                </div>
            )}
        </div>

        {/* Mobile Floating Tags - Shown below card on mobile */}
        <div className="sm:hidden mt-6 flex flex-wrap justify-center gap-2">
            {floatingTags.slice(0, 4).map((tag, index) => (
            <motion.div
                key={tag.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className={`flex items-center space-x-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${tag.color} backdrop-blur-sm`}
            >
                <tag.icon className="w-3 h-3 text-white" />
                <span className="text-xs font-medium text-white">{tag.text}</span>
            </motion.div>
            ))}
        </div>
        </motion.div>
    </motion.div>
  )
}