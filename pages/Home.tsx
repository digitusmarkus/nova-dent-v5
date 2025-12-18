
import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Star, ShieldCheck, Heart, Quote, HeartHandshake } from 'lucide-react';
import { Testimonial } from '../types';
import BookingModal from '../components/BookingModal';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    text: "Oduševljena sam uslugom! Dr Marko je bio izuzetno pažljiv i objasnio mi je svaki korak procedure. Bol je bio minimalan, a rezultat fantastičan.",
    author: "Marija Stanković"
  },
  {
    id: '2',
    text: "Dolazim u Nova Dent već godinama. Higijena je na najvišem nivou, a osoblje je uvek nasmejano i ljubazno. Sve preporuke za Dr Anu!",
    author: "Slobodan Karaula"
  },
  {
    id: '3',
    text: "Konačno sam pobedila strah od zubara. Ambijent je opuštajući, a pristup lekara je pun razumevanja. Hvala vam na novom osmehu!",
    author: "Elena Mitić"
  }
];

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePhoneClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="w-full">
      {/* Hero Sekcija */}
      <section className="relative pt-40 pb-32 lg:pt-52 lg:pb-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-white -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2 space-y-10 text-center lg:text-left reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-sm font-medium">
              <Star size={14} fill="currentColor" /> Vodeća ordinacija u regionu
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Vaš osmeh je naš <span className="text-teal-600">prioritet</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Spoj najsavremenije tehnologije i stručnog tima posvećenog vašem zdravlju. 
              Bezbolni tretmani i blistav osmeh koji traje.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">
              <button 
                onClick={handlePhoneClick}
                className="w-full sm:w-auto px-8 py-4 bg-teal-600 text-white rounded-lg font-bold hover:bg-teal-700 transition-all shadow-lg hover:shadow-teal-500/40 flex items-center justify-center gap-2"
              >
                Zakažite pregled <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => onNavigate('/usluge')}
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-lg font-bold hover:border-teal-600 hover:text-teal-600 hover:ring-1 hover:ring-teal-600 transition-all shadow-sm hover:shadow-md"
              >
                Naše usluge
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative group reveal delay-300">
             <div className="absolute -inset-4 bg-teal-200/30 rounded-full blur-3xl -z-10"></div>
            <div className="rounded-3xl shadow-2xl overflow-hidden aspect-[4/5] lg:aspect-auto h-[400px] lg:h-[600px]">
              <img 
                src="https://ik.imagekit.io/digitusmarkus/Nova%20Dent/hero.jpg" 
                alt="Tim stručnih lekara Nova Dent ordinacije" 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Zašto izabrati nas */}
      <section className="relative py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 reveal">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Zašto izabrati Nova Dent?</h2>
            <p className="text-slate-600 text-lg">Pružamo stomatološke usluge najvišeg standarda koristeći najnovije metode i opremu.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: <Heart size={32} />, title: "Individualni Pristup" },
              { icon: <ShieldCheck size={32} />, title: "Najnovija Tehnologija" },
              { icon: <Star size={32} />, title: "Garancija Kvaliteta" },
              { icon: <HeartHandshake size={32} />, title: "Generalna Podrška" }
            ].map((item, idx) => (
              <div key={idx} className={`bg-slate-50 p-10 rounded-2xl hover:bg-teal-50 transition-all group reveal delay-${idx * 100}`}>
                <div className="w-14 h-14 bg-white text-teal-600 rounded-xl flex items-center justify-center mb-8 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner Sekcija */}
      <section className="relative py-12 lg:py-20 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 relative h-[400px] md:h-auto group overflow-hidden">
              <img src="https://ik.imagekit.io/digitusmarkus/Nova%20Dent/banner.jpg" alt="Osmeh" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="w-full md:w-1/2 p-12 lg:p-20 flex flex-col justify-center items-start bg-teal-900 text-white">
              <h2 className="text-3xl lg:text-5xl font-bold mb-8">Vaš Osmeh je Naša Briga</h2>
              <button onClick={() => onNavigate('/usluge')} className="bg-white text-teal-900 px-8 py-4 rounded-lg font-bold hover:bg-teal-50 transition-all shadow-lg">Saznajte kako</button>
            </div>
          </div>
        </div>
      </section>

      {/* Iskustva pacijenata */}
      <section className="relative py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 reveal">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Šta kažu naši pacijenti</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((t, idx) => (
              <div key={t.id} className={`bg-slate-50 p-10 rounded-2xl reveal delay-${idx * 100}`}>
                <Quote className="text-teal-200 absolute top-8 right-8" size={40} />
                <p className="text-slate-700 italic mb-8 relative z-10">"{t.text}"</p>
                <div className="font-bold text-slate-900 border-t border-slate-200 pt-6">{t.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Sekcija */}
      <section className="relative py-28 lg:py-40 bg-teal-900 text-white overflow-hidden reveal">
        <img src="https://ik.imagekit.io/digitusmarkus/Nova%20Dent/clinic-interior.jpg" alt="Ambijent" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Spremni za svoj novi osmeh?</h2>
          <button onClick={handlePhoneClick} className="bg-white text-teal-900 px-10 py-5 rounded-full font-bold text-xl hover:bg-teal-50 transition-all shadow-lg">Zakažite besplatne konsultacije</button>
        </div>
      </section>
      
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Home;
