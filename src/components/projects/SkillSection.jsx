import { Code, Server, Database } from "lucide-react";
import { useLenguage } from "../../context/LanguageContext";

export const SkillsSection = () => {
  const { lenguage } = useLenguage();

  const developmentSkills = [
    {
      icon: <Code className="w-10 h-10 text-blue-400" />,
      title: lenguage === 'en' ? "Frontend Development" : "Desarrollo Frontend",
      description: lenguage === 'en' 
        ? "Building dynamic and scalable web applications using React, TypeScript, and Tailwind CSS, ensuring high performance and responsiveness." 
        : "Construcción de aplicaciones web dinámicas y escalables con React, TypeScript y Tailwind CSS, garantizando alto rendimiento y responsividad."
    },
    {
      icon: <Server className="w-10 h-10 text-green-600" />,
      title: lenguage === 'en' ? "Backend Development" : "Desarrollo Backend",
      description: lenguage === 'en' 
        ? "Developing robust APIs using Node.js, Express, FastAPI, PHP (Laravel), and Docker, ensuring security and scalability." 
        : "Desarrollo de APIs robustas con Node.js, Express, FastAPI, PHP (Laravel) y Docker, asegurando seguridad y escalabilidad."
    },
    {
      icon: <Database className="w-10 h-10 text-purple-600" />,
      title: lenguage === 'en' ? "Software Architecture & Optimization" : "Arquitectura y Optimización de Software",
      description: lenguage === 'en' 
        ? "Designing scalable architectures and optimizing performance with SQL, MongoDB, and efficient coding practices." 
        : "Diseño de arquitecturas escalables y optimización del rendimiento con SQL, MongoDB y buenas prácticas de código."
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-left">
        <h2 className="text-4xl font-extrabold text-blue-900 dark:text-white mb-4 tracking-tight">
          {lenguage === 'en' ? "My Work" : "Mi Trabajo"}
        </h2>
        <p className="text-lg text-blue-800 dark:text-blue-300 mb-8">
          {lenguage === 'en' 
            ? "I develop scalable and high-performance digital solutions, ensuring a seamless user and admin experience." 
            : "Desarrollo soluciones digitales escalables y de alto rendimiento, garantizando una experiencia fluida para usuarios y administradores."}
        </p>
      </div>

      <div className="space-y-6">
        {developmentSkills.map((skill, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-blue-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-[1.05]"
          >
            <div className="flex items-center mb-4">
              {skill.icon}
              <h3 className="ml-4 text-xl font-semibold text-blue-900 dark:text-white">
                {skill.title}
              </h3>
            </div>
            <p className="text-blue-800 dark:text-blue-300">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
