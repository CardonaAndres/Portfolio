import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { useLanguage } from '@/core/context/LanguageContext';
import { useHeroHook } from '../hooks/useHeroHook';
import { Mail } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// Constantes fuera del hook para evitar recreación
const PARALLAX_FACTOR = 0.3;
const PARTICLES_COUNT = 25;
const ANIMATION_DURATIONS = {
  gradient: 5,
  orb1: 8,
  orb2: 10,
  particles: 2
} as const;

// Tipos
interface ContactInfo {
  href: string;
  icon: LucideIcon;
  text: string;
  type: 'email';
}

interface MousePosition {
  x: number;
  y: number;
}

interface UseHeroLogicReturn {
  // Estados
  mousePosition: MousePosition;
  isHovered: boolean;
  setIsHovered: (value: boolean) => void;
  isMobile: boolean;
  scrollY: number;
  
  // Datos computados
  isSpanish: boolean;
  specialtyTags: string[];
  contactInfo: ContactInfo[];
  parallaxY: number;
  particleKeys: number[];
  
  // Estilos
  gridPatternStyle: {
    backgroundImage: string;
    backgroundSize: string;
  };
  
  // Handlers
  handleProjectsClick: () => void;
  
  // Contexto
  texts: any;
  socialMediaLinks: any[];
  
  // Constantes
  ANIMATION_DURATIONS: typeof ANIMATION_DURATIONS;
  PARTICLES_COUNT: typeof PARTICLES_COUNT;
}

export const useHeroLogic = (): UseHeroLogicReturn => {
  const { texts, language, languages } = useLanguage();
  const { socialMediaLinks } = useHeroHook();
  
  // Referencias para optimizar el manejo de eventos
  const rafRef = useRef<number | undefined>(undefined);
  const lastScrollY = useRef(0);
  const lastMousePosition = useRef<MousePosition>({ x: 0, y: 0 });
  
  // Estados
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Valores memoizados con tipado estricto
  const isSpanish = useMemo(() => 
    language === languages[1]?.code, 
    [language, languages]
  );
  
  const specialtyTags = useMemo(() => [
    isSpanish ? 'Especialista Backend' : 'Backend Specialist',
    isSpanish ? 'Experto JavaScript' : 'JavaScript Expert',
  ], [isSpanish]);

  const contactInfo = useMemo((): ContactInfo[] => [
    {
      href: "mailto:11cardona31@gmail.com",
      icon: Mail,
      text: "11cardona31@gmail.com",
      type: "email"
    }
  ], []);

  // Efecto parallax memoizado
  const parallaxY = useMemo(() => 
    Math.round(scrollY * PARALLAX_FACTOR), 
    [scrollY]
  );

  // Array de partículas memoizado
  const particleKeys = useMemo(() => 
    Array.from({ length: PARTICLES_COUNT }, (_, i) => i), 
    []
  );

  // Estilos memoizados
  const gridPatternStyle = useMemo(() => ({
    backgroundImage: `
      linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)
    `,
    backgroundSize: '80px 80px'
  }), []);

  // Event handlers optimizados con RAF throttling
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (rafRef.current) return;
    
    rafRef.current = requestAnimationFrame(() => {
      const newPosition = { x: e.clientX, y: e.clientY };
      
      // Solo actualizar si hay cambio significativo (threshold de 5px)
      if (
        Math.abs(newPosition.x - lastMousePosition.current.x) > 5 ||
        Math.abs(newPosition.y - lastMousePosition.current.y) > 5
      ) {
        setMousePosition(newPosition);
        lastMousePosition.current = newPosition;
      }
      rafRef.current = undefined;
    });
  }, []);

  const handleScroll = useCallback(() => {
    if (rafRef.current) return;
    
    rafRef.current = requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;
      
      // Solo actualizar si hay cambio significativo (threshold de 2px)
      if (Math.abs(currentScrollY - lastScrollY.current) > 2) {
        setScrollY(currentScrollY);
        lastScrollY.current = currentScrollY;
      }
      rafRef.current = undefined;
    });
  }, []);

  const checkMobile = useCallback(() => {
    const newIsMobile = window.innerWidth < 768;
    setIsMobile(prevIsMobile => 
      prevIsMobile !== newIsMobile ? newIsMobile : prevIsMobile
    );
  }, []);

  const handleProjectsClick = useCallback(() => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  // Setup de event listeners con cleanup optimizado
  useEffect(() => {
    checkMobile();
    
    // Usar passive listeners para mejor rendimiento
    const options: AddEventListenerOptions = { passive: true };
    
    window.addEventListener('mousemove', handleMouseMove, options);
    window.addEventListener('scroll', handleScroll, options);
    window.addEventListener('resize', checkMobile, options);
    
    return () => {
      // Limpiar RAF pendiente
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, [handleMouseMove, handleScroll, checkMobile]);

  return {
    // Estados
    mousePosition,
    isHovered,
    setIsHovered,
    isMobile,
    scrollY,
    
    // Datos computados
    isSpanish,
    specialtyTags,
    contactInfo,
    parallaxY,
    particleKeys,
    
    // Estilos
    gridPatternStyle,
    
    // Handlers
    handleProjectsClick,
    
    // Contexto
    texts,
    socialMediaLinks,
    
    // Constantes
    ANIMATION_DURATIONS,
    PARTICLES_COUNT
  };
};