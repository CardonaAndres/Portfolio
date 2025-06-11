import { Github } from "lucide-react";
import { useLenguage } from "../../context/LanguageContext";

export const Header = () => {
    const { lenguage } = useLenguage();
    const isSpanish = lenguage === "es";

    return (
      <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {isSpanish ? "Proyectos Destacados" : "Featured Projects"}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            {isSpanish 
              ? "Aquí tienes una selección de mis proyectos más destacados, donde podrás ver mi experiencia en desarrollo web, así como mi enfoque en la creación de soluciones innovadoras."
              : "Here is a selection of my most notable projects, showcasing my experience in web, as well as my focus on creating innovative solutions."}
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400">
            <span> { isSpanish ? '¿Quieres ver más?' : 'Want to see more?' } </span>
            <a href="https://github.com/CardonaAndres" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 font-medium"
            >
              <Github size={18} />
              { isSpanish ? 'Visita mi GitHub' : 'Visit my GitHub' }
            </a>
            <span> { isSpanish ? 'para explorar todos mis proyectos' : 'for a comprehensive portfolio of my work' } </span>
          </div>
      </div>
    )
}


