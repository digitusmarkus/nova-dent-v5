import React from 'react';
import { X, Phone, Clock } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 transform transition-all scale-100 animate-fade-in-up">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors bg-slate-100 p-2 rounded-full"
        >
          <X size={20} />
        </button>

        <div className="text-center">
          <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Phone size={32} />
          </div>
          
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Zakažite svoj termin</h3>
          <p className="text-slate-600 mb-8">
            Pozovite nas direktno kako bismo pronašli najbolji termin za vas.
          </p>

          <a 
            href="tel:+381648695551"
            className="flex flex-col items-center justify-center bg-teal-50 border-2 border-teal-100 rounded-xl p-6 mb-6 hover:bg-teal-100 hover:border-teal-200 transition-all group cursor-pointer"
          >
            <span className="text-sm text-teal-600 font-semibold uppercase tracking-wide mb-1">Broj telefona</span>
            <span className="text-3xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
              +381 64 869 5551
            </span>
          </a>

          <div className="flex items-center justify-center gap-2 text-sm text-slate-500 bg-slate-50 py-3 rounded-lg">
            <Clock size={16} />
            <span>Radno vreme: 10:00 - 18:00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;