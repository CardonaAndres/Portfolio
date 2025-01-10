import { useLenguage } from "../../context/LanguageContext";
const defualtLink = 'https://github.com/CardonaAndres';

export const ProjectCard = ({ title, description, tags, image, link = defualtLink }) => {
  const { texts } = useLenguage();

  return (
    <div className="group bg-white dark:bg-blue-900/90 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col h-full border border-gray-100 dark:border-blue-800">
      <img  src={image} alt={title} className="w-full h-48 object-cover" 
        loading="lazy" width="400" height="192" />

      <div className="p-7 flex flex-col flex-grow">
        <div className="relative mb-4">
          <h3 className="text-xl font-bold text-blue-900 dark:text-white">
            {title}
          </h3>
          <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-500 dark:bg-blue-400 rounded-full transition-all duration-300 group-hover:w-16" />
        </div>

        <p className="text-blue-800/90 dark:text-blue-100/90 mb-6 flex-grow leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-1.5 bg-blue-50 dark:bg-blue-800/50 text-blue-600 dark:text-blue-200 text-sm rounded-lg font-medium transition-all duration-300 hover:bg-blue-100 dark:hover:bg-blue-800"
            >
              {tag}
            </span>
          ))}
        </div>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-sm hover:shadow group/button focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-blue-900"
          >
            <span className="text-sm">{texts.viewMore}</span>
            <svg 
              className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};