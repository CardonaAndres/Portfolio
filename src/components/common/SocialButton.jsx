import { motion } from "framer-motion";

export const SocialButton = ({ icon, href }) => {
  return (
    <motion.a 
      href={href} 
      className="p-3 bg-blue-100 dark:bg-blue-700 text-blue-600 dark:text-blue-100 rounded-full hover:bg-blue-200 dark:hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      }}
      whileTap={{
        scale: 0.95,
      }}
    >
      {icon}
    </motion.a>
  );
};
