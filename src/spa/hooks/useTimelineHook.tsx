import type { FilterType, TimelineItem } from "../assets/ts/types";
import { Award, Briefcase, Building2, Code2, Globe, GraduationCap, Sparkles } from "lucide-react";

// Tipos de filtros
const types: FilterType[] = [
    { id: 'all', label: 'Todo', icon: Sparkles, color: 'from-blue-500 to-purple-500' },
    { id: 'work', label: 'Experiencia', icon: Briefcase, color: 'from-green-500 to-emerald-500' },
    { id: 'education', label: 'Educación', icon: GraduationCap, color: 'from-purple-500 to-pink-500' },
    { id: 'achievement', label: 'Logros', icon: Award, color: 'from-orange-500 to-red-500' },
];

// Datos del timeline
const timelineData: TimelineItem[] = [
  {
    id: 1,
    type: 'work',
    title: 'Desarrollador Fullstack',
    company: 'New Stetic S.A',
    location: 'Medellín, Colombia',
    date: '2025',
    current: true,
    description: 'Desarrollo de aplicaciones web escalables y de alto rendimiento con arquitectura de microservicios',
    achievements: [
      'Desarrollé New Stetic SST - Sistema de gestión de Seguridad y Salud en el Trabajo con arquitectura de microservicios',
      'Creé Reservify - Sistema de reservas para restaurantes con interfaces intuitivas y gestión en tiempo real',
      'Implementé UrbanWheels - Sistema avanzado de gestión de flotas de vehículos con diseño moderno y optimización de pagos',
      'Construí PymesWithFactus - Sistema de facturación electrónica para Colombia con cumplimiento DIAN'
    ],
    icon: Building2,
    color: 'from-blue-500 to-cyan-500'
  },
{
    id: 5,
    type: 'achievement',
    title: 'Liderazgo en Desarrollo de Software',
    company: 'New Stetic S.A',
    location: 'Medellín, Colombia',
    date: '2025',
    current: false,
    description: 'Reconocimiento por liderazgo técnico y mentoría en equipos de desarrollo',
    achievements: [
      'Liderazgo en proyectos de arquitectura de microservicios',
      'Mentoría y orientación a desarrolladores junior',
      'Optimización de rendimiento y buenas prácticas de código'
    ],
    icon: Award,
    color: 'from-yellow-500 to-amber-500'
  },
  {
    id: 2,
    type: 'education',
    title: 'Tecnólogo en Análisis y Desarrollo de Software',
    company: 'SENA',
    location: 'Itagüí, Colombia',
    date: '2022 - 2024',
    current: false,
    description: 'Formación técnica en desarrollo de software con énfasis en análisis de sistemas, programación y diseño de bases de datos',
    achievements: [
      'Especialización en análisis de sistemas y arquitectura de software',
      'Dominio de programación orientada a objetos y paradigmas de desarrollo',
      'Diseño y optimización de bases de datos relacionales',
      'Metodologías ágiles de desarrollo'
    ],
    icon: GraduationCap,
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 3,
    type: 'education',
    title: 'Formación en Inglés Profesional',
    company: 'SMART Academy',
    location: 'Itagüí, Colombia',
    date: '2023',
    current: false,
    description: 'Formación en habilidades lingüísticas avanzadas en inglés, enfocada en comunicación profesional y técnica',
    achievements: [
      'Nivel B2 en inglés profesional',
      'Comunicación técnica en inglés',
      'Habilidades de presentación y documentación',
      'Capacidad de trabajar en equipos internacionales'
    ],
    icon: Globe,
    color: 'from-purple-500 to-indigo-500'
  },
  {
    id: 4,
    type: 'achievement',
    title: 'Especialización en Tecnologías Full Stack',
    company: 'Autodidacta',
    location: 'Itagüí, Colombia',
    date: '2022 - Presente',
    current: true,
    description: 'Dominio completo del ecosistema JavaScript y tecnologías backend modernas',
    achievements: [
      'Maestría en JavaScript, TypeScript, React, Node.js, Express, NestJS',
      'Experiencia en Python, FastAPI, PHP, Laravel y Docker',
      'Dominio avanzado de SQL con MySQL, PostgreSQL y SQL Server',
      'Arquitectura de microservicios y desarrollo escalable'
    ],
    icon: Code2,
    color: 'from-orange-500 to-red-500'
  }
];

export const useTimelineHook = () => {
  return {
    types,
    timelineData
  }
}

