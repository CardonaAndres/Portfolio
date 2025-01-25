import { motion } from "framer-motion";
import { useLenguage } from "../../context/LanguageContext";


export const SkilSection = () => {

    const { texts } = useLenguage();

    const skills = [
        "JavaScript", "React", "Node.js", "Express", "Python", "FastAPI", "TailwindCSS", 
        "MongoDB", "SQL", "Git", "PHP", "Laravel", "Docker"
    ];

    return (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    className="text-3xl font-bold text-blue-900 dark:text-white mb-12 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    { texts.skills }
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-6">
                    {skills.map((skill, index) => (
                        <motion.span
                            key={index}
                            className="px-6 py-3 bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-blue-100 rounded-full text-sm font-semibold shadow-md transform transition-all duration-300"
                            whileHover={{
                                scale: 1.1,
                                boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
                                backgroundColor: "#2563eb", // Azul más intenso
                                color: "white"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>
            </div>
        </section>
    );
};
