import { texts } from '../assets/ts/texts';
import React, { createContext, useState, useContext, useEffect } from 'react';

type lenguage = { 
  code : string;
  label : string;
  flag : string;
}

interface LanguageContextType {
  language: string;
  changeLanguage: (newLanguage: string) => void;
  texts: Record<string, any>;
  languages : lenguage[]
}

interface LanguageProviderProps {
  children: React.ReactNode
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const languages = [
  { code: 'EN', label: 'English', flag: '🇺🇸' },
  { code: 'ES', label: 'Español', flag: '🇪🇸' },
];

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  // Obtener el idioma guardado o usar 'en' por defecto
  const [language, setLanguage] = useState<string>(() => {
    if (typeof window !== 'undefined') return localStorage.getItem('language') || languages[0].code;
    return languages[0].code;
  });

  // Efecto para actualizar el DOM cuando cambia el idioma
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.lang = language;
      
      const titles: Record<string, string> = {
        ES: 'Andrés Cardona - Desarrollador de Software FullStack',
        EN: 'Andrés Cardona - Full Stack Developer',
      };

      document.title = titles[language] || titles[languages[0].code];
    }
  }, [language]);

  // Función para cambiar el idioma
  const changeLanguage = (newLanguage: string) => {
    if (typeof window !== 'undefined') localStorage.setItem('language', newLanguage);
    setLanguage(newLanguage);
  };

  // Valor del contexto
  const contextValue: LanguageContextType = {
    language,
    languages,
    changeLanguage,
    texts: texts[language as keyof typeof texts] || texts.EN
  };
  
  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personalizado para usar el contexto de idioma
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if(context === undefined) throw new Error('useLanguage debe ser usado dentro de un LanguageProvider');
  return context;
};

// Exportar el contexto por si se necesita usar directamente
export { LanguageContext };