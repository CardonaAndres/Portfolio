/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Asegúrate de que Tailwind escanee estos archivos
  ],
  theme: {
    extend: {
      animation: {
        'pulse-custom': 'pulse-custom 1.5s infinite alternate',
      },
      keyframes: {
        'pulse-custom': {
          '0%': { textShadow: '0 0 5px rgba(59, 130, 246, 0.5)' }, // Azul brillante inicial
          '100%': { textShadow: '0 0 2px rgba(59, 130, 246, 0.3)' }, // Se atenúa ligeramente
        },
      },
    },
  },
  plugins: [],
};
