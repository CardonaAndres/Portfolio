import { useLenguage } from "../context/LanguageContext";
import { Lightbulb, Search, Code, Rocket } from "lucide-react";

export const useProcessSteps = () => {

    const { lenguage } = useLenguage();
    const isEnglis = lenguage === 'en';

    const processSteps = isEnglis ? [
        {
            icon: <Search className="w-6 h-6" />,
            title: "Discovery and Analysis",
            description:
              "I start each project with an in-depth investigation of client needs and the market. I analyze requirements, identify challenges, and set clear objectives.",
            details: [
              "Discovery meetings",
              "Requirements analysis",
              "Market research",
              "Objective definition"
            ]
          },
          {
            icon: <Lightbulb className="w-6 h-6" />,
            title: "Strategic Planning",
            description:
              "I develop a detailed strategy and solution architecture. I select the most suitable technologies and establish a clear action plan.",
            details: [
              "Solution architecture",
              "Technology selection",
              "Sprint planning",
              "MVP definition"
            ]
          },
          {
            icon: <Code className="w-6 h-6" />,
            title: "Iterative Development",
            description:
              "I implement the solution using agile methodologies, with short development cycles and continuous review to ensure quality and flexibility.",
            details: [
              "Sprint-based development",
              "Code reviews",
              "Continuous testing",
              "Continuous integration"
            ]
          },
          {
            icon: <Rocket className="w-6 h-6" />,
            title: "Delivery and Optimization",
            description:
              "I perform continuous deployments, monitor performance, and optimize the solution based on metrics and real feedback.",
            details: [
              "Continuous deployment",
              "Performance monitoring",
              "Continuous optimization",
              "Post-implementation support"
            ]
          }
    ] : [
        {
            icon: <Search className="w-6 h-6" />,
            title: "Descubrimiento y Análisis",
            description: "Inicio cada proyecto con una profunda investigación de las necesidades del cliente y el mercado. Analizo requisitos, identifico desafíos y establezco objetivos claros.",
            details: [
              "Reuniones de descubrimiento",
              "Análisis de requisitos",
              "Investigación de mercado",
              "Definición de objetivos"
            ]
          },
          {
            icon: <Lightbulb className="w-6 h-6" />,
            title: "Planificación Estratégica",
            description: "Desarrollo una estrategia detallada y arquitectura de solución. Selecciono las tecnologías más adecuadas y establezco un plan de acción claro.",
            details: [
              "Arquitectura de solución",
              "Selección de tecnologías",
              "Planificación de sprints",
              "Definición de MVP"
            ]
          },
          {
            icon: <Code className="w-6 h-6" />,
            title: "Desarrollo Iterativo",
            description: "Implemento la solución utilizando metodologías ágiles, con ciclos cortos de desarrollo y revisión continua para asegurar la calidad y flexibilidad.",
            details: [
              "Desarrollo por sprints",
              "Code reviews",
              "Testing continuo",
              "Integración continua"
            ]
          },
          {
            icon: <Rocket className="w-6 h-6" />,
            title: "Entrega y Optimización",
            description: "Realizo despliegues continuos, monitoreando el rendimiento y optimizando la solución basándome en métricas y feedback real.",
            details: [
              "Despliegue continuo",
              "Monitoreo de rendimiento",
              "Optimización continua",
              "Soporte post-implementación"
            ]
          }
    ];

    return { processSteps };
 
}


