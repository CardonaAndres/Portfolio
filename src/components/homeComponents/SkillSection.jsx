import { motion } from "framer-motion";
import { useLenguage } from "../../context/LanguageContext";
import { Code2, Database, Github, Server, Sparkles, Zap } from "lucide-react";

export const SkilSection = () => {
    const { texts, lenguage } = useLenguage();
    const skillCategories = [
        {
            title: "Frontend",
            icon: <Code2 className="w-6 h-6" />,
            skills: ["Html", "CSS", "JavaScript", "TypeScript", "React", "TailwindCSS", "Bootstrap"],
            gradient: "from-blue-500 to-blue-600"
        },
        {
            title: "Backend",
            icon: <Server className="w-6 h-6" />,
            skills: ["Node.js", "Express.js", "NestJS", "Python", "FastAPI", "PHP", "Laravel", "Java"],
            gradient: "from-blue-600 to-blue-700"
        },
        {
            title: `${lenguage == 'en' ? 'Database' : 'Base De Datos'}`,
            icon: <Database className="w-6 h-6" />,
            skills: ["MongoDB", "SQL", "SQL Server", "MySQL", "PostgreSQL", "SQLite"],
            gradient: "from-blue-700 to-blue-800"
        },
        {
            title: `${lenguage == 'en' ? 'Tools' : 'Herramientas'}`,
            icon: <Github className="w-6 h-6" />,
            skills: ["Git", "Github", "Docker", "Figma"],
            gradient: "from-blue-800 to-blue-900"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { 
            y: 50, 
            opacity: 0,
            scale: 0.9 
        },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100
            }
        }
    };

    const skillVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: i * 0.05,
                type: "spring",
                damping: 15,
                stiffness: 200
            }
        })
    };

    return (
        <section className="relative py-24 px-4 bg-blue-900 overflow-hidden">
            <div className="relative max-w-7xl mx-auto">
                {/* Enhanced Header */}
                <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                    className="text-center mb-20"
                >
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <motion.div animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                            <Sparkles className="w-10 h-10 text-yellow-400" />
                        </motion.div>
                        <h2 className="text-6xl font-black bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                            {texts.skills}
                        </h2>
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                        >
                            <Zap className="w-10 h-10 text-blue-400" />
                        </motion.div>
                    </div>
                    
                    <motion.div
                        className="w-32 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: 128 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />
                    
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="text-blue-200 text-lg mt-6 max-w-2xl mx-auto"
                    >
                        {lenguage === 'en' 
                            ? "Crafting digital experiences with cutting-edge technologies"
                            : "Creando experiencias digitales con tecnologías de vanguardia"
                        }
                    </motion.p>
                </motion.div>

                {/* Skills Grid */}
                <motion.div 
                    variants={containerVariants} 
                    initial="hidden" 
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="group relative bg-white/95 dark:bg-blue-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-blue-300/50"
                            whileHover={{ 
                                y: -8,
                                transition: { type: "spring", damping: 20, stiffness: 300 }
                            }}
                        >
                            {/* Gradient overlay on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                            
                            {/* Header with icon and arrow */}
                            <div className="relative flex items-center justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <motion.div 
                                        className="p-3 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-800 rounded-xl text-blue-600 dark:text-blue-300 group-hover:scale-110 transition-transform duration-300"
                                        whileHover={{ rotate: 5 }}
                                    >
                                        {category.icon}
                                    </motion.div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300">
                                        {category.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Skills Tags */}
                            <div className="relative flex flex-wrap gap-3">
                                {category.skills.map((skill, index) => (
                                    <motion.span
                                        key={index}
                                        custom={index}
                                        variants={skillVariants}
                                        initial="hidden"
                                        animate="visible"
                                        className="px-4 py-2.5 bg-gray-100 dark:bg-blue-700/70 text-gray-800 dark:text-gray-200 rounded-xl text-sm font-semibold cursor-pointer backdrop-blur-sm border border-gray-200/50 dark:border-blue-600/30"
                                        whileHover={{
                                            scale: 1.08,
                                            backgroundColor: "#3b82f6",
                                            color: "white",
                                            transition: { type: "spring", damping: 15, stiffness: 400 }
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>

                            {/* Skill count indicator */}
                            <div className="absolute top-4 right-4 bg-blue-500/20 text-blue-300 text-xs font-bold px-2 py-1 rounded-full">
                                {category.skills.length}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom decorative element */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="flex justify-center mt-16"
                >
                    <div className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                        <span className="text-blue-200 text-sm font-medium">
                            {lenguage === 'en' ? 'Always learning, always growing' : 'Siempre aprendiendo, siempre creciendo'}
                        </span>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};