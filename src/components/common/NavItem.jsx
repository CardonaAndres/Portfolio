import { motion } from "framer-motion";

export const NavItem = ({ icon, text, href = '#' }) => {
    return (
        <motion.a
            href={`#${href}`}
            className="flex items-center text-blue-800 dark:text-blue-100 hover:text-blue-600 dark:hover:text-white transition-all duration-300"
            whileHover={{
                scale: 0.8,
                color: "#2563eb", // Color azul más intenso
            }}
            whileTap={{ scale: 0.98 }}
        >
            {icon}
            <span className="ml-2">{text}</span>
        </motion.a>
    );
};
