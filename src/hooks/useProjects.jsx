import { useLenguage } from "../context/LanguageContext";
import reservifyIMG from '../assets/imgs/ReservifyIMG.png';

export const useProjects = () => {

    const { lenguaje } = useLenguage();
    const isSpanish = lenguaje === 'es';

    const projects = [
        {
            title: "Reservify",
            description: isSpanish ? "Servicio en linea para gestionar reservas en línea de un restaurante." : "Online service to manage online reservations for a restaurant.",
            tags: ["React", "TailwindCSS", "Python", "FastAPI", "MySql"],
            image: reservifyIMG,
            link : 'https://reservify-front.vercel.app'
        },
    ];

    return projects;
}
