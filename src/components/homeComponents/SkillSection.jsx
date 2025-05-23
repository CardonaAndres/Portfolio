import { motion } from "framer-motion";
import { useLenguage } from "../../context/LanguageContext";
import { Code2, Database, Github, Server } from "lucide-react";

export const SkilSection = () => {

    const { texts, lenguage } = useLenguage();

    const skillCategories = [
        {
            title: "Frontend",
            icon: <Code2 className="w-6 h-6" />,
            skills: ["Html", "CSS", "JavaScript", "TypeScript", "React", "TailwindCSS", "Bootstrap"]
        },
        {
            title: "Backend",
            icon: <Server className="w-6 h-6" />,
            skills: ["Node.js", "Express.js", "NestJS", "Python", "FastAPI", "PHP", "Laravel", "Java"]
        },
        {
            title: `${ lenguage == 'en' ? 'Database' : 'Base De Datos' }`,
            icon: <Database className="w-6 h-6" />,
            skills: ["MongoDB", "SQL", "SQL Server", "MySQL", "PostgreSQL", "SQLite"]
        },
        {
            title: `${ lenguage == 'en' ? 'Tools' : 'Herramientas' }`,
            icon: <Github className="w-6 h-6" />,
            skills: ["Git", "Github", "Docker", "Figma"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
    <section className="py-20 px-4 bg-blue-900">
        <div className="max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl font-bold dark:text-white mb-4">
                    {texts.skills}
                </h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </motion.div>

            <motion.div variants={containerVariants} initial="hidden" animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={idx}
                        variants={itemVariants}
                        className="bg-white dark:bg-blue-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-300">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                {category.title}
                            </h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, index) => (
                                <motion.span
                                    key={index}
                                    className="px-4 py-2 bg-gray-100 dark:bg-blue-700 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium"
                                    whileHover={{
                                        scale: 1.05,
                                        backgroundColor: "#3b82f6",
                                        color: "white"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
    );
};
