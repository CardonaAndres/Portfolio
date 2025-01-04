import { createContext, useState, useContext } from 'react';
import { texts } from '../assets/js/texts';

const LenguageContext = createContext();

// Proveedor del contexto
export const LenguageProvider = ({ children }) => {

    localStorage.setItem('language', 'en'); // Idioma por defecto (español)
    const savedLanguage = localStorage.getItem('language'); 
    const [ lenguage, setLenguage ] = useState(savedLanguage);

    const changeLenguage = (newLenguage) => {
      localStorage.setItem('language', newLenguage); 
      setLenguage(newLenguage);
      document.documentElement.lang = newLenguage;

      const titles = {
        es: 'Andrés Cardona - Desarrollador de Software FullStack',
        en: 'Andrés Cardona - Full Stack Developer',
      };

      document.title = titles[newLenguage] || titles['en'];
    };
  
    return (
      <LenguageContext.Provider value={{ lenguage, changeLenguage, texts: texts[lenguage] }}>
        {children}
      </LenguageContext.Provider>
    );
};

// Hook para acceder al contexto de lenguaje
export const useLenguage = () => {
  return useContext(LenguageContext);
};