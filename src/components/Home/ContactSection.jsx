import { Github, Linkedin, Mail } from 'lucide-react';
import { useLenguage } from '../../context/LanguageContext';

export const ContactSection = () => {

    const { texts } = useLenguage();

  return (
    <section className="py-16 px-4 bg-white/50 dark:bg-blue-800/50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-900 dark:text-white mb-8 animate__animated animate__fadeIn animate__delay-1s">
          { texts.contactMessage }
        </h2>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-12">
          <a
            href="https://github.com/CardonaAndres"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-white hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 transform hover:scale-110 motion-safe:animate__fadeIn animate__delay-2s"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/tu-perfil/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-white hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 transform hover:scale-110 motion-safe:animate__fadeIn animate__delay-2s"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:tuemail@ejemplo.com"
            className="text-blue-600 dark:text-white hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 transform hover:scale-110 motion-safe:animate__fadeIn animate__delay-2s"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-blue-900 p-8 rounded-lg shadow-lg max-w-xl mx-auto motion-safe:animate__fadeInUp animate__delay-1s">
          <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-6">
            { texts.sendMeAMessage }
          </h3>

          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder={texts.placeHolderName}
                className="w-full p-3 border border-gray-300 dark:border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 dark:bg-blue-800 dark:text-white transition-all transform hover:scale-105 motion-safe:animate__fadeIn animate__delay-2s"
              />
            </div>
            <div>
              <input
                type={texts.placeHolderEmail}
                placeholder="Tu correo electrónico"
                className="w-full p-3 border border-gray-300 dark:border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 dark:bg-blue-800 dark:text-white transition-all transform hover:scale-105 motion-safe:animate__fadeIn animate__delay-2s"
              />
            </div>
            <div>
              <textarea
                placeholder={texts.placeHolderMessage}
                rows="4"
                className="w-full p-3 border border-gray-300 dark:border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 dark:bg-blue-800 dark:text-white transition-all transform hover:scale-105 motion-safe:animate__fadeIn animate__delay-2s"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 motion-safe:animate__fadeIn animate__delay-3s"
            >
              {texts.sendAMessage}  
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
