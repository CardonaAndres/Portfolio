import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Code2, Sparkles, Heart, Coffee, Zap, Terminal, Rocket, ExternalLink } from 'lucide-react';
import { useHeroHook } from '@/spa/hooks/useHeroHook';
import { useLanguage } from '@/core/context/LanguageContext';

const currentYear = new Date().getFullYear();

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 
  'Express', 'NestJS', 'Python', 'FastAPI',
  'Docker', 'SQL', 'MongoDB', 'Git', 'Laravel',
  'PHP', 'Tailwind CSS'
];

export const Footer = () => {
  const isSpanish = useLanguage().language === 'ES';
  const { socialMediaLinks : socialLinks } = useHeroHook();
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);

  const quickLinks = [
    { label: isSpanish ? 'Sobre mí' : 'About Me', href: '#about', icon: Code2 },
    { label: isSpanish ? 'Proyectos' : 'Projects', href: '#projects', icon: Rocket }
  ];
  
  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(10,112,236,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(10,112,236,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-2 mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="relative"
                >
                  <Sparkles className="w-8 h-8 text-blue-500" />
                  <div className="absolute inset-0 w-8 h-8 bg-blue-500 blur-xl opacity-50"></div>
                </motion.div>
                <span className="text-2xl font-bold text-white">
                 <span className="text-blue-500">Andrés</span> Cardona
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                {isSpanish ? 
                  'Desarrollador Full Stack apasionado por crear experiencias web excepcionales con las últimas tecnologías.' 
                  : 'Full Stack Developer with a passion for creating exceptional web experiences using the latest technologies.'
                }
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={() => setHoveredSocial(social.id)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    className={`relative p-3 rounded-full bg-white/10 text-gray-300 transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                    {hoveredSocial === social.id && (
                      <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: -30 }}
                        className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-white bg-gray-800 px-2 py-1 rounded whitespace-nowrap"
                      >
                        {social.name}
                      </motion.span>
                    )}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-1"
            >
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center space-x-2">
                <Zap className="w-5 h-5 text-blue-500" />
                <span>{isSpanish ? 'Enlaces Rápidos' : 'Quick Links'}</span>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    className="group"
                  >
                    <a
                      href={link.href}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <link.icon className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform" />
                      <span>{link.label}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Skills Cloud */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center space-x-2">
                <Terminal className="w-5 h-5 text-blue-500" />
                <span>Tecnologías</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="border-t border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
              <motion.a
                href="mailto:11cardona31@gmail.com"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>11cardona31@gmail.com</span>
              </motion.a>
              <motion.a
                href="tel:+573012524648"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+57 301 252 4648</span>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-gray-400 text-sm flex items-center space-x-2"
              >
                <span>© {currentYear} {isSpanish ? 'Andrés Cardona. Hecho con' : 'Andrés Cardona. Made with'} </span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-red-500"
                >
                  <Heart className="w-4 h-4 fill-current" />
                </motion.span>
                <span> {isSpanish ? 'y mucho' : 'and much'} </span>
                <Coffee className="w-4 h-4 text-brown-400" />
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

