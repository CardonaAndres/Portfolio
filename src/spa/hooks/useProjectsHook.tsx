import { useLanguage } from "@/core/context/LanguageContext";
import type { Project, ProjectSecondary } from "../assets/ts/types";

export const useProjectsHook = () => {
    const { language } = useLanguage();
    const isSpanish = language === 'ES';

    const projects : Project[] = [
        {
            id: 1,
            title: `${isSpanish ? 'Belleza Perfecta' : 'Perfect Beauty'}`,
            subtitle: `${isSpanish ? 'Plataforma de gestión administrativa y comercial para optimizar procesos internos.' : 'Administrative and commercial management platform to optimize internal processes.'}`,
            description: `${isSpanish ? 'Belleza Perfecta es un sistema administrativo integral diseñado para optimizar la gestión operativa, comercial y financiera de la empresa homónima, brindando un control eficiente y centralizado de sus procesos.' : 'Perfect Beauty is a comprehensive administrative system designed to optimize the operational, commercial, and financial management of the company of the same name, providing efficient and centralized control of its processes.'}`,
            longDescription: `${isSpanish ? 'Belleza Perfecta permite gestionar clientes, productos, usuarios y facturación interna, mejorando el control administrativo y comercial. Ofrece facturación automatizada, control de inventario, descarga de facturas en PDF, gestión de usuarios con roles, reportes filtrables y exportables, historial de actividades y una estructura adaptable para facilitar su crecimiento y despliegue.' : 'Perfect Beauty allows managing clients, products, users, and internal invoicing, improving administrative and commercial control. It offers automated invoicing, inventory control, PDF invoice downloads, user management with roles, filterable and exportable reports, activity history, and an adaptable structure to facilitate its growth and deployment.'}`,
            technologies: ["TypeScript", "React + TS", "Tailwind CSS", "Node.js", "NestJS", "MySQL", "Docker"],
            features : [
              `${isSpanish ? 'Gestión de Clientes' : 'Client Management'}`, 
              `${isSpanish ? 'Control de Inventario' : 'Inventory Control'}`, 
              `${isSpanish ? 'Reportes Personalizados' : 'Custom Reports'}`, 
              `${isSpanish ? 'Facturación Automatizada' : 'Automated Invoicing'}`
            ],
            role: `${isSpanish ? 'Desarrollador Full Stack' : 'Full Stack Developer'}`,
            duration: `2 ${isSpanish ? 'meses' : 'months'}`,
            teamSize: `1 ${isSpanish ? 'persona' : 'person'}`,
            impact: `${isSpanish ? 'Reducción del 65% en tiempos de gestión' : '65% reduction in management time'}`,
            color: "from-yellow-500 via-yellow-300 to-yellow-100",
            url : 'https://belleza-perfecta.com/',
            images_urls : [
                '/assets/imgs/projects/main/bellezaperfecta/BellezaPerfecta.webp',
            ],
            private: true
        },
        {
            id: 2,
            title: `Factus`,
            subtitle: `${isSpanish ? 'Facturación electrónica conforme a la DIAN, con gestión integral de productos y clientes.' : 'Electronic invoicing compliant with DIAN, with comprehensive management of products and clients.'}`,
            description: `${isSpanish ? 'Sistema de facturación electrónica diseñado para Colombia. Permite generar facturas de ventas con el formato obligatorio de la DIAN (Dirección de Impuestos y Aduanas Nacionales), así como gestionar productos y contactos.' : 'Electronic invoicing system designed for Colombia. It allows generating sales invoices with the mandatory format of the DIAN (National Tax and Customs Directorate), as well as managing products and contacts.'}`,
            longDescription: `${isSpanish ? 'Sistema de facturación electrónica diseñado para Colombia. Permite generar facturas de venta con el formato obligatorio de la DIAN (Dirección de Impuestos y Aduanas Nacionales), así como gestionar productos y contactos. Además, incluye funcionalidades como control de inventario, emisión de notas crédito y débito, descarga de documentos en PDF y XML, reportes financieros detallados, gestión de clientes y proveedores, múltiples roles de usuario, historial de actividades y una estructura escalable para facilitar su crecimiento y despliegue.' : 'Electronic invoicing system designed for Colombia. It allows the generation of sales invoices in the mandatory format required by the DIAN (Dirección de Impuestos y Aduanas Nacionales), as well as the management of products and contacts. Additionally, it includes features such as inventory control, issuance of credit and debit notes, PDF and XML document downloads, detailed financial reports, management of clients and suppliers, multiple user roles, activity history, and a scalable structure to support growth and deployment.'}`,
            technologies: ["JavaScript", "React + JSX", "Tailwind CSS", "Node.js", "Express.js", "MySQL", "Docker"],
            features : [
              `${isSpanish ? 'Generación de Facturas DIAN (PDF/XML)' : 'DIAN-Compliant Invoice Generation (PDF/XML)'}`,
              `${isSpanish ? 'Gestión de Clientes y Proveedores' : 'Client and Supplier Management'}`,
              `${isSpanish ? 'Estructura Escalable y Desplegable' : 'Scalable and Deployable Structure'}`,
              `${isSpanish ? 'Emisión de Notas Crédito y Débito' : 'Credit and Debit Notes Issuance'}`,
            ],
            role: `${isSpanish ? 'Desarrollador Backend' : 'Backend Developer'}`,
            duration: `8 ${isSpanish ? 'meses' : 'months'}`,
            teamSize: `6 ${isSpanish ? 'persona' : 'person'}`,
            impact: `${isSpanish ? 'Automatizó el proceso de facturación y mejoró el cumplimiento con la DIAN.' : 'Automated invoicing and improved DIAN compliance.'}`,
            color: "from-blue-500 via-blue-300 to-blue-100",
            url : 'https://www.factus.com.co/',
            images_urls : [
                '/assets/imgs/projects/main/factus/FactusIMG.webp'
            ],
            private: true
        },
        {
          id: 3,
          title: `Reservify`,
          subtitle: `${isSpanish ? 'Sistema de reservas en línea con control administrativo y experiencia optimizada para el cliente.' : 'Online reservation system with admin control and an optimized customer experience.'}`,
          description: `${isSpanish ? 'Sistema de reservas para restaurantes que permite a los clientes reservar mesas de forma fácil y rápida, y a los administradores gestionar horarios, usuarios y solicitudes desde una interfaz intuitiva.' : 'A restaurant reservation system that allows customers to easily book tables online and enables administrators to manage schedules, users, and requests through an intuitive interface.'}`,
          longDescription: `${isSpanish ? 'Sistema de reservas en línea diseñado para restaurantes. Ofrece una experiencia intuitiva tanto para el cliente como para el administrador. Permite gestionar reservas de mesas, controlar horarios de atención y disponibilidad, mantener un historial completo de reservas, gestionar usuarios y sus roles, así como recibir y administrar solicitudes o mensajes enviados por los usuarios. Todo esto en una plataforma accesible y fácil de usar que optimiza el proceso de atención y organización del restaurante.' : 'An online reservation system designed for restaurants. It provides an intuitive experience for both customers and administrators. Customers can book and manage table reservations, while administrators can control opening hours and table availability, maintain a full reservation history, manage users and their roles, and handle user messages or requests. All in a user-friendly platform that streamlines restaurant operations and customer service.'}`,
          technologies: ["JavaScript", "React + JSX", "Tailwind CSS", "Python", "FastAPI", "MySQL", "Docker"],
          features : [
            `${isSpanish ? 'Reservas de Mesas en Línea' : 'Online Table Reservations'}`,
            `${isSpanish ? 'Gestión de Horarios y Disponibilidad' : 'Schedule and Availability Management'}`,
            `${isSpanish ? 'Historial de Reservas' : 'Reservation History'}`,
            `${isSpanish ? 'Gestión de Solicitudes de Usuarios' : 'User Request Management'}`
          ],
          role: `${isSpanish ? 'Desarrollador Full Stack' : 'Full Stack Developer'}`,
          duration: `${isSpanish ? '1 mes' : '1 month'}`,
          teamSize: `1 ${isSpanish ? 'persona' : 'person'}`,
          impact: `${isSpanish ? 'Digitalizó el proceso de reservas, reduciendo tiempos de atención y mejorando la experiencia del cliente.' : 'Digitalized the reservation process, reducing response times and improving customer experience.'}`,
          color: "from-purple-700 via-purple-400 to-purple-200",
          url : 'https://reservify-front.vercel.app/',
          images_urls : [
              '/assets/imgs/projects/main/reservify/ReservifyIMG.webp'
          ],
          private: false
        },
        {
          id: 4,
          title: `UrbanWheels`,
          subtitle: `${isSpanish ? 'Gestión integral de flota, reservas y clientes en un solo sistema eficiente.' : 'Comprehensive management of fleet, bookings, and clients in one efficient system.'}`,
          description: `${isSpanish ? 'Sistema avanzado para la gestión de flotas de vehículos, reservas y clientes, que mejora la eficiencia operativa y la experiencia del usuario.' : 'Advanced system for managing vehicle fleets, bookings, and clients, enhancing operational efficiency and user experience.'}`,
          longDescription: `${isSpanish ? 'UrbanWheels es un sistema avanzado para la gestión integral de la flota de vehículos, las reservas y los clientes. Centraliza y optimiza procesos operativos como el control de disponibilidad, la administración de clientes, la planificación de reservas y el seguimiento de vehículos. Proporciona una experiencia fluida para los usuarios y herramientas analíticas para facilitar decisiones estratégicas.' : 'UrbanWheels is an advanced system for the comprehensive management of vehicle fleets, bookings, and clients. It centralizes and optimizes operational processes such as availability tracking, client administration, booking scheduling, and vehicle monitoring. It delivers a seamless user experience and provides analytical tools to support strategic decision-making.'}`,
          technologies: ["JavaScript", "React + JSX", "Tailwind CSS", "Python", "FastAPI", "MySQL", "Docker"],
          features : [
            `${isSpanish ? 'Gestión de Flotas de Vehículos' : 'Fleet Management'}`,
            `${isSpanish ? 'Reservas de Vehículos en Línea' : 'Online Vehicle Booking'}`,
            `${isSpanish ? 'Gestión de Clientes y sus Historiales' : 'Client Management with History'}`,
            `${isSpanish ? 'Reportes Operativos y Análisis' : 'Operational Reports & Analytics'}`,
          ],
          role: `${isSpanish ? 'Desarrollador Full Stack' : 'Full Stack Developer'}`,
          duration: `${isSpanish ? '4 meses' : '4 months'}`,
          teamSize: `3 ${isSpanish ? 'persona' : 'person'}`,
          impact: `${isSpanish ? 'Mejoró la eficiencia operativa y redujo los errores en reservas y gestión de flota.' : 'Improved operational efficiency and reduced errors in bookings and fleet management.'}`,
          color: "from-red-700 via-red-400 to-red-200",
          url : 'https://github.com/CardonaAndres/UrbanWheelsClient',
          images_urls : [
              '/assets/imgs/projects/main/urbanwheels/UrbanWheels.webp'
          ],
          private: false
        }
    ];

    const secondaryProjects : ProjectSecondary[] = [
      {
        id: 1,
        title: 'Nexo Migratorio LLC',
        description: `${isSpanish ? 'Asesoría completa y personalizada para tus procesos migratorios en los EE.UU., lo que resultó en un aumento del 45% en las asesorías después del lanzamiento de la página web.' : 'Complete and personalized advisory for your immigration processes in the USA, which led to a 45% increase in consultations after the website launch.'}`,
        category: 'landing',
        technologies: ['JavaScript', 'React', 'Tailwind'],
        image: '/assets/imgs/projects/secondary/nexomigratorio.webp',
        color: 'blue-500',
        github: 'https://github.com/CardonaAndres/NexoMigratorioLLC',
        demo: 'https://www.nexomigratorio.com',
        features: ['Responsive', 'Animaciones', 'SEO Optimizado']
      },
      {
        id: 2,
        title: `${isSpanish ? 'Grupo' : 'Group'} Coactiva S.A.S`,
        description: `${isSpanish ? 'Agencia líder en recuperación de cartera en Colombia y América Latina. La plataforma presenta sus servicios especializados en gestión de cartera vencida, destacando su cobertura regional, experiencia y enfoque tecnológico. El diseño se enfocó en la usabilidad, la confianza del usuario y la conversión de clientes potenciales.' : 'Leading debt recovery agency in Colombia and Latin America. The platform showcases their specialized services in delinquent portfolio management, highlighting their regional reach, experience, and technology-driven approach. The design focused on usability, user trust, and converting potential clients.'}`,
        category: 'landing',
        technologies: ['TypeScript', 'React', 'Tailwind'],
        image: '/assets/imgs/projects/secondary/coactivasas.webp',
        color: 'green-500',
        github: 'https://github.com/CardonaAndres/GrupoCOActivaSAS',
        demo: 'https://www.grupocoactivasas.com/',
        features: ['Galería', 'Transiciones', 'Dark Mode']
      },
      {
        id: 3,
        title: `${isSpanish ? 'Cuidado y Armonia' : 'Care and Harmony'}`,
        description: `${isSpanish ? 'Landing page para un salón de belleza emergente, diseñada para aumentar su visibilidad en línea y potenciar sus ventas. Esta página ha sido clave para conectar con más clientes y ofrecerles una experiencia de reserva en línea eficiente y accesible.' : 'A landing page for an emerging beauty salon, designed to boost its online visibility and increase sales. This page has been instrumental in connecting with more clients and providing them with an efficient and accessible online booking experience.'}`,
        category: 'web',
        technologies: ['JavaScript', 'React', 'Tailwind'],
        image: '/assets/imgs/projects/secondary/cuidado_y_armomia.webp',
        color: 'rose-500',
        github: 'https://github.com/CardonaAndres/CentroEstetico',
        demo: 'https://centro-estetico-ruby.vercel.app/',
        features: ['Tiempo Real', 'PWA', 'Multi-idioma']
      },
      {
        id: 4,
        title: 'Cuidado y Armonia | Portafolio de servicios',
        description: `${isSpanish ? '¡Portafolio de Servicios de Cuidado Armonía! Este proyecto presenta de forma moderna y accesible los servicios ofrecidos por Cuidado Armonía, enfocados en el bienestar, el cuidado personal y la armonía interior.' : 'Cuidado Armonía Services Portfolio! This project presents the services offered by Cuidado Armonía in a modern and accessible way, focusing on well-being, personal care, and inner harmony.'}`,
        category: 'web',
        technologies: ['Vue.js', 'Vuetify', 'Firebase'],
        image: '/assets/imgs/projects/secondary/portafolio_de_servicios_cuidado_y_armonia.webp',
        color: 'purple-500',
        github: 'https://github.com/CardonaAndres/portafolio-cuidado-armonia',
        demo: 'https://servicios-cuidado-y-armonia.vercel.app/',
        features: ['Tiempo Real', 'PWA', 'Multi-idioma']
      }
    ];

    return {
        projects,
        secondaryProjects
    }
}
