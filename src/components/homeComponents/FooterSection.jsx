import React from 'react';
import { useLenguage } from '../../context/LanguageContext';

export const FooterSection = () => {

  const { texts } = useLenguage();

  return (
    <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="mb-4">© {new Date().getFullYear()} Andrés Cardona. {texts.footerMessage}.</p>
            
            <p className="text-sm text-blue-200"> {texts.footerEnd} </p>
        </div>
    </footer>
  );
}
