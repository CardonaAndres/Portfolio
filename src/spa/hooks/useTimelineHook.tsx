import { useLanguage } from "@/core/context/LanguageContext";
import type { FilterType, TimelineItem } from "../assets/ts/types";
import { Award, Briefcase, Building2, Code, Code2, Globe, GraduationCap, Sparkles } from "lucide-react";

export const useTimelineHook = () => {
  const isSpanish = useLanguage().language === 'ES';

  // Tipos de filtros
  const types: FilterType[] = [
    { id: 'all', label: isSpanish ? 'Todo' : 'All', icon: Sparkles, color: 'from-blue-500 to-purple-500' },
    { id: 'work', label: isSpanish ? 'Experiencia' : 'Experience', icon: Briefcase, color: 'from-green-500 to-emerald-500' },
    { id: 'education', label: isSpanish ? 'Educación' : 'Education', icon: GraduationCap, color: 'from-purple-500 to-pink-500' },
    { id: 'achievement', label: isSpanish ? 'Logros' : 'Achievements', icon: Award, color: 'from-orange-500 to-red-500' },
  ];

  // Datos del timeline
  const timelineData: TimelineItem[] = [
    {
      id: 1,
      type: 'education',
      title: `${isSpanish ? 'Análisista y Desarrollador de Software' : 'Software Analysis and Development Technologist'}`,
      company: 'SENA',
      location: 'Itagüí, Colombia',
      date: '2021 - 2024',
      current: false,
      description: `${isSpanish ? 'Formación en desarrollo de software con énfasis en análisis de sistemas, programación y diseño de bases de datos' : 'Technical training in software development with emphasis on systems analysis, programming and database design'}`,
      achievements: [
        `${isSpanish ? 'Especialización en análisis de sistemas y arquitectura de software' : 'Specialization in systems analysis and software architecture'}`,
        `${isSpanish ? 'Dominio de programación orientada a objetos y paradigmas de desarrollo' : 'Mastery of object-oriented programming and development paradigms'}`,
        `${isSpanish ? 'Diseño y optimización de bases de datos relacionales' : 'Design and optimization of relational databases'}`,
        `${isSpanish ? 'Metodologías ágiles de desarrollo' : 'Agile development methodologies'}`
      ],
      icon: GraduationCap,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 2,
      type: 'education',
      title: `${isSpanish ? 'Formación en Inglés Profesional' : 'Professional English Training'}`,
      company: 'SMART Academy',
      location: 'Itagüí, Colombia',
      date: '2023',
      current: false,
      description: `${isSpanish ? 'Formación en habilidades lingüísticas avanzadas en inglés, enfocada en comunicación profesional y técnica' : 'Training in advanced English language skills, focused on professional and technical communication'}`,
      achievements: [
        `${isSpanish ? 'Nivel B2 en inglés profesional' : 'B2 level in professional English'}`,
        `${isSpanish ? 'Comunicación técnica en inglés' : 'Technical communication in English'}`,
        `${isSpanish ? 'Habilidades de presentación y documentación' : 'Presentation and documentation skills'}`,
        `${isSpanish ? 'Capacidad de trabajar en equipos internacionales' : 'Ability to work in international teams'}`
      ],
      icon: Globe,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 3,
      type: 'achievement',
      title: `${isSpanish ? 'Especialización en Tecnologías Full Stack' : 'Full Stack Technologies Specialization'}`,
      company: `${isSpanish ? 'Autodidacta' : 'Self-taught'}`,
      location: 'Itagüí, Colombia',
      date: `2024`,
      current: false,
      description: `${isSpanish ? 'Dominio completo del ecosistema JavaScript y tecnologías backend modernas' : 'Complete mastery of JavaScript ecosystem and modern backend technologies'}`,
      achievements: [
        `${isSpanish ? 'Maestría en JavaScript, TypeScript, React, Node.js, Express, NestJS' : 'Mastery in JavaScript, TypeScript, React, Node.js, Express, NestJS'}`,
        `${isSpanish ? 'Experiencia en Python, FastAPI, PHP, Laravel y Docker' : 'Experience in Python, FastAPI, PHP, Laravel and Docker'}`,
        `${isSpanish ? 'Dominio avanzado de SQL con MySQL, PostgreSQL y SQL Server' : 'Advanced SQL mastery with MySQL, PostgreSQL and SQL Server'}`,
        `${isSpanish ? 'Arquitectura de microservicios y desarrollo escalable' : 'Microservices architecture and scalable development'}`
      ],
      icon: Code2,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 4,
      type: 'work',
      title: `${isSpanish ? 'Desarrollador Fullstack' : 'Fullstack Developer'}`,
      company: `${isSpanish ? 'TuVisión, MiCódigo' : 'YourVision, MyCode'}`,
      location: 'Medellín, Colombia',
      date: '2024 - 2025',
      current: false,
      description: `${isSpanish ? 'Desarrollo freelance de aplicaciones web escalables y de alto rendimiento utilizando distintas arquitecturas según las necesidades del proyecto' : 'Freelance development of scalable and high-performance web applications using different architectures according to project requirements.'}`,
      achievements: [
        `${isSpanish ? 'Desarrollé Belleza Perfecta - Sistema administrativo para optimizar la gestión operativa, comercial y financiera de la empresa, brindando un control eficiente y centralizado de sus procesos.' : 'Developed Belleza Perfecta - Administrative system to optimize the operational, commercial, and financial management of the company, providing efficient and centralized control of its processes.'}`,
        `${isSpanish ? 'Creé Reservify - Sistema de reservas para restaurantes con interfaces intuitivas y gestión en tiempo real' : 'Created Reservify - Restaurant reservation system with intuitive interfaces and real-time management'}`,
        `${isSpanish ? 'Implementé UrbanWheels - Sistema avanzado de gestión de flotas de vehículos con diseño moderno y optimización de pagos' : 'Implemented UrbanWheels - Advanced vehicle fleet management system with modern design and payment optimization'}`,
        `${isSpanish ? 'Construí PymesWithFactus - Sistema de facturación electrónica para Colombia con cumplimiento DIAN' : 'Built PymesWithFactus - Electronic invoicing system for Colombia with DIAN compliance'}`
      ],
      icon: Code,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 5,
      type: 'work',
      title: `${isSpanish ? 'Desarrollador Fullstack' : 'Fullstack Developer'}`,
      company: 'New Stetic S.A',
      location: 'Medellín, Colombia',
      date: '2025/04 - 2025/10',
      current: false,
      description: `${isSpanish
        ? 'Desarrollo de aplicaciones web escalables y de alto rendimiento utilizando arquitectura de microservicios.'
        : 'Development of scalable, high-performance web applications using microservices architecture.'
        }`,
      achievements: [
        `${isSpanish
          ? 'Desarrollé New Stetic SST: Sistema de gestión de Seguridad y Salud en el Trabajo basado en microservicios.'
          : 'Developed New Stetic SST: Occupational Health and Safety management system built with a microservices architecture.'
        }`,
        `${isSpanish
          ? 'Desarrollé BuyOrder NS: Plataforma para la gestión integral de Órdenes de Compra Nacionales (OCN), con seguimiento, calificación de proveedores y automatización de procesos.'
          : 'Developed BuyOrder NS: Platform for comprehensive National Purchase Order (NPO) management, including tracking, supplier rating, and process automation.'
        }`,
      ],
      icon: Building2,
      color: 'from-teal-400 to-teal-500'
    },
    {
      id: 6,
      type: 'achievement',
      title: `${isSpanish ? 'Liderazgo en Desarrollo de Software' : 'Software Development Leadership'}`,
      company: 'New Stetic S.A',
      location: 'Medellín, Colombia',
      date: '2025',
      current: false,
      description: `${isSpanish ? 'Reconocimiento por liderazgo técnico y mentoría en equipos de desarrollo' : 'Recognition for technical leadership and mentoring in development teams'}`,
      achievements: [
        `${isSpanish ? 'Liderazgo en proyectos de arquitectura de microservicios' : 'Leadership in microservices architecture projects'}`,
        `${isSpanish ? 'Mentoría y orientación a desarrolladores junior' : 'Mentoring and guidance for junior developers'}`,
        `${isSpanish ? 'Optimización de rendimiento y buenas prácticas de código' : 'Performance optimization and code best practices'}`
      ],
      icon: Award,
      color: 'from-yellow-500 to-amber-500'
    },
    {
      id: 7,
      type: 'work',
      title: `${isSpanish ? 'Ingeniero de Software' : 'Software Engineer'}`,
      company: 'PedBox S.A.S',
      location: 'Itagüí, Colombia',
      date: '2025',
      current: true,
      description: `${isSpanish ? 'Ingeniero de software enfocado en el desarrollo backend de aplicaciones web escalables, orientado a la calidad, y la eficiencia en cada solución.' : 'Software engineer focused on backend development of scalable web applications, committed to quality, security, and efficiency in every solution.'}`,
      achievements: [
        `${isSpanish ? 'Agendarte: Rediseñé la interfaz optimizando la experiencia de usuario y fortaleciendo la identidad visual de marca, además de implementar integraciones de correo electrónico y mensajería WhatsApp' : 'Agendarte: Redesigned the interface optimizing user experience and strengthening brand visual identity, plus implemented email and WhatsApp messaging integrations'}`,
        `${isSpanish ? 'PedBox: Dirigí la transformación arquitectónica completa del sistema, migrando la stack tecnológica de Node.js vanilla a NestJS con React, logrando mejoras significativas en rendimiento y mantenibilidad' : 'PedBox: Led the complete architectural transformation of the system, migrating the tech stack from vanilla Node.js to NestJS with React, achieving significant improvements in performance and maintainability'}`,
        `${isSpanish ? 'CIPA – Acuerdos: Construí el frontend completo usando React/TypeScript y contribuí activamente en el backend desarrollando módulos nuevos y optimizando los existentes, incrementando el rendimiento general en 60%' : 'CIPA – Agreements: Built the complete frontend using React/TypeScript and actively contributed to the backend by developing new modules and optimizing existing ones, increasing overall performance by 60%'}`
      ],
      icon: Code2,
      color: 'from-purple-500 to-purple-500'
    },
  ];

  return {
    types,
    timelineData
  }
}
