import { Code, Server, Database, ArrowRight, Sparkles, Settings } from "lucide-react";
import { useLenguage } from "../../context/LanguageContext";

export const SkillsSection = () => {
  const { lenguage } = useLenguage();

  const developmentSkills = [
    {
      icon: <Code className="w-10 h-10 text-blue-400" />,
      title: lenguage === 'en' ? "Frontend Development" : "Desarrollo Frontend",
      description: lenguage === 'en' 
        ? "Creating responsive and interactive user interfaces with modern web technologies, ensuring optimal user experience across all devices." 
        : "Creación de interfaces de usuario responsivas e interactivas con tecnologías web modernas, asegurando una experiencia óptima en todos los dispositivos.",
    },
    {
      icon: <Server className="w-10 h-10 text-green-600" />,
      title: lenguage === 'en' ? "Backend Development" : "Desarrollo Backend",
      description: lenguage === 'en' 
        ? "Building robust server-side applications and APIs with multiple programming languages and frameworks, focusing on performance and scalability." 
        : "Construcción de aplicaciones del lado del servidor y APIs robustas con múltiples lenguajes de programación y frameworks, enfocándome en rendimiento y escalabilidad.",
    },
    {
      icon: <Database className="w-10 h-10 text-purple-600" />,
      title: lenguage === 'en' ? "Database Management" : "Gestión de Bases de Datos",
      description: lenguage === 'en' 
        ? "Designing and managing efficient database systems with both SQL and NoSQL technologies, optimizing queries and ensuring data integrity." 
        : "Diseño y gestión de sistemas de bases de datos eficientes con tecnologías SQL y NoSQL, optimizando consultas y asegurando la integridad de los datos.",
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header Section with enhanced styling */}
      <div className="text-left relative">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="w-8 h-8 text-blue-400 animate-pulse" />
          <h2 className="text-4xl font-extrabold text-blue-900 dark:text-white tracking-tight">
            {lenguage === 'en' ? "My Work" : "Mi Trabajo"}
          </h2>
        </div>
        
        {/* Decorative line */}
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mb-6"></div>
        
        <p className="text-lg text-blue-800 dark:text-blue-300 mb-8 leading-relaxed">
          {lenguage === 'en' 
            ? "I develop scalable and high-performance digital solutions, ensuring a seamless user and admin experience." 
            : "Desarrollo soluciones digitales escalables y de alto rendimiento, garantizando una experiencia fluida para usuarios y administradores."}
        </p>
      </div>

      {/* Skills Cards with enhanced design */}
      <div className="space-y-6">
        {developmentSkills.map((skill, index) => (
          <div 
            key={index}
            className="group bg-white dark:bg-blue-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-transparent hover:border-blue-200 dark:hover:border-blue-700 relative overflow-hidden"
          >
            {/* Background gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/30 group-hover:to-purple-50/30 dark:group-hover:from-blue-800/20 dark:group-hover:to-purple-800/20 transition-all duration-300 rounded-xl"></div>
            
            <div className="relative z-10">
              {/* Header with icon and title */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-blue-800 dark:to-blue-700 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-blue-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300">
                    {skill.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-blue-800 dark:text-blue-300 mb-4 leading-relaxed">
                {skill.description}
              </p>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};