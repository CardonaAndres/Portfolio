import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLenguage } from "../../context/LanguageContext";

export const Pagination = ({ currentProject, totalProjects, onPrev, onNext }) => {
    const { lenguage } = useLenguage();
  return (
    <div className="flex justify-between items-center mt-10">
      <button aria-label="Prev Arrow"  onClick={onPrev} className="p-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500">
        <ArrowLeft className="w-6 h-6" />
      </button>
      <p className="text-blue-800 dark:text-blue-300 text-lg font-semibold">
        {  lenguage === 'es' ? 'Proyecto ' : 'Project ' } 
        {currentProject + 1} {  lenguage === 'es' ? 'de ' : 'of ' }
         {totalProjects}
      </p>
      <button aria-label="Next Arrow" onClick={onNext} className="p-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500">
        <ArrowRight className="w-6 h-6" />
      </button>
    </div>
  );
};
