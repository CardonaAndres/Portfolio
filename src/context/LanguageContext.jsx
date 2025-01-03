import { createContext, useState, useContext } from 'react';
import { texts } from '../assets/js/texts';

const LenguageContext = createContext();

// Proveedor del contexto
export const LenguageProvider = ({ children }) => {

    const savedLanguage = localStorage.getItem('language') || 'en'; 
    const [lenguage, setLenguage] = useState(savedLanguage);
  
    // Cambiar idioma y guardarlo en localStorage
    const changeLenguage = (nuevoLenguage) => {
      setLenguage(nuevoLenguage);
      localStorage.setItem('language', nuevoLenguage); // Guarda el idioma en localStorage
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