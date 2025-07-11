import { useLanguage } from "@/core/context/LanguageContext";
import { Code2, Database, Rocket, Server, Terminal, Github, Linkedin } from "lucide-react";

const skills = [
    'JavaScript', 'TypeScript', 'React', 'TailwindCSS', 'Node.js', 'Express.js', 'NestJS', 'SQL', 'Docker'
];

const socialMediaLinks = [
    {
      icon : Github,
      name : 'Perfil de github',
      url : 'https://github.com/CardonaAndres'
    },
    {
      icon : Linkedin,
      name : 'Perfil de linkedin',
      url : ''
    },
];

export const useHeroHook = () => {
    const { language } = useLanguage();
    const isSpanish = language === 'ES';

    const floatingTags = [
        { 
            id: 1, 
            text: `${isSpanish ? 'Experto en JavaScript' : 'JavaScript Expert'}`, 
            icon: Code2, 
            color: 'from-yellow-400 via-yellow-300 to-yellow-400',
            position: { top: '-20px', left: '-60px' },
            mobilePosition: { top: '-15px', left: '-40px' }
        },
        { 
            id: 2, 
            text: `${isSpanish ? 'Arquitecto de TypeScript' : 'TS Architect'}`,
            icon: Terminal, 
            color: 'from-blue-500 to-cyan-500',
            position: { top: '5%', right: '-50px' },
            mobilePosition: { top: '-15px', right: '-30px' }
        },
        { 
            id: 3, 
            text: `${isSpanish ? 'Especialista en Node.js' : 'Node.js Specialist'}`,
            icon: Server, 
            color: 'from-green-500 to-emerald-500',
            position: { top: '53%', left: '-34%' },
            mobilePosition: { top: '40%', left: '-45px' }
        },
        { 
            id: 4, 
            text: `${isSpanish ? 'Arquitectura Backend' : 'Backend Expertise'}`, 
            icon: Database, 
            color: 'from-purple-500 to-pink-500',
            position: { top: '65%', right: '-70px' },
            mobilePosition: { top: '45%', right: '-40px' }
        },
        { 
            id: 5, 
            text: `${isSpanish ? 'Más de 1.6 años en la industria Tech' : '1.6+ Years in Tech'}`,
            icon: Rocket, 
            color: 'from-indigo-500 to-blue-500',
            position: { bottom: '-7%', right: '-20%' },
            mobilePosition: { bottom: '10px', right: '-30px' }
        },
    ];

    return {
        skills,
        floatingTags,
        socialMediaLinks
    }
}

