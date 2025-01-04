import reservifyIMG from '../assets/imgs/ReservifyIMG.png';
import { useLenguage } from '../context/LanguageContext';

export const useProjects = () => {

    const { lenguage } = useLenguage();
    const isEnglish = lenguage === 'en';

    const projects = [
        {
            title: "Reservify",
            description: `${ isEnglish ? 'A reservation system for restaurants, with a simple and intuitive interface for both the client and the administrator.' : 'Un sistema de reservas para restaurantes, con una interfaz simple e intuitiva tanto para el cliente como para el administrador.' }`,
            tags: ["React", "TailwindCSS", "Python", "FastAPI", "MySql"],
            image: reservifyIMG,
            link : 'https://reservify-front.vercel.app'
        },
        {
            title: "Reservify",
            description: `${ isEnglish ? 'A reservation system for restaurants, with a simple and intuitive interface for both the client and the administrator.' : 'Un sistema de reservas para restaurantes, con una interfaz simple e intuitiva tanto para el cliente como para el administrador.' }`,
            tags: ["React", "TailwindCSS", "Python", "FastAPI", "MySql"],
            image: reservifyIMG,
            link : 'https://reservify-front.vercel.app'
        },
        {
            title: "Reservify",
            description: `${ isEnglish ? 'A reservation system for restaurants, with a simple and intuitive interface for both the client and the administrator.' : 'Un sistema de reservas para restaurantes, con una interfaz simple e intuitiva tanto para el cliente como para el administrador.' }`,
            tags: ["React", "TailwindCSS", "Python", "FastAPI", "MySql"],
            image: reservifyIMG,
            link : 'https://reservify-front.vercel.app'
        },
    ];

    return projects;
}
