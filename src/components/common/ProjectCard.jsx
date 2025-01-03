import { useLenguage } from "../../context/LanguageContext";
const defualtLink = 'https://github.com/CardonaAndres';

export const ProjectCard = ({ title, description, tags, image, link = defualtLink }) => {

  const { texts } = useLenguage();

  return (
    <div className="bg-white dark:bg-blue-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow transform hover:scale-105 hover:translate-y-2">
      <img src={image} alt={title} className="w-full h-full object-cover"  />
      <div className="p-6">
        <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-2">{title}</h3>
        <p className="text-blue-800 dark:text-blue-100 mb-4">{description}</p>
        
        {/* Etiquetas */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-blue-100 text-sm rounded-full transition-all duration-300 hover:bg-blue-600 hover:text-white"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Botón de enlace */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-200 transform hover:scale-105"
          >
            {texts.viewMore}
          </a>
        )}
      </div>
    </div>
  );
};
