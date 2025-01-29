import reservifyIMG from '../assets/imgs/ReservifyIMG.webp';
import UrbanWheels from '../assets/imgs/UrbanWheels.webp';
import NexoMigratorio from '../assets/imgs/NexoMigratorioIMG.webp';
import Spa from '../assets/imgs/Spa.webp'
import { useLenguage } from '../context/LanguageContext';

export const useProjects = () => {

    const { lenguage } = useLenguage();
    const isEnglish = lenguage === 'en';

    const projects = [
        {
            title: "Reservify",
            description: `${ isEnglish ? 'A reservation system for restaurants, with a simple and intuitive interface for both the client and the administrator.' : 'Un sistema de reservas para restaurantes, con una interfaz simple e intuitiva tanto para el cliente como para el administrador.' }`,
            tags: ["JavaScript", "React", "TailwindCSS", "Python", "FastAPI", "MySql", "Docker"],
            image: reservifyIMG,
            link : 'https://reservify-front.vercel.app'
        },
        {
            title: "UrbanWheels",
            description: `${ isEnglish ? 'An advanced system in development for the comprehensive management of vehicle fleets, reservations, and customers, optimizing operational efficiency, enhancing user experience, and facilitating strategic decision-making.' : 'Un sistema avanzado en desarrollo para la gestión integral de la flota de vehículos, las reservas y los clientes, optimizando la eficiencia operativa, mejorando la experiencia del usuario y facilitando la toma de decisiones estratégicas.' }`,
            tags: ["JavaScript","React", "TailwindCSS", "Node JS", "ExpressJS", "MySql"],
            image: UrbanWheels,
            link : 'https://github.com/CardonaAndres/UrbanWheelsClient'
        },
        {
            title: `${ isEnglish ? 'Care and Harmony ' : 'Cuidado Y Armonía' }`,
            description: `${ isEnglish ? 'A landing page for an emerging beauty salon, designed to boost its online visibility and increase sales. This page has been instrumental in connecting with more clients and providing them with an efficient and accessible online booking experience.' : 'Landing page para un salón de belleza emergente, diseñada para aumentar su visibilidad en línea y potenciar sus ventas. Esta página ha sido clave para conectar con más clientes y ofrecerles una experiencia de reserva en línea eficiente y accesible.' }`,
            tags: ["JavaScript", "React", "TailwindCSS"],
            image: Spa,
            link : 'https://centro-estetico-xi.vercel.app/'
        },
        {
            title: `${ isEnglish ? 'Nexo Migratorio LLC' : 'Nexo Migratorio LLC' }`,
            description: `${ isEnglish ? 'Complete and personalized advisory for your immigration processes in the USA, which led to a 45% increase in consultations after the website launch.' : 'Asesoría completa y personalizada para tus procesos migratorios en los EE.UU., lo que resultó en un aumento del 45% en las asesorías después del lanzamiento de la página web.' }`,
            tags: ["JavaScript", "React", "TailwindCSS"],
            image: NexoMigratorio,
            link : 'https://www.nexomigratorio.com/'
        },
    ];
    
    return { projects };
}
