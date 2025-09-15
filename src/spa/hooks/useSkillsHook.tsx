import { useLanguage } from "@/core/context/LanguageContext";
import type {  LevelColors, SkillCategory, TechSkill, } from "../assets/ts/types";
import { Database, MonitorSmartphone, Server, Terminal } from "lucide-react";

const levelColors: LevelColors = {
    'Experto' : 'from-emerald-400 to-green-500',
    'Avanzado': 'from-blue-400 to-indigo-500',
    'Intermedio': 'from-yellow-400 to-orange-500',
    'Básico': 'from-gray-400 to-gray-500',
    'Expert': 'from-emerald-400 to-green-500',
    'Advanced': 'from-blue-400 to-indigo-500',
    'Intermediate': 'from-yellow-400 to-orange-500',
    'Basic': 'from-gray-400 to-gray-500'
};

export const useSkillsHook = () => {
    const isSpanish = useLanguage().language === 'ES';

    const defineSkillLevel : Record<string, TechSkill['level']> = {
        Expert: isSpanish ? 'Experto' : 'Expert',
        Advanced: isSpanish ? 'Avanzado' : 'Advanced',
        Intermediate: isSpanish ? 'Intermedio' : 'Intermediate',
        Basic: isSpanish ? 'Básico' : 'Basic'
    }

    const programmingLanguages: TechSkill[] = [
        { 
            name: 'JavaScript', 
            level: defineSkillLevel.Expert, 
            color: 'from-yellow-500 to-yellow-600',
            imageUrl: 'https://skillicons.dev/icons?i=javascript'
        },
        { 
            name: 'TypeScript', 
            level: defineSkillLevel.Advanced, 
            color: 'from-blue-500 to-blue-600',
            imageUrl: 'https://skillicons.dev/icons?i=typescript'
        },
        { 
            name: 'Python', 
            level: defineSkillLevel.Intermediate, 
            color: 'from-green-500 to-green-600',
            imageUrl: 'https://skillicons.dev/icons?i=python'
        },
        { 
            name: 'PHP',  
            level: defineSkillLevel.Intermediate, 
            color: 'from-purple-500 to-purple-600',
            imageUrl: 'https://skillicons.dev/icons?i=php'
        },
        { 
            name: 'Java', 
            level: defineSkillLevel.Basic, 
            color: 'from-red-500 to-red-600',
            imageUrl: 'https://skillicons.dev/icons?i=java'
        },
    ];

    const skillCategories: SkillCategory[] = [
        {
            title: 'Frontend',
            icon: MonitorSmartphone,
            color: 'from-purple-600 to-pink-600',
            skills: [
                { 
                    name: 'React', 
                    level: defineSkillLevel.Expert, 
                    color: 'from-cyan-500 to-blue-500',
                    imageUrl: 'https://skillicons.dev/icons?i=react'
                },
                { 
                    name: 'Next', 
                    level: defineSkillLevel.Intermediate, 
                    color: 'from-cyan-500 to-blue-500',
                    imageUrl: 'https://skillicons.dev/icons?i=next'
                },
                { 
                    name: 'Astro', 
                    level: defineSkillLevel.Intermediate, 
                    color: 'from-violet-500 to-gray-500',
                    imageUrl: 'https://skillicons.dev/icons?i=astro'
                },
                { 
                    name: 'Vue.js', 
                    level: defineSkillLevel.Basic, 
                    color: 'from-green-500 to-green-500',
                    imageUrl: 'https://skillicons.dev/icons?i=vue'
                },
                { 
                    name: 'Tailwind CSS', 
                    level: defineSkillLevel.Advanced, 
                    color: 'from-teal-500 to-cyan-500',
                    imageUrl: 'https://skillicons.dev/icons?i=tailwind'
                },
                { 
                    name: 'Bootstrap', 
                    level: defineSkillLevel.Basic, 
                    color: 'from-violet-500 to-violet-500',
                    imageUrl: 'https://skillicons.dev/icons?i=bootstrap'
                },
            ]
        },
        {
            title: 'Backend',
            icon: Server,
            color: 'from-green-600 to-emerald-600',
            skills: [
                { 
                    name: 'Node.js', 
                    level: defineSkillLevel.Expert, 
                    color: 'from-green-600 to-green-700',
                    imageUrl: 'https://skillicons.dev/icons?i=nodejs'
                },
                { 
                    name: 'Express.js', 
                    level: defineSkillLevel.Expert, 
                    color: 'from-gray-500 to-gray-600',
                    imageUrl: 'https://skillicons.dev/icons?i=express'
                },
                { 
                    name: 'NestJS', 
                    level: defineSkillLevel.Advanced, 
                    color: 'from-red-500 to-pink-500',
                    imageUrl: 'https://skillicons.dev/icons?i=nestjs'
                },
                { 
                    name: 'FastAPI', 
                    level: defineSkillLevel.Intermediate, 
                    color: 'from-teal-500 to-green-500',
                    imageUrl: 'https://skillicons.dev/icons?i=fastapi'
                },
                { 
                    name: 'Laravel', 
                    level: defineSkillLevel.Intermediate, 
                    color: 'from-red-600 to-red-700',
                    imageUrl: 'https://skillicons.dev/icons?i=laravel'
                },
            ]
        },
        {
            title: isSpanish ? 'Base de Datos' : 'Database',
            icon: Database,
            color: 'from-orange-600 to-red-600',
            skills: [
                { 
                    name: 'MySQL',  
                    level: defineSkillLevel.Advanced, 
                    color: 'from-blue-600 to-blue-700',
                    imageUrl: 'https://skillicons.dev/icons?i=mysql'
                },
                { 
                    name: 'PostgreSQL', 
                    level: defineSkillLevel.Advanced,  
                    color: 'from-blue-500 to-indigo-600',
                    imageUrl: 'https://skillicons.dev/icons?i=postgresql'
                },
                { 
                    name: 'MongoDB', 
                    level: defineSkillLevel.Basic,  
                    color: 'from-green-600 to-green-700',
                    imageUrl: 'https://skillicons.dev/icons?i=mongodb'
                },
                { 
                    name: 'SQL Server', 
                    level: defineSkillLevel.Intermediate,  
                    color: 'from-red-600 to-red-700',
                    imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg'
                },
                { 
                    name: 'SQLite', 
                    level: defineSkillLevel.Intermediate,  
                    color: 'from-gray-600 to-gray-700',
                    imageUrl: 'https://skillicons.dev/icons?i=sqlite'
                },
            ]
        },
        {
            title: 'DevOps & Tools',
            icon: Terminal,
            color: 'from-indigo-600 to-purple-600',
            skills: [
                { 
                    name: 'Docker', 
                    level: defineSkillLevel.Advanced, 
                    color: 'from-blue-500 to-blue-600',
                    imageUrl: 'https://skillicons.dev/icons?i=docker'
                },
                { 
                    name: 'Git', 
                    level: defineSkillLevel.Advanced, 
                    color: 'from-orange-600 to-red-600',
                    imageUrl: 'https://skillicons.dev/icons?i=git'
                },
                { 
                    name: 'GitHub', 
                    level: defineSkillLevel.Advanced, 
                    color: 'from-gray-600 to-gray-700',
                    imageUrl: 'https://skillicons.dev/icons?i=github'
                },
                { 
                    name: 'Nginx', 
                    level: defineSkillLevel.Intermediate, 
                    color: 'from-green-600 to-green-700',
                    imageUrl: 'https://skillicons.dev/icons?i=nginx'
                }
            ]
        }
    ];

  return {
    programmingLanguages,
    skillCategories,
    levelColors
  }
}