
import React, { useState } from 'react';
import { Smile, Zap, Activity, Grid, Shield, Moon } from 'lucide-react';
import { Service } from '../types';
import BookingModal from '../components/BookingModal';

const servicesList: Service[] = [
  {
    id: '1',
    title: 'Opšta stomatologija',
    description: 'Redovni pregledi, popravke zuba kompozitnim plombama visokog kvaliteta, lečenje kanala korena.',
    iconName: 'Shield'
  },
  {
    id: '2',
    title: 'Implantologija',
    description: 'Nadoknada izgubljenih zuba najkvalitetnijim titanijumskim implantima. Doživotna garancija.',
    iconName: 'Grid'
  },
  {
    id: '3',
    title: 'Estetska stomatologija',
    description: 'Holivudski osmeh uz pomoć keramičkih faseta (vinira), izbeljivanje zuba i bezmetalne krunice.',
    iconName: 'Smile'
  },
  {
    id: '4',
    title: 'Ortodoncija',
    description: 'Ispravljanje nepravilnosti položaja zuba fiksnim protezama i folijama za ispravljanje zuba.',
    iconName: 'Activity'
  },
  {
    id: '5',
    title: 'Dečija stomatologija',
    description: 'Poseban pristup najmlađima, fluorizacija, zalivanje fisura i edukacija o higijeni.',
    iconName: 'Zap'
  },
  {
    id: '6',
    title: 'Oralna hirurgija',
    description: 'Vađenje umnjaka, apikotomije, sinus lift i druge hirurške intervencije uz lokalnu anesteziju.',
    iconName: 'Moon'
  }
];

const iconMap: Record<string, React.ReactNode> = {
  'Shield': <Shield size={32} />,
  'Grid': <Grid size={32} />,
  'Smile': <Smile size={32} />,
  'Activity': <Activity size={32} />,
  'Zap': <Zap size={32} />,
  'Moon': <Moon size={32} />,
};

const Services: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="pt-40 pb-24 lg:pt-52 lg:pb-32 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-24 lg:mb-32">
          <span className="text-teal-600 font-semibold tracking-wide uppercase text-sm">Naša Ekspertiza</span>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4 mb-8">Sveobuhvatna nega za vaš osmeh</h1>
          <p className="text-xl text-slate-600 mb-12">
            Od preventive do složenih rekonstrukcija, Nova Dent nudi kompletan spektar stomatoloških usluga na jednom mestu.
          </p>
          <div className="rounded-3xl shadow-xl overflow-hidden group">
            <img 
              src="https://ik.imagekit.io/digitusmarkus/Nova%20Dent/services-banner.jpg" 
              alt="Prikaz stomatoloških instrumenata u ordinaciji" 
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesList.map((service) => (
            <div key={service.id} className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100">
              <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mb-8">
                {iconMap[service.iconName] || <Smile size={32} />}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Sekcija - Grand spacing */}
        <div className="mt-32 lg:mt-40 bg-teal-900 rounded-[3rem] p-12 lg:p-20 text-center md:text-left flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">Niste sigurni šta vam je potrebno?</h3>
            <p className="text-teal-100 text-xl leading-relaxed">
              Zakažite besplatne konsultacije. Naš tim će pregledati stanje vaših zuba i predložiti najbolji plan terapije.
            </p>
          </div>
          <div className="relative z-10 mt-12 md:mt-0">
             <button 
               onClick={() => setIsModalOpen(true)}
               className="inline-block bg-white text-teal-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-teal-50 hover:text-teal-600 border border-transparent hover:border-teal-400 hover:ring-1 hover:ring-teal-400 transition-all shadow-lg"
             >
               Kontaktirajte nas
             </button>
          </div>
          
          <div className="absolute right-0 top-0 w-96 h-96 bg-teal-800 rounded-full blur-[100px] opacity-40 -translate-y-1/2 translate-x-1/4"></div>
        </div>
      </div>
      
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Services;
