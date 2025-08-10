import { AnimatePresence, motion } from 'framer-motion';
import { Info, X } from 'lucide-react';

interface Props {
  isVisible: boolean; 
  onClose: () => void; 
  longDescription: string; 
  isSpanish: boolean;
  isMobile: boolean;
}

export const InfoModal = ({ isVisible, onClose, longDescription, isSpanish, isMobile }: Props) => (
  <AnimatePresence>
    {isVisible && (
      <>
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          onClick={onClose}
        />
        
        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`
            fixed z-50 bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700 max-h-[80vh] overflow-hidden
            ${isMobile 
              ? 'inset-x-4 top-1/2 -translate-y-1/2' 
              : 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] max-w-[90vw]'
            }
          `}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
            <div className="flex items-center space-x-2">
              <Info className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">
                {isSpanish ? 'Información Detallada' : 'Detailed Information'}
              </h3>
            </div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="p-2 rounded-full bg-gray-700/50 hover:bg-gray-700 transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </motion.button>
          </div>
          
          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[60vh]">
            <p className="text-gray-300 leading-relaxed">
              {longDescription}
            </p>
          </div>
          
          {/* Footer */}
          <div className="p-4 border-t border-gray-700/50">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors"
            >
              {isSpanish ? 'Entendido' : 'Got it'}
            </motion.button>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);