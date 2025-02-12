import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export const HeroLeftColumn = ({ texts }) => (
  <motion.div
    className="text-left space-y-8"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-4 tracking-wider uppercase">
        {texts.profecional}
    </h2>

    <div className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
      {texts.title}{" "}
      <span className="text-blue-600 dark:text-blue-400">
        Andrés
      </span>
    </div>

    <p className="text-lg text-white/90 leading-relaxed max-w-xl">
      {texts.aboutMe}
    </p>

    <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mt-12">
      <motion.span
        className="group flex items-center gap-3 text-white/90 hover:text-white transition-colors"
        whileHover={{ scale: 1.02 }}
      >
        <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
          <Mail className="w-5 h-5" />
        </div>
        <span className="font-medium">11cardona31@gmail.com</span>
      </motion.span>

      <div className="flex gap-4">
        {[
          { Icon: Github, href: "https://github.com/CardonaAndres" },
          { Icon: Linkedin, href: "https://www.linkedin.com/in/andrés-cardona-18418a206" }
        ].map(({ Icon, href }) => (
          <motion.a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Social media"
            className="p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <Icon className="w-6 h-6 text-white/90 hover:text-white transition-colors" />
          </motion.a>
        ))}
      </div>
    </div>
  </motion.div>
);
