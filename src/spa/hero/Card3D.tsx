import { useHeroHook } from "../hooks/useHeroHook";
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useCallback, useMemo, memo } from "react";
import { useLanguage } from "@/core/context/LanguageContext";
import { MobileTag } from "./MobileTag";
import { TechBadge } from "./TechBadge";
import { FloatingTag } from "./FloatingTag";
import { AnimatedSkill } from "./AnimatedSkill";

interface Props {
    setIsHovered: (value: boolean) => void;
    isHovered: boolean;
    isMobile: boolean;
    mousePosition: { x: number, y: number }
}

export const Card3D = memo(({ setIsHovered, isHovered, isMobile, mousePosition }: Props) => {
    const { skills, floatingTags } = useHeroHook();
    const [ showCode, setShowCode ] = useState(true);
    const [ isFlipping, setIsFlipping ] = useState(false);
    const { language } = useLanguage();
    
    const isSpanish = useMemo(() => language === 'ES', [language]);
    
    const techStack = useMemo(() => [
        'JavaScript', 'TypeScript', 'Node.js', 'Express.js',
        'NestJS', 'React', 'Docker'
    ], []);

    const codeSkills = useMemo(() => [
        'JavaScript', 'TypeScript', 'Node.js', 'Express.js', 'NestJS'
    ], []);

    const animationConfig = useMemo(() => ({
        initial: isMobile ? 
            { opacity: 0, scale: 0.95 } : 
            { opacity: 0, scale: 0.8 },
        
        cardTransition: {
            delay: isMobile ? 0.2 : 0.5,
            duration: isMobile ? 0.4 : 0.8,
            ease: "easeOut" as const
        },
        
        cardRotation: isMobile ? {
            rotateY: 0,
            rotateX: 0,
            rotateZ: isFlipping ? 5 : 0,
        } : {
            rotateY: isHovered ? 10 : 0,
            rotateX: isHovered ? -10 : 0,
            rotateZ: isFlipping ? 180 : 0,
        },
        
        flipTransition: {
            duration: isMobile ? 0.3 : 0.5,
            ease: "easeInOut" as const
        }
    }), [isMobile, isHovered, isFlipping]);

    const handleMouseEnter = useCallback(() => {
        if (!isMobile) setIsHovered(true);
    }, [isMobile, setIsHovered]);

    const handleMouseLeave = useCallback(() => {
        if (!isMobile) setIsHovered(false);
    }, [isMobile, setIsHovered]);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFlipping(true);
            setTimeout(() => {
                setShowCode(prev => !prev);
                setIsFlipping(false);
            }, 200);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const mobileTagsSliced = useMemo(() => floatingTags.slice(0, 4), [floatingTags]);

    return (
        <motion.div
            initial={animationConfig.initial}
            animate={{ opacity: 1, scale: 1 }}
            transition={animationConfig.cardTransition}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                animate={animationConfig.cardRotation}
                transition={animationConfig.flipTransition}
                className="relative mx-auto max-w-md"
                style={{ perspective: isMobile ? 'none' : 1000 }}
            >
                {/* Floating Tags around the card - Solo desktop y solo cuando showCode es true */}
                <AnimatePresence>
                    {!isMobile && showCode && floatingTags.map((tag, index) => (
                        <FloatingTag
                            key={tag.id}
                            tag={tag}
                            index={index}
                            mousePosition={mousePosition}
                        />
                    ))}
                </AnimatePresence>

                {/* Glowing Background - Solo desktop, memoizado */}
                {!isMobile && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl" />
                )}
                
                {/* Card Container */}
                <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-black/90 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/10 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl" />
                    
                    {/* CONTENEDOR CON ALTURA FIJA PARA EL CONTENIDO */}
                    <div className="relative w-full h-[400px] sm:h-[450px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={showCode ? 'code' : 'photo'}
                                initial={{ opacity: 0, scale: isMobile ? 0.98 : 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: isMobile ? 0.98 : 0.8 }}
                                transition={{ 
                                    duration: isMobile ? 0.3 : 0.5,
                                    ease: "easeOut"
                                }}
                                className="absolute inset-0 flex flex-col"
                            >
                                {showCode ? (
                                    // Code Preview
                                    <div className="flex-1 flex flex-col">
                                        <div className="flex items-center space-x-2 mb-5">
                                            <div className="w-3 h-3 rounded-full bg-red-500" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                            <div className="w-3 h-3 rounded-full bg-green-500" />
                                        </div>
                                        
                                        <div className="font-mono text-xs sm:text-sm space-y-2 flex-1">
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
                                                {codeSkills.map((skill, i) => (
                                                    <motion.div
                                                        key={skill}
                                                        initial={{ opacity: 0, x: isMobile ? -10 : -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ 
                                                            delay: isMobile ? 0.8 + i * 0.05 : 1 + i * 0.1,
                                                            duration: 0.3,
                                                            ease: "easeOut" 
                                                        }}
                                                    >
                                                        <span className="text-orange-400">'{skill}'</span>,
                                                    </motion.div>
                                                ))}
                                            </div>
                                            <div className="ml-4 text-gray-400">],</div>
                                            <div className="text-gray-400">{'}'}</div>
                                        </div>

                                        {/* Animated Skills */}
                                        <div className="mt-6 flex flex-wrap gap-2">
                                            {skills.map((skill, index) => (
                                                <AnimatedSkill
                                                    key={skill}
                                                    skill={skill}
                                                    index={index}
                                                    isMobile={isMobile}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    // Photo Section
                                    <div className="flex-1 flex flex-col justify-between">
                                        {/* Header decorativo */}
                                        <div className="flex items-center justify-center space-x-2 mb-4">
                                            <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent flex-1"></div>
                                            <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                                                <span className="text-blue-400 text-xs font-medium">DEVELOPER</span>
                                            </div>
                                            <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent flex-1"></div>
                                        </div>

                                        {/* Foto y info principal */}
                                        <div className="flex flex-col items-center space-y-4 flex-1">
                                            <div className="relative">
                                                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                                                    <img
                                                        src="/assets/imgs/me/FotoHV.webp"
                                                        alt="Andrés Cardona"
                                                        className="w-full h-full rounded-full object-cover"
                                                        loading="lazy"
                                                    />
                                                </div>
                                                {!isMobile && (
                                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-md -z-10" />
                                                )}
                                                {/* Badge de status */}
                                                <div className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full border-2 border-gray-900 flex items-center justify-center">
                                                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-pulse"></div>
                                                </div>
                                            </div>
                                            
                                            <div className="text-center space-y-2">
                                                <h3 className="text-xl sm:text-2xl font-bold text-white">
                                                    Andrés Cardona
                                                </h3>
                                                <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                                                    <span className="text-blue-400 text-sm font-medium">
                                                        {isSpanish ? 'Desarrollador De Software' : 'Full Stack Developer'}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Info adicional expandida */}
                                            <div className="w-full space-y-3 px-2">
                                                {/* Stats simplificados */}
                                                <motion.div 
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 0.2 }}
                                                    className="flex items-center justify-center space-x-3 text-sm text-gray-300"
                                                >
                                                    <div className="flex items-center space-x-1">
                                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                        <span>1.6+ {isSpanish ? 'años de experiencia' : 'years experience'}</span>
                                                    </div>
                                                </motion.div>

                                                {/* Tech Stack Icons */}
                                                <motion.div 
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 0.4 }}
                                                    className="flex flex-wrap justify-center gap-2"
                                                >
                                                    {techStack.map((tech, i) => (
                                                        <TechBadge key={tech} tech={tech} index={i} />
                                                    ))}
                                                </motion.div>

                                                {/* Location & Availability */}
                                                <motion.div 
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 0.7 }}
                                                    className="flex items-center justify-center space-x-4 text-xs text-gray-400 pb-2"
                                                >
                                                    <div className="flex items-center space-x-1">
                                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                        <span>Colombia</span>
                                                    </div>
                                                    <div className="flex items-center space-x-1">
                                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                                        <span>{isSpanish ? 'Disponible' : 'Available'}</span>
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Mobile Floating Tags - Siempre visibles en móvil */}
                <div className="sm:hidden mt-6 flex flex-wrap justify-center gap-2">
                    {mobileTagsSliced.map((tag, index) => (
                        <MobileTag key={tag.id} tag={tag} index={index} />
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
});

Card3D.displayName = 'Card3D';