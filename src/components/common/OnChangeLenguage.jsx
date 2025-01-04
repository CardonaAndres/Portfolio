import { motion } from "framer-motion";
import colombiaFlag from '../../assets/svg/colombiaFlag.svg';
import eeuuFlag from '../../assets/svg/eeuuFlag.svg';
import { useLenguage } from "../../context/LanguageContext";

export const OnChangeLenguage = () => {
  const { changeLenguage, texts, lenguage } = useLenguage();
  const isEnglish = lenguage === "en";

  const handleOnClick = () => changeLenguage(isEnglish ? "es" : "en");

  return (
    <motion.button
      onClick={handleOnClick}
      className="flex items-center text-blue-800 dark:text-blue-100 hover:text-blue-600 dark:hover:text-white transition-all duration-300"
      whileHover={{
        scale: 0.8,
        color: "#2563eb", // Color azul más intenso
      }}
      whileTap={{ scale: 0.98 }}
    >
     <img src={isEnglish ? colombiaFlag : eeuuFlag} alt="flag" className="w-6 h-6" />
      <span className="ml-2"> {texts.changeLanguage} </span>
    </motion.button>
  );
};
