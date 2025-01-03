import { ProjectCard } from '../common/ProjectCard';
import { motion } from 'framer-motion';
import { useLenguage } from '../../context/LanguageContext';
import { useProjects } from '../../hooks/useProjects'

export const ProyectSection = () => {

    const { texts } = useLenguage();
    const projects = useProjects()

    return (
        <section className="py-16 px-4 bg-gradient-to-r from-blue-100 to-blue-300 dark:from-blue-900 dark:to-blue-700">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    className="text-3xl font-bold text-blue-900 dark:text-white mb-12 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    { texts.myProjects }
                </motion.h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="transform transition-all hover:scale-105 hover:shadow-xl rounded-lg overflow-hidden"
                            whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
