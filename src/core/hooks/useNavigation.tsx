import { Briefcase, Code2, User } from "lucide-react";

export const useNavigation = () => {
    const navItems = [
        { id: 'about', label: 'Sobre mí', labelEn: 'About', icon: User },
        { id: 'projects', label: 'Proyectos', labelEn: 'Projects', icon: Code2 },
        { id: 'experience', label: 'Experiencia', labelEn: 'Experience', icon: Briefcase },
    ];

    return {
        navItems
    }
}

