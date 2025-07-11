export const getColorClasses = (color: string) => {
  const colorMap: { [key: string]: any } = {
    // Azules
    'blue-500': {
      border: 'border-blue-500/40',
      shadow: 'shadow-blue-500/25',
      bgOverlay: 'from-blue-500/30 to-blue-500/10',
      bgGradient: 'from-blue-500/15 to-transparent',
      text: 'text-blue-400',
      hoverText: 'group-hover:text-blue-400',
      techBg: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
      buttonPrimary: 'bg-blue-500/15 hover:bg-blue-500/25 border-blue-500/30 hover:border-blue-500/40 text-blue-400',
      buttonSecondary: 'hover:bg-blue-500/15 hover:border-blue-500/30 hover:text-blue-400'
    },
    'blue-600': {
      border: 'border-blue-600/40',
      shadow: 'shadow-blue-600/25',
      bgOverlay: 'from-blue-600/30 to-blue-600/10',
      bgGradient: 'from-blue-600/15 to-transparent',
      text: 'text-blue-400',
      hoverText: 'group-hover:text-blue-400',
      techBg: 'bg-blue-600/15 text-blue-400 border-blue-600/30',
      buttonPrimary: 'bg-blue-600/15 hover:bg-blue-600/25 border-blue-600/30 hover:border-blue-600/40 text-blue-400',
      buttonSecondary: 'hover:bg-blue-600/15 hover:border-blue-600/30 hover:text-blue-400'
    },
    'sky-500': {
      border: 'border-sky-500/40',
      shadow: 'shadow-sky-500/25',
      bgOverlay: 'from-sky-500/30 to-sky-500/10',
      bgGradient: 'from-sky-500/15 to-transparent',
      text: 'text-sky-400',
      hoverText: 'group-hover:text-sky-400',
      techBg: 'bg-sky-500/15 text-sky-400 border-sky-500/30',
      buttonPrimary: 'bg-sky-500/15 hover:bg-sky-500/25 border-sky-500/30 hover:border-sky-500/40 text-sky-400',
      buttonSecondary: 'hover:bg-sky-500/15 hover:border-sky-500/30 hover:text-sky-400'
    },
    'indigo-500': {
      border: 'border-indigo-500/40',
      shadow: 'shadow-indigo-500/25',
      bgOverlay: 'from-indigo-500/30 to-indigo-500/10',
      bgGradient: 'from-indigo-500/15 to-transparent',
      text: 'text-indigo-400',
      hoverText: 'group-hover:text-indigo-400',
      techBg: 'bg-indigo-500/15 text-indigo-400 border-indigo-500/30',
      buttonPrimary: 'bg-indigo-500/15 hover:bg-indigo-500/25 border-indigo-500/30 hover:border-indigo-500/40 text-indigo-400',
      buttonSecondary: 'hover:bg-indigo-500/15 hover:border-indigo-500/30 hover:text-indigo-400'
    },

    // Morados
    'purple-500': {
      border: 'border-purple-500/40',
      shadow: 'shadow-purple-500/25',
      bgOverlay: 'from-purple-500/30 to-purple-500/10',
      bgGradient: 'from-purple-500/15 to-transparent',
      text: 'text-purple-400',
      hoverText: 'group-hover:text-purple-400',
      techBg: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
      buttonPrimary: 'bg-purple-500/15 hover:bg-purple-500/25 border-purple-500/30 hover:border-purple-500/40 text-purple-400',
      buttonSecondary: 'hover:bg-purple-500/15 hover:border-purple-500/30 hover:text-purple-400'
    },
    'purple-600': {
      border: 'border-purple-600/40',
      shadow: 'shadow-purple-600/25',
      bgOverlay: 'from-purple-600/30 to-purple-600/10',
      bgGradient: 'from-purple-600/15 to-transparent',
      text: 'text-purple-400',
      hoverText: 'group-hover:text-purple-400',
      techBg: 'bg-purple-600/15 text-purple-400 border-purple-600/30',
      buttonPrimary: 'bg-purple-600/15 hover:bg-purple-600/25 border-purple-600/30 hover:border-purple-600/40 text-purple-400',
      buttonSecondary: 'hover:bg-purple-600/15 hover:border-purple-600/30 hover:text-purple-400'
    },
    'violet-500': {
      border: 'border-violet-500/40',
      shadow: 'shadow-violet-500/25',
      bgOverlay: 'from-violet-500/30 to-violet-500/10',
      bgGradient: 'from-violet-500/15 to-transparent',
      text: 'text-violet-400',
      hoverText: 'group-hover:text-violet-400',
      techBg: 'bg-violet-500/15 text-violet-400 border-violet-500/30',
      buttonPrimary: 'bg-violet-500/15 hover:bg-violet-500/25 border-violet-500/30 hover:border-violet-500/40 text-violet-400',
      buttonSecondary: 'hover:bg-violet-500/15 hover:border-violet-500/30 hover:text-violet-400'
    },
    'fuchsia-500': {
      border: 'border-fuchsia-500/40',
      shadow: 'shadow-fuchsia-500/25',
      bgOverlay: 'from-fuchsia-500/30 to-fuchsia-500/10',
      bgGradient: 'from-fuchsia-500/15 to-transparent',
      text: 'text-fuchsia-400',
      hoverText: 'group-hover:text-fuchsia-400',
      techBg: 'bg-fuchsia-500/15 text-fuchsia-400 border-fuchsia-500/30',
      buttonPrimary: 'bg-fuchsia-500/15 hover:bg-fuchsia-500/25 border-fuchsia-500/30 hover:border-fuchsia-500/40 text-fuchsia-400',
      buttonSecondary: 'hover:bg-fuchsia-500/15 hover:border-fuchsia-500/30 hover:text-fuchsia-400'
    },

    // Verdes
    'green-500': {
      border: 'border-green-500/40',
      shadow: 'shadow-green-500/25',
      bgOverlay: 'from-green-500/30 to-green-500/10',
      bgGradient: 'from-green-500/15 to-transparent',
      text: 'text-green-400',
      hoverText: 'group-hover:text-green-400',
      techBg: 'bg-green-500/15 text-green-400 border-green-500/30',
      buttonPrimary: 'bg-green-500/15 hover:bg-green-500/25 border-green-500/30 hover:border-green-500/40 text-green-400',
      buttonSecondary: 'hover:bg-green-500/15 hover:border-green-500/30 hover:text-green-400'
    },
    'emerald-500': {
      border: 'border-emerald-500/40',
      shadow: 'shadow-emerald-500/25',
      bgOverlay: 'from-emerald-500/30 to-emerald-500/10',
      bgGradient: 'from-emerald-500/15 to-transparent',
      text: 'text-emerald-400',
      hoverText: 'group-hover:text-emerald-400',
      techBg: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
      buttonPrimary: 'bg-emerald-500/15 hover:bg-emerald-500/25 border-emerald-500/30 hover:border-emerald-500/40 text-emerald-400',
      buttonSecondary: 'hover:bg-emerald-500/15 hover:border-emerald-500/30 hover:text-emerald-400'
    },
    'teal-500': {
      border: 'border-teal-500/40',
      shadow: 'shadow-teal-500/25',
      bgOverlay: 'from-teal-500/30 to-teal-500/10',
      bgGradient: 'from-teal-500/15 to-transparent',
      text: 'text-teal-400',
      hoverText: 'group-hover:text-teal-400',
      techBg: 'bg-teal-500/15 text-teal-400 border-teal-500/30',
      buttonPrimary: 'bg-teal-500/15 hover:bg-teal-500/25 border-teal-500/30 hover:border-teal-500/40 text-teal-400',
      buttonSecondary: 'hover:bg-teal-500/15 hover:border-teal-500/30 hover:text-teal-400'
    },
    'lime-500': {
      border: 'border-lime-500/40',
      shadow: 'shadow-lime-500/25',
      bgOverlay: 'from-lime-500/30 to-lime-500/10',
      bgGradient: 'from-lime-500/15 to-transparent',
      text: 'text-lime-400',
      hoverText: 'group-hover:text-lime-400',
      techBg: 'bg-lime-500/15 text-lime-400 border-lime-500/30',
      buttonPrimary: 'bg-lime-500/15 hover:bg-lime-500/25 border-lime-500/30 hover:border-lime-500/40 text-lime-400',
      buttonSecondary: 'hover:bg-lime-500/15 hover:border-lime-500/30 hover:text-lime-400'
    },

    // Rojos y Rosas
    'red-500': {
      border: 'border-red-500/40',
      shadow: 'shadow-red-500/25',
      bgOverlay: 'from-red-500/30 to-red-500/10',
      bgGradient: 'from-red-500/15 to-transparent',
      text: 'text-red-400',
      hoverText: 'group-hover:text-red-400',
      techBg: 'bg-red-500/15 text-red-400 border-red-500/30',
      buttonPrimary: 'bg-red-500/15 hover:bg-red-500/25 border-red-500/30 hover:border-red-500/40 text-red-400',
      buttonSecondary: 'hover:bg-red-500/15 hover:border-red-500/30 hover:text-red-400'
    },
    'rose-500': {
      border: 'border-rose-500/40',
      shadow: 'shadow-rose-500/25',
      bgOverlay: 'from-rose-500/30 to-rose-500/10',
      bgGradient: 'from-rose-500/15 to-transparent',
      text: 'text-rose-400',
      hoverText: 'group-hover:text-rose-400',
      techBg: 'bg-rose-500/15 text-rose-400 border-rose-500/30',
      buttonPrimary: 'bg-rose-500/15 hover:bg-rose-500/25 border-rose-500/30 hover:border-rose-500/40 text-rose-400',
      buttonSecondary: 'hover:bg-rose-500/15 hover:border-rose-500/30 hover:text-rose-400'
    },
    'pink-500': {
      border: 'border-pink-500/40',
      shadow: 'shadow-pink-500/25',
      bgOverlay: 'from-pink-500/30 to-pink-500/10',
      bgGradient: 'from-pink-500/15 to-transparent',
      text: 'text-pink-400',
      hoverText: 'group-hover:text-pink-400',
      techBg: 'bg-pink-500/15 text-pink-400 border-pink-500/30',
      buttonPrimary: 'bg-pink-500/15 hover:bg-pink-500/25 border-pink-500/30 hover:border-pink-500/40 text-pink-400',
      buttonSecondary: 'hover:bg-pink-500/15 hover:border-pink-500/30 hover:text-pink-400'
    },

    // Naranjas y Amarillos
    'orange-500': {
      border: 'border-orange-500/40',
      shadow: 'shadow-orange-500/25',
      bgOverlay: 'from-orange-500/30 to-orange-500/10',
      bgGradient: 'from-orange-500/15 to-transparent',
      text: 'text-orange-400',
      hoverText: 'group-hover:text-orange-400',
      techBg: 'bg-orange-500/15 text-orange-400 border-orange-500/30',
      buttonPrimary: 'bg-orange-500/15 hover:bg-orange-500/25 border-orange-500/30 hover:border-orange-500/40 text-orange-400',
      buttonSecondary: 'hover:bg-orange-500/15 hover:border-orange-500/30 hover:text-orange-400'
    },
    'amber-500': {
      border: 'border-amber-500/40',
      shadow: 'shadow-amber-500/25',
      bgOverlay: 'from-amber-500/30 to-amber-500/10',
      bgGradient: 'from-amber-500/15 to-transparent',
      text: 'text-amber-400',
      hoverText: 'group-hover:text-amber-400',
      techBg: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
      buttonPrimary: 'bg-amber-500/15 hover:bg-amber-500/25 border-amber-500/30 hover:border-amber-500/40 text-amber-400',
      buttonSecondary: 'hover:bg-amber-500/15 hover:border-amber-500/30 hover:text-amber-400'
    },
    'yellow-500': {
      border: 'border-yellow-500/40',
      shadow: 'shadow-yellow-500/25',
      bgOverlay: 'from-yellow-500/30 to-yellow-500/10',
      bgGradient: 'from-yellow-500/15 to-transparent',
      text: 'text-yellow-400',
      hoverText: 'group-hover:text-yellow-400',
      techBg: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/30',
      buttonPrimary: 'bg-yellow-500/15 hover:bg-yellow-500/25 border-yellow-500/30 hover:border-yellow-500/40 text-yellow-400',
      buttonSecondary: 'hover:bg-yellow-500/15 hover:border-yellow-500/30 hover:text-yellow-400'
    },

    // Cyans y neutros
    'cyan-500': {
      border: 'border-cyan-500/40',
      shadow: 'shadow-cyan-500/25',
      bgOverlay: 'from-cyan-500/30 to-cyan-500/10',
      bgGradient: 'from-cyan-500/15 to-transparent',
      text: 'text-cyan-400',
      hoverText: 'group-hover:text-cyan-400',
      techBg: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
      buttonPrimary: 'bg-cyan-500/15 hover:bg-cyan-500/25 border-cyan-500/30 hover:border-cyan-500/40 text-cyan-400',
      buttonSecondary: 'hover:bg-cyan-500/15 hover:border-cyan-500/30 hover:text-cyan-400'
    },
    'slate-500': {
      border: 'border-slate-500/40',
      shadow: 'shadow-slate-500/25',
      bgOverlay: 'from-slate-500/30 to-slate-500/10',
      bgGradient: 'from-slate-500/15 to-transparent',
      text: 'text-slate-400',
      hoverText: 'group-hover:text-slate-400',
      techBg: 'bg-slate-500/15 text-slate-400 border-slate-500/30',
      buttonPrimary: 'bg-slate-500/15 hover:bg-slate-500/25 border-slate-500/30 hover:border-slate-500/40 text-slate-400',
      buttonSecondary: 'hover:bg-slate-500/15 hover:border-slate-500/30 hover:text-slate-400'
    },
    'gray-500': {
      border: 'border-gray-500/40',
      shadow: 'shadow-gray-500/25',
      bgOverlay: 'from-gray-500/30 to-gray-500/10',
      bgGradient: 'from-gray-500/15 to-transparent',
      text: 'text-gray-400',
      hoverText: 'group-hover:text-gray-400',
      techBg: 'bg-gray-500/15 text-gray-400 border-gray-500/30',
      buttonPrimary: 'bg-gray-500/15 hover:bg-gray-500/25 border-gray-500/30 hover:border-gray-500/40 text-gray-400',
      buttonSecondary: 'hover:bg-gray-500/15 hover:border-gray-500/30 hover:text-gray-400'
    },
    'zinc-500': {
      border: 'border-zinc-500/40',
      shadow: 'shadow-zinc-500/25',
      bgOverlay: 'from-zinc-500/30 to-zinc-500/10',
      bgGradient: 'from-zinc-500/15 to-transparent',
      text: 'text-zinc-400',
      hoverText: 'group-hover:text-zinc-400',
      techBg: 'bg-zinc-500/15 text-zinc-400 border-zinc-500/30',
      buttonPrimary: 'bg-zinc-500/15 hover:bg-zinc-500/25 border-zinc-500/30 hover:border-zinc-500/40 text-zinc-400',
      buttonSecondary: 'hover:bg-zinc-500/15 hover:border-zinc-500/30 hover:text-zinc-400'
    }
  };
  
  return colorMap[color] || colorMap['blue-500']; // Fallback a azul
};