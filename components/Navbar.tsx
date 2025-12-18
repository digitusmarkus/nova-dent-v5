import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NavItem } from '../types';
import Logo from './Logo';
import BookingModal from './BookingModal';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navItems: NavItem[] = [
  { label: 'Naslovna', path: '/' },
  { label: 'O nama', path: '/o-nama' },
  { label: 'Usluge', path: '/usluge' },
  { label: 'Kontakt', path: '/kontakt' },
];

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Background change on scroll
      setIsScrolled(window.scrollY > 10);
      
      // Calculate scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  const handlePhoneClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
        }`}
      >
        {/* Scroll Progress Bar */}
        <div 
          className="absolute top-0 left-0 h-[3px] bg-teal-500 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div 
              className="flex-shrink-0 cursor-pointer"
              onClick={() => handleNavClick('/')}
            >
              <Logo />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`text-sm font-semibold transition-colors duration-200 relative group py-2 ${
                    currentPage === item.path
                      ? 'text-teal-600'
                      : 'text-slate-600 hover:text-teal-600'
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-teal-600 transform origin-left transition-transform duration-300 ${currentPage === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                </button>
              ))}
              <button 
                onClick={handlePhoneClick}
                className="bg-teal-600 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-teal-700 transition-all shadow-lg hover:shadow-teal-500/40 flex items-center gap-2 active:scale-95"
              >
                <Phone size={16} />
                Zakažite
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-600 hover:text-teal-600 focus:outline-none p-2 transition-transform duration-200 active:scale-90"
                aria-label={isOpen ? "Zatvori meni" : "Otvori meni"}
                aria-expanded={isOpen}
              >
                {isOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-2xl transition-all duration-300 ease-in-out transform ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="px-4 pt-2 pb-8 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`block w-full text-left px-4 py-4 rounded-xl text-lg font-bold transition-all ${
                  currentPage === item.path
                    ? 'bg-teal-50 text-teal-700 translate-x-2'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-teal-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 px-4">
              <button 
                onClick={handlePhoneClick}
                className="w-full bg-teal-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2"
              >
                <Phone size={18} /> Zakažite sada
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;