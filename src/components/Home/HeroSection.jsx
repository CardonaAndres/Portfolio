import { Linkedin, Github } from "lucide-react";
import { SocialButton } from "../common/SocialButton";
import { motion } from "framer-motion";
import { useLenguage } from "../../context/LanguageContext";
import fotoHV from '../../assets/imgs/FotoHV.jpg';

export const HeroSection = () => {

  const { texts } = useLenguage();

  return (
    <section className="pt-32 pb-16 px-4 bg-gradient-to-r from-blue-200 to-blue-500 dark:from-blue-900 dark:to-blue-700">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        
        {/* Título */}
        <motion.h1
          className="text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        > 
          {texts.title} <span className="text-blue-600 dark:text-blue-400">Andrés</span>
        </motion.h1>

        {/* Descripción */}
        <motion.p
          className="text-xl text-white mb-8 px-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {texts.aboutMe}
        </motion.p>

        {/* Foto de perfil */}
        <motion.div
          className="mx-auto w-72 h-72 rounded-full overflow-hidden mb-8 shadow-xl"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={fotoHV} 
            alt="Andrés Cardona"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Correo */}
        <motion.p
          className="text-lg text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-semibold">{texts.contact}:</span> 11cardona31@gmail.com
        </motion.p>

        {/* Botones de redes sociales */}
        <div className="flex justify-center space-x-6">
          <motion.div
            whileHover={{
              scale: 1.2,
              rotate: 10,
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
            }}
            whileTap={{ scale: 0.9 }}
          >
            <SocialButton
              icon={<Github />}
              href="https://github.com/CardonaAndres"
            />
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.2,
              rotate: 10,
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
            }}
            whileTap={{ scale: 0.9 }}
          >
            <SocialButton icon={<Linkedin />} href="https://linkedin.com/in/your-profile" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
