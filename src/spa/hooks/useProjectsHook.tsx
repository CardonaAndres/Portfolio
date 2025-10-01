import { useLanguage } from "@/core/context/LanguageContext";
import type { Project, ProjectSecondary } from "../assets/ts/types";

export const useProjectsHook = () => {
    const { language } = useLanguage();
    const isSpanish = language === 'ES';

    const projects : Project[] = [
        {
          id: 1,
          title: `${isSpanish ? 'New Stetic SST' : 'New Stetic SG-SST'}`,
          subtitle: `${isSpanish ? 'Sistema integral de Seguridad y Salud en el Trabajo basado en microservicios.' : 'Comprehensive Occupational Health and Safety system based on microservices.'}`,
          description: `${isSpanish ? 'Plataforma modular para la gestión de personal, exámenes médicos, inspecciones, accidentalidad y equipos de protección personal.' : 'Modular platform for managing personnel, medical exams, inspections, accidents, and personal protective equipment.'}`,
          longDescription: `${isSpanish ? 'El proyecto SST está diseñado bajo una arquitectura de microservicios que integra módulos clave para la gestión de seguridad y salud en el trabajo. Incluye ingreso y seguimiento médico de personal, vigilancia epidemiológica, control de EPP y ergonomía, inspecciones de seguridad y gestión de accidentalidad e higiene ocupacional. Con autenticación centralizada por JWT, comunicación RESTful y cumplimiento de normativas legales, proporciona una solución robusta, escalable y adaptable a las necesidades empresariales.' : 'The SST project is designed with a microservices architecture integrating key modules for occupational health and safety management. It includes personnel onboarding and medical monitoring, epidemiological surveillance, PPE and ergonomics control, safety inspections, and accident and occupational hygiene management. With centralized JWT authentication, RESTful communication, and compliance with legal requirements, it provides a robust, scalable, and adaptable solution for business needs.'}`,
          technologies: ["JavaScript", "TypeScript", "Node.js", "Express.js", "NestJS", "React", "Tailwind CSS", "SQL Server", "Docker", "Docker Compose", "Nginx", "Microservices"],
          features : [
            `${isSpanish ? 'Gestión de Personal y Seguimiento Médico' : 'Personnel Management & Medical Monitoring'}`, 
            `${isSpanish ? 'Vigilancia Epidemiológica y Salud Ocupacional' : 'Epidemiological Surveillance & Occupational Health'}`, 
            `${isSpanish ? 'Control de EPP, Ergonomía e Inspecciones' : 'PPE, Ergonomics & Inspections Control'}`, 
            `${isSpanish ? 'Gestión de Accidentalidad y Seguridad Laboral' : 'Accident Management & Workplace Safety'}`
          ],
          role: `${isSpanish ? 'Desarrollador Full Stack Líder' : 'Lead Full Stack Developer'}`,
          duration: `4 ${isSpanish ? 'meses' : 'months'}`,
          teamSize: `1 ${isSpanish ? 'persona' : 'person'}`,
          impact: `${isSpanish ? 'Digitalización completa de procesos de SST, mejorando trazabilidad y cumplimiento legal.' : 'Full digitization of OHS processes, improving traceability and legal compliance.'}`,
          color: "from-teal-500 via-cyan-300 to-teal-100",
          url : 'https://sst.newstetic.com',
          github_url: 'https://github.com/CardonaAndres/NewStetic-SST-CLIENT',
          images_urls : [
              '/assets/imgs/projects/main/SstNS/img1.webp'
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
          title: `BuyOrder NS`,
          subtitle: `${isSpanish ? 'Sistema de gestión de órdenes de compra nacionales con arquitectura de microservicios' : 'National purchase order management system with microservices architecture'}`,
          description: `${isSpanish ? 'Plataforma web para la gestión y seguimiento de órdenes de compra nacionales (OCN), mejorando la comunicación con proveedores, el control logístico del almacén y la calificación del cumplimiento de los proveedores.' : 'Web platform for managing and tracking national purchase orders (NPO), improving supplier communication, warehouse logistics control, and supplier compliance rating.'}`,
          longDescription: `${isSpanish ? 'BuyOrder NS es una plataforma enfocada en la gestión integral de órdenes de compra nacionales. El sistema incluye tres módulos principales: Seguimiento OCN que permite envío de recordatorios automáticos a proveedores dos veces por semana, un formulario donde los proveedores pueden comentar sobre ítems específicos y la generación automática de cartas de atraso para órdenes no cumplidas. El módulo de Almacén facilita al personal registrar la recepción física de productos con un simple botón por ítem. El módulo de Calificación evalúa el desempeño de proveedores calculando porcentajes de cumplimiento basados en fechas de entrega y motivos de retraso. Todo el sistema está protegido con autenticación centralizada y roles diferenciados.' : 'BuyOrder NS is a platform focused on comprehensive management of national purchase orders. The system includes three main modules: NPO Tracking that enables automatic reminder sending to suppliers twice a week, a form where suppliers can comment on specific items, and automatic generation of delay letters for unfulfilled orders. The Warehouse module allows staff to easily register physical product reception with a simple button per item. The Rating module evaluates supplier performance by calculating compliance percentages based on delivery dates and delay reasons. The entire system is protected with centralized authentication and differentiated roles.'}`,
          technologies: ["TypeScript", "React", "Tailwind CSS", "Node.js", "NestJS", "SQL Server", "Microservices", "Docker", "Docker Compose", "Nginx"],
          features: [
            `${isSpanish ? 'Seguimiento OCN con recordatorios automáticos' : 'NPO Tracking with automatic reminders'}`, 
            `${isSpanish ? 'Gestión de recepción en almacén' : 'Warehouse reception management'}`, 
            `${isSpanish ? 'Sistema de calificación de proveedores' : 'Supplier rating system'}`, 
            `${isSpanish ? 'Gestión automática de cartas de atraso' : 'Automatic delay letter generation'}`
          ],
          role: `${isSpanish ? 'Desarrollador Full Stack Líder' : 'Lead Full Stack Developer'}`,
          duration: `${isSpanish ? '2 meses' : '2 months'}`,
          teamSize: `2 ${isSpanish ? 'personas' : 'people'}`,
          impact: `${isSpanish ? 'Automatización del seguimiento de órdenes de compra, mejora en la comunicación con proveedores y optimización del control logístico.' : 'Automation of purchase order tracking, improved supplier communication, and optimized logistics control.'}`,
          color: "from-teal-500 via-red-400 to-red-200",
          url: 'https://buyorder.newstetic.com',
          github_url: 'https://github.com/CardonaAndres/BuyOrder-NewStetic',
          images_urls: [
            '/assets/imgs/projects/main/BuyOrderNS/img1.webp'
          ],
          private: true
        },
        {
          id: 4,
          title: `${isSpanish ? 'Belleza Perfecta' : 'Perfect Beauty'}`,
          subtitle: `${isSpanish ? 'Plataforma de gestión administrativa y comercial para optimizar procesos internos.' : 'Administrative and commercial management platform to optimize internal processes.'}`,
          description: `${isSpanish ? 'Belleza Perfecta es un sistema administrativo integral diseñado para optimizar la gestión operativa, comercial y financiera de la empresa, brindando un control eficiente y centralizado de sus procesos.' : 'Perfect Beauty is a comprehensive administrative system designed to optimize the operational, commercial, and financial management of the company of the same name, providing efficient and centralized control of its processes.'}`,
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
          url : 'https://belleza-perfecta.vercel.app/',
          images_urls : [
              '/assets/imgs/projects/main/bellezaperfecta/BellezaPerfecta.webp'
          ],
          private: true
        },
        {
          id: 5,
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
          id: 6,
          title: `UrbanWheels`,
          subtitle: `${isSpanish ? 'Gestión integral de flota, reservas y clientes en un solo sistema eficiente.' : 'Comprehensive management of fleet, bookings, and clients in one efficient system.'}`,
          description: `${isSpanish ? 'Sistema avanzado para la gestión de flotas de vehículos, reservas y clientes, que mejora la eficiencia operativa y la experiencia del usuario.' : 'Advanced system for managing vehicle fleets, bookings, and clients, enhancing operational efficiency and user experience.'}`,
          longDescription: `${isSpanish ? 'UrbanWheels es un sistema avanzado para la gestión integral de la flota de vehículos, las reservas y los clientes. Centraliza y optimiza procesos operativos como el control de disponibilidad, la administración de clientes, la planificación de reservas y el seguimiento de vehículos. Proporciona una experiencia fluida para los usuarios y herramientas analíticas para facilitar decisiones estratégicas.' : 'UrbanWheels is an advanced system for the comprehensive management of vehicle fleets, bookings, and clients. It centralizes and optimizes operational processes such as availability tracking, client administration, booking scheduling, and vehicle monitoring. It delivers a seamless user experience and provides analytical tools to support strategic decision-making.'}`,
          technologies: ["JavaScript", "React + JSX", "Tailwind CSS", "Node.js", "Express.js", "MySQL"],
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
          url : '',
          github_url : 'https://github.com/CardonaAndres/UrbanWheelsClient',
          images_urls : [
              '/assets/imgs/projects/main/urbanwheels/UrbanWheels.webp'
          ],
          private: false
        }
    ];

    const secondaryProjects : ProjectSecondary[] = [
      {
        id: 1,
        title: 'Auth NS (New Stetic S.A)',
        description: `${isSpanish ? 'API de autenticación centralizada para New Stetic S.A., que valida usuarios vía Active Directory (LDAP) y BUK. Ofrece inicio de sesión seguro, sin almacenar credenciales localmente, y es extensible a múltiples métodos de autenticación.' : 'Centralized authentication API for New Stetic S.A., validating users via Active Directory (LDAP) and BUK. Provides secure login without local credential storage and is extensible to multiple authentication methods.'}`,
        category: 'landing',
        technologies: ['JavaScript', 'Node.js', 'Express.js', 'LDAP', 'Docker'],
        image: '/assets/imgs/projects/secondary/authNs.webp',
        color: 'teal-500',
        github: 'https://github.com/CardonaAndres/MS-Auth-NewStetic',
      },
      {
        id: 2,
        title: 'Nexo Migratorio LLC',
        description: `${isSpanish ? 'Asesoría completa y personalizada para tus procesos migratorios en los EE.UU., lo que resultó en un aumento del 45% en las asesorías después del lanzamiento de la página web.' : 'Complete and personalized advisory for your immigration processes in the USA, which led to a 45% increase in consultations after the website launch.'}`,
        category: 'landing',
        technologies: ['JavaScript', 'React', 'Tailwind'],
        image: '/assets/imgs/projects/secondary/nexomigratorio.webp',
        color: 'blue-500',
        github: 'https://github.com/CardonaAndres/NexoMigratorioLLC',
        demo: 'https://www.nexomigratorio.com',
      },
      {
        id: 3,
        title: `${isSpanish ? 'Grupo' : 'Group'} Coactiva S.A.S`,
        description: `${isSpanish ? 'Agencia líder en recuperación de cartera en Colombia y América Latina. La plataforma presenta sus servicios especializados en gestión de cartera vencida, destacando su cobertura regional, experiencia y enfoque tecnológico.' : 'Leading debt recovery agency in Colombia and Latin America. The platform showcases their specialized services in delinquent portfolio management, highlighting their regional reach, experience, and technology-driven approach.'}`,
        category: 'landing',
        technologies: ['TypeScript', 'React', 'Tailwind'],
        image: '/assets/imgs/projects/secondary/coactivasas.webp',
        color: 'green-500',
        github: 'https://github.com/CardonaAndres/GrupoCOActivaSAS',
        demo: 'https://www.grupocoactivasas.com/',
      },
      {
        id: 4,
        title: `${isSpanish ? 'Cuidado y Armonia' : 'Care and Harmony'}`,
        description: `${isSpanish ? 'Landing page para un salón de belleza emergente, diseñada para aumentar su visibilidad en línea y potenciar sus ventas. Esta página ha sido clave para conectar con más clientes y ofrecerles una experiencia de reserva en línea eficiente y accesible.' : 'A landing page for an emerging beauty salon, designed to boost its online visibility and increase sales. This page has been instrumental in connecting with more clients and providing them with an efficient and accessible online booking experience.'}`,
        category: 'web',
        technologies: ['JavaScript', 'React', 'Tailwind'],
        image: '/assets/imgs/projects/secondary/cuidado_y_armomia.webp',
        color: 'rose-500',
        github: 'https://github.com/CardonaAndres/CentroEstetico',
        demo: 'https://centro-estetico-ruby.vercel.app/',
      },
      {
        id: 5,
        title: `${isSpanish ? 'Cuidado y Armonia | Portafolio de servicios' : 'Care and Harmony | Services Portfolio'}`,
        description: `${isSpanish ? '¡Portafolio de Servicios de Cuidado Armonía! Este proyecto presenta de forma moderna y accesible los servicios ofrecidos por Cuidado Armonía, enfocados en el bienestar, el cuidado personal y la armonía interior.' : 'Cuidado Armonía Services Portfolio! This project presents the services offered by Cuidado Armonía in a modern and accessible way, focusing on well-being, personal care, and inner harmony.'}`,
        category: 'web',
        technologies: ['TypeScript', 'React', 'Tailwind'],
        image: '/assets/imgs/projects/secondary/portafolio_de_servicios_cuidado_y_armonia.webp',
        color: 'purple-500',
        github: 'https://github.com/CardonaAndres/portafolio-cuidado-armonia',
        demo: 'https://servicios-cuidado-y-armonia.vercel.app/',
      },
      {
        id: 6,
        title: `Hanna's MakeUp`,
        description: `${isSpanish ? 'Tienda en línea desarrollada en Shopify por requerimiento del cliente para la marca Hanna\'s Makeup, diseñada para ofrecer una experiencia de compra moderna, intuitiva y alineada con su identidad.' : 'Online store built in Shopify at the client’s request for the brand Hanna\'s Makeup, designed to provide a modern, intuitive shopping experience aligned with their brand identity.'}`,
        category: 'web',
        technologies: ['Shopify'],
        image: '/assets/imgs/projects/secondary/hannas.webp',
        color: 'gray-500',
        demo: 'https://www.hannasmakeup.com/',
      }
    ];

    return {
        projects,
        secondaryProjects
    }
}
