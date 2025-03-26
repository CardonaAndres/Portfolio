import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useLenguage } from '../../context/LanguageContext';
import { Divider } from '../common/Divider';

export const FooterSection = () => {

  const { texts } = useLenguage();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/CardonaAndres'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/andr%C3%A9s-cardona-18418a206'
    },
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      url: 'mailto:11cardona31@gmail.com'
    }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-blue-900 to-blue-800">
    <Divider />

    <div className="max-w-7xl mx-auto px-4 pt-20 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
        <div className="text-center md:text-left space-y-4">
          <motion.h3 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-white">
            Andrés Cardona
          </motion.h3>
        </div>

        <div className="flex justify-center md:justify-end gap-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}  href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-blue-800/30 text-blue-200 hover:bg-blue-700/50 hover:text-white transition-colors duration-300"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: index * 0.1 } 
              }}
            >
              {link.icon}
              <span className="sr-only">{link.name}</span>
            </motion.a>
          ))}
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent my-6" />
      <div className="text-center text-sm text-blue-300/80">
        <p>© {new Date().getFullYear()} Andrés Cardona. {texts.footerEnd}</p>
      </div>
    </div>
  </footer>
  );
}
