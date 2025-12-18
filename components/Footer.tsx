
import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <Logo light={true} />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Posvećeni smo pružanju vrhunske stomatološke nege u opuštajućem i prijatnom okruženju. Vaš osmeh je naša inspiracija.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/novadentsrb" className="text-slate-400 hover:text-white transition-colors" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/novadentsrb" className="text-slate-400 hover:text-white transition-colors" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Brzi linkovi</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-teal-400 transition-colors">Naslovna</Link></li>
              <li><Link to="/o-nama" className="hover:text-teal-400 transition-colors">O nama</Link></li>
              <li><Link to="/usluge" className="hover:text-teal-400 transition-colors">Usluge</Link></li>
              <li><Link to="/kontakt" className="hover:text-teal-400 transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Kontakt info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-teal-500 shrink-0" size={18} />
                <span>Simeuna Đaka 4,<br />21000 Novi Sad</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-teal-500 shrink-0" size={18} />
                <a href="tel:+381648695551" className="hover:text-teal-400">+381 64 869 5551</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-teal-500 shrink-0" size={18} />
                <span>info@novadent.rs</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Radno vreme</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between items-center border-b border-slate-800 pb-2">
                <span className="flex items-center gap-2"><Clock size={14} /> Pon - Pet</span>
                <span className="text-teal-400">10:00 - 18:00</span>
              </li>
              <li className="flex justify-between items-center border-b border-slate-800 pb-2">
                <span className="flex items-center gap-2"><Clock size={14} /> Vikend</span>
                <span className="text-slate-500">Zatvoreno</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Nova Dent Stomatološka Ordinacija. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
