import { useLanguage } from "@/core/context/LanguageContext";
import type { LevelColors, SkillCategory, TechSkill, } from "../assets/ts/types";
import { 
    Activity, 
    Box, 
    Braces, 
    Code2, 
    CuboidIcon, 
    Database, 
    FileCode2, 
    GitBranch, 
    Hexagon, 
    Layers, 
    MonitorSmartphone, 
    Package, 
    Palette, 
    Server, 
    Terminal, 
    Workflow, 
    Zap 
} from "lucide-react";

export const useSkillsHook = () => {
    const isSpanish = useLanguage().language === 'ES';

    const defineSkillLevel : Record<string, TechSkill['level']> = {
        Expert: isSpanish ? 'Experto' : 'Expert',
        Advanced: isSpanish ? 'Avanzado' : 'Advanced',
        Intermediate: isSpanish ? 'Intermedio' : 'Intermediate',
        Basic: isSpanish ? 'Básico' : 'Basic'
    }

    const programmingLanguages: TechSkill[] = [
        { name: 'JavaScript', icon: Braces, level: defineSkillLevel.Expert, color: 'from-yellow-500 to-yellow-600' },
        { name: 'TypeScript', icon: FileCode2, level: defineSkillLevel.Advanced, color: 'from-blue-500 to-blue-600' },
        { name: 'Python', icon: Code2, level: defineSkillLevel.Intermediate, color: 'from-green-500 to-green-600' },
        { name: 'PHP', icon: Code2, level: defineSkillLevel.Intermediate, color: 'from-purple-500 to-purple-600' },
        { name: 'Java', icon: CuboidIcon, level: defineSkillLevel.Basic, color: 'from-red-500 to-red-600' },
    ];

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

    const skillCategories: SkillCategory[] = [
        {
            title: 'Frontend',
            icon: MonitorSmartphone,
            color: 'from-purple-600 to-pink-600',
            skills: [
                { name: 'HTML / CSS', icon: Box, level: defineSkillLevel.Expert, color: 'from-orange-500 to-red-500' },
                { name: 'React', icon: Layers, level: defineSkillLevel.Expert, color: 'from-cyan-500 to-blue-500' },
                { name: 'Astro', icon: Layers, level: defineSkillLevel.Intermediate, color: 'from-violet-500 to-gray-500' },
                { name: 'Vue.js', icon: Layers, level: defineSkillLevel.Basic, color: 'from-green-500 to-green-500' },
                { name: 'Tailwind CSS', icon: Palette, level: defineSkillLevel.Advanced, color: 'from-teal-500 to-cyan-500' },
                { name: 'Bootstrap', icon: Palette, level: defineSkillLevel.Basic, color: 'from-violet-500 to-violet-500' },
            ]
        },
        {
            title: 'Backend',
            icon: Server,
            color: 'from-green-600 to-emerald-600',
            skills: [
                { name: 'Node.js', icon: Hexagon, level: defineSkillLevel.Expert, color: 'from-green-600 to-green-700' },
                { name: 'Express.js', icon: Zap, level: defineSkillLevel.Expert, color: 'from-gray-500 to-gray-600' },
                { name: 'NestJS', icon: Package, level: defineSkillLevel.Advanced, color: 'from-red-500 to-pink-500' },
                { name: 'FastAPI', icon: Activity, level: defineSkillLevel.Intermediate, color: 'from-teal-500 to-green-500' },
                { name: 'Laravel', icon: Workflow, level: defineSkillLevel.Intermediate, color: 'from-red-600 to-red-700' },
            ]
        },
        {
            title: 'Base de Datos',
            icon: Database,
            color: 'from-orange-600 to-red-600',
            skills: [
                { name: 'MySQL', icon: Database, level: defineSkillLevel.Advanced, color: 'from-blue-600 to-blue-700' },
                { name: 'PostgreSQL', icon: Database, level: defineSkillLevel.Advanced,  color: 'from-blue-500 to-indigo-600' },
                { name: 'MongoDB', icon: Database, level: defineSkillLevel.Basic,  color: 'from-green-600 to-green-700' },
                { name: 'SQL Server', icon: Database, level: defineSkillLevel.Intermediate,  color: 'from-red-600 to-red-700' },
            ]
        },
        {
            title: 'DevOps & Tools',
            icon: Terminal,
            color: 'from-indigo-600 to-purple-600',
            skills: [
                { name: 'Docker', icon: Package, level: defineSkillLevel.Advanced, color: 'from-blue-500 to-blue-600' },
                { name: 'Git/GitHub', icon: GitBranch, level: defineSkillLevel.Advanced, color: 'from-gray-600 to-gray-700' },
                { name: 'Nginx', icon: Package, level: defineSkillLevel.Intermediate, color: 'from-green-600 to-green-700' },
                { name: 'CI/CD', icon: Workflow, level: defineSkillLevel.Basic, color: 'from-yellow-500 to-yellow-600' },
            ]
        }
    ];

  return {
    programmingLanguages,
    skillCategories,
    levelColors
  }
}


