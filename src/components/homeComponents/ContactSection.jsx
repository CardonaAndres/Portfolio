import React from 'react';
import { Github, Linkedin, Send, AlertCircle } from 'lucide-react';
import WhatsApp from '../../assets/svg/WhatsApp.svg';
import { useLenguage } from '../../context/LanguageContext';
import { useContactForm } from '../../hooks/useContactForm';

export const ContactSection = () => {
  const { texts } = useLenguage();
  const { register, handleSubmit, errors, handleWhatsApp, handleEmail } = useContactForm();

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white/50 to-blue-50/50 dark:from-blue-900/50 dark:to-blue-900/50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-900 dark:text-white mb-8 animate__animated animate__fadeIn animate__delay-1s">
          {texts.contactMessage}
        </h2>

        <div className="flex justify-center gap-8 mb-12">
          <a href="https://github.com/CardonaAndres" target="_blank" rel="noopener noreferrer" className="group relative" aria-label='Github Link'>
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
            <Github className="w-8 h-8 text-blue-600 dark:text-white hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 transform hover:scale-110" />
          </a>
          <a href="https://www.linkedin.com/in/andrés-cardona-18418a206" target="_blank" rel="noopener noreferrer" className="group relative"  aria-label='Linkeding Link'>
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
            <Linkedin className="w-8 h-8 text-blue-600 dark:text-white hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 transform hover:scale-110" />
          </a>
        </div>

        <div className="bg-white dark:bg-blue-900/90 p-8 rounded-2xl shadow-lg max-w-xl mx-auto backdrop-blur-sm border border-gray-100 dark:border-blue-800">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent dark:from-white dark:to-blue-200 mb-8">
            {texts.contactSection.sendMeAMessage}
          </h3>

          <form className="space-y-6 " onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <input
                {...register('name', {
                  required: texts.contactSection.name.required,
                  minLength: {
                    value: 2,
                    message: texts.contactSection.name.minLength
                  },
                  pattern: {
                    value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
                    message: texts.contactSection.name.pattern
                  }
                })}
                type="text"
                placeholder={texts.contactSection.placeHolderName}
                className='w-full p-4 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 border-gray-200 dark:border-blue-700 focus:ring-blue-600 dark:focus:ring-blue-500 dark:bg-blue-800/50 dark:text-white placeholder-gray-400 dark:placeholder-gray-300'
              />
              {errors.name && (
                <div className="absolute -bottom-6 left-0 flex items-center text-blue-500 text-sm">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  <span>{errors.name.message}</span>
                </div>
              )}
            </div>

            <div className="relative">
              <input {...register('email', {
                  required: texts.contactSection.email.required,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: texts.contactSection.email.pattern
                  }
                })}
                type="email"
                placeholder={texts.contactSection.placeHolderEmail}
                className='w-full p-4 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 border-gray-200 dark:border-blue-700 focus:ring-blue-600 dark:focus:ring-blue-500 dark:bg-blue-800/50 dark:text-white placeholder-gray-400 dark:placeholder-gray-300'
              />
              {errors.email && (
                <div className="absolute -bottom-6 left-0 flex items-center text-blue-500 text-sm">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  <span>{errors.email.message}</span>
                </div>
              )}
            </div>

            <div className="relative">
              <textarea
                {...register('message', {
                  required: texts.contactSection.message.required,
                  minLength: {
                    value: 10,
                    message: texts.contactSection.message.minLength
                  },
                  maxLength: {
                    value: 500,
                    message: texts.contactSection.message.maxLength
                  }
                })}
                placeholder={texts.contactSection.placeHolderMessage}
                rows="4" className= 'w-full p-4 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 border-gray-200 dark:border-blue-700 focus:ring-blue-600 dark:focus:ring-blue-500 dark:bg-blue-800/50 dark:text-white placeholder-gray-400 dark:placeholder-gray-300'
              />
              {errors.message && (
                <div className="absolute left-0 flex items-center text-blue-500 text-sm">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  <span>{errors.message.message}</span>
                </div>
              )}
            </div>

            <div className="flex gap-4 pt-4">
              <button type="button" onClick={handleSubmit(handleWhatsApp)}
                className="flex-1 py-4 px-6 bg-green-500 hover:bg-green-600 text-white rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl">
                <img src={WhatsApp} alt="WhatsAppIcon" className="w-5 h-5" /> 
                WhatsApp
              </button>
              <button type="button" onClick={handleSubmit(handleEmail)}
                className="flex-1 py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Send className="w-5 h-5" />
                Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
