import { useLenguage } from "../../context/LanguageContext";

export const ProjectCard = ({ project }) => {

    const { texts } = useLenguage();

    return (
      <div className="flex flex-col lg:flex-row items-center gap-8 bg-white dark:bg-blue-900 rounded-3xl shadow-lg overflow-hidden border border-gray-200 dark:border-blue-700 min-h-[400px]">
        <img src={project.image} alt={project.title} className="w-full lg:w-1/2 h-auto object-cover rounded-xl border border-blue-100 dark:border-blue-700 shadow-lg" style={{ padding: "8px", margin: "16px" }} loading="lazy"/>
        <div className="w-full lg:w-1/2 p-8 space-y-6 flex flex-col justify-between overflow-y-auto"
          style={{ maxHeight: "400px" }}>
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-blue-900 dark:text-white">
              {project.title}
            </h2>
            <p className="text-blue-800 dark:text-blue-100 text-opacity-90 leading-relaxed">
              {project.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag, index) => (
              <span key={index}
                className="px-3 py-1.5 bg-blue-100 text-blue-900 dark:bg-blue-800 dark:text-blue-200 text-sm rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-700 dark:text-blue-300 font-semibold hover:text-blue-900 dark:hover:text-blue-100">
            { texts.viewMore }
          </a>
        </div>
      </div>
    );
  };
  