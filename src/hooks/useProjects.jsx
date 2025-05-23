import reservifyIMG from '../assets/imgs/ReservifyIMG.webp';
import UrbanWheels from '../assets/imgs/UrbanWheels.webp';
import NexoMigratorio from '../assets/imgs/NexoMigratorioIMG.webp';
import Spa from '../assets/imgs/Spa.webp';
import Factus from '../assets/imgs/FactusIMG.webp';
import RojasPapas from '../assets/imgs/RojasPapas.webp';
import BellezaPerfecta from '../assets/imgs/BellezaPerfecta.webp';
import TrackingNewStetic from '../assets/imgs/TrackingNewStetic.webp';
import { useLenguage } from '../context/LanguageContext';

export const useProjects = () => {

    const { lenguage } = useLenguage();
    const isEnglish = lenguage === 'en';

    const projects = [
        {
            title: `${ isEnglish ? 'Perfect Beauty' : 'Belleza Perfecta' }`,
            description: `${ isEnglish ? 'Perfect Beauty is a comprehensive administrative system designed to optimize the operational, commercial, and financial management of the company of the same name, providing efficient and centralized control of its processes.' : 'Belleza Perfecta es un sistema administrativo integral diseñado para optimizar la gestión operativa, comercial y financiera de la empresa homónima, brindando un control eficiente y centralizado de sus procesos.' }`,
            tags: ["TypeScript", "NestJS", "React + TS", "TailwindCSS", "MySQL", "Docker"],
            image: BellezaPerfecta,
            link : 'https://belleza-perfecta.com'
        },
        {
            title: `Factus`,
            description: `${ isEnglish ? 'Electronic invoicing system designed for Colombia. It allows generating sales invoices with the mandatory format of the DIAN (National Tax and Customs Directorate), as well as managing products and contacts.' : 'Sistema de facturación electrónica diseñado para Colombia. Permite generar facturas de ventas con el formato obligatorio de la DIAN (Dirección de Impuestos y Aduanas Nacionales), así como gestionar productos y contactos.' }`,
            tags: ["JavaScript","React", "TailwindCSS", "Node JS", "Express JS", "MySql", "Docker"],
            image: Factus,
            link : 'https://www.factus.com.co/'
        },
        {
            title: "Reservify",
            description: `${ isEnglish ? 'A reservation system for restaurants, with a simple and intuitive interface for both the client and the administrator.' : 'Un sistema de reservas para restaurantes, con una interfaz simple e intuitiva tanto para el cliente como para el administrador.' }`,
            tags: ["JavaScript", "React", "TailwindCSS", "Python", "FastAPI", "MySql", "Docker"],
            image: reservifyIMG,
            link : 'https://reservify-front.vercel.app'
        },
        {
            title: "Tracking New Stetic",
            description: `${ isEnglish ? 'Proyecto orientado a gestionar la trazabilidad completa de cada producto de la empresa, con un enfoque tanto en el área de ventas como en los procesos productivos, permitiendo un seguimiento preciso y eficiente en todas las etapas.' : 'A project aimed at managing the complete traceability of each company product, with a focus on both the sales team and the production processes, enabling accurate and efficient tracking at every stage.' }`,
            tags: ["Python", "FastAPI", "HTML", "CSS", "JavaScript", "SQL Server"],
            image: TrackingNewStetic,
            link : 'https://tracking.newstetic.com'
        },
        {
            title: "UrbanWheels",
            description: `${ isEnglish ? 'An advanced system in development for the comprehensive management of vehicle fleets, reservations, and customers, optimizing operational efficiency, enhancing user experience, and facilitating strategic decision-making.' : 'Un sistema avanzado en desarrollo para la gestión integral de la flota de vehículos, las reservas y los clientes, optimizando la eficiencia operativa, mejorando la experiencia del usuario y facilitando la toma de decisiones estratégicas.' }`,
            tags: ["JavaScript","React", "TailwindCSS", "Node JS", "Express JS", "MySql"],
            image: UrbanWheels,
            link : 'https://github.com/CardonaAndres/UrbanWheelsClient'
        },
        {
            title: `${ isEnglish ? 'Rojas' : 'Rojas Papas' }`,
            description: `${ isEnglish ? 'Rojas, a restaurant chain specializing in salchipapas, located in the viewpoints of Las Palmas, Antioquia, Colombia.' : 'Rojas Papas, una cadena de restaurantes especializada en salchipapas ubicados en los miradores de Las Palmas, Antioquia, Colombia.' }`,
            tags: ["TypeScript", "React", "TailwindCSS"],
            image: RojasPapas,
            link : 'https://rojas-papas.vercel.app'
        },
        {
            title: `${ isEnglish ? 'Care and Harmony ' : 'Cuidado Y Armonía' }`,
            description: `${ isEnglish ? 'A landing page for an emerging beauty salon, designed to boost its online visibility and increase sales. This page has been instrumental in connecting with more clients and providing them with an efficient and accessible online booking experience.' : 'Landing page para un salón de belleza emergente, diseñada para aumentar su visibilidad en línea y potenciar sus ventas. Esta página ha sido clave para conectar con más clientes y ofrecerles una experiencia de reserva en línea eficiente y accesible.' }`,
            tags: ["JavaScript", "React", "TailwindCSS"],
            image: Spa,
            link : 'https://centro-estetico-ruby.vercel.app/'
        },
        {
            title: `${ isEnglish ? 'Nexo Migratorio LLC' : 'Nexo Migratorio LLC' }`,
            description: `${ isEnglish ? 'Complete and personalized advisory for your immigration processes in the USA, which led to a 45% increase in consultations after the website launch.' : 'Asesoría completa y personalizada para tus procesos migratorios en los EE.UU., lo que resultó en un aumento del 45% en las asesorías después del lanzamiento de la página web.' }`,
            tags: ["JavaScript", "React", "TailwindCSS"],
            image: NexoMigratorio,
            link : 'https://www.nexomigratorio.com/'
        }
    ];
    
    return { projects };
}
