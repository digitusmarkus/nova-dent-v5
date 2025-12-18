
import React from 'react';
import { Award, Users, BookOpen } from 'lucide-react';

const doctors = [
  {
    name: "Dr Marko Petrović",
    role: "Specijalista oralne hirurgije",
    image: "https://ik.imagekit.io/digitusmarkus/Nova%20Dent/dr-marko.jpg"
  },
  {
    name: "Dr Ana Jovanović",
    role: "Specijalista ortodoncije",
    image: "https://ik.imagekit.io/digitusmarkus/Nova%20Dent/dr-ana.jpg"
  },
  {
    name: "Dr Katarina Baštinac",
    role: "Estetska stomatologija",
    image: "https://ik.imagekit.io/digitusmarkus/Nova%20Dent/dr-katarina.jpg"
  },
  {
    name: "Ivana Pantić",
    role: "Asistent",
    image: "https://ik.imagekit.io/digitusmarkus/Nova%20Dent/ivana.jpg"
  }
];

const About: React.FC = () => {
  return (
    <div className="pt-40 pb-24 lg:pt-52 lg:pb-32 bg-white relative">
      {/* Zaglavlje - More space */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 lg:mb-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">O nama</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Nova Dent je osnovan sa vizijom da stomatologiju učini prijatnom, pristupačnom i beskompromisno kvalitetnom.
          </p>
        </div>
      </div>

      {/* Priča sekcija - Increased gap */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 lg:mb-40 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-teal-100 rounded-2xl transform rotate-3 -z-10"></div>
            <div className="rounded-2xl shadow-lg overflow-hidden h-[450px]">
              <img 
                src="https://ik.imagekit.io/digitusmarkus/Nova%20Dent/clinic-interior.jpg" 
                alt="Enterijer Nova Dent ordinacije" 
                className="w-full h-full object-cover object-[25%_center] lg:object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Tradicija i inovacija</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Naša ordinacija posluje više od 10 godina, neprestano ulažući u edukaciju našeg kadra i modernizaciju opreme. Verujemo da pacijent treba da se oseća kao kod kuće, a ne u kliničkom okruženju.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Kombinujemo dokazane metode lečenja sa najnovijim dostignućima digitalne stomatologije kako bismo osigurali brze, precizne i dugotrajne rezultate.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="border-l-4 border-teal-500 pl-6">
                <p className="text-4xl font-bold text-slate-900">800+</p>
                <p className="text-sm text-slate-500 uppercase tracking-widest mt-1">Zadovoljnih pacijenata</p>
              </div>
              <div className="border-l-4 border-teal-500 pl-6">
                <p className="text-4xl font-bold text-slate-900">100%</p>
                <p className="text-sm text-slate-500 uppercase tracking-widest mt-1">Posvećenost</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vrednosti - Standardized 128px spacing */}
      <div className="bg-slate-50 py-24 lg:py-32 mb-32 lg:mb-40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             <div className="bg-white p-10 rounded-2xl shadow-sm text-center">
                <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Users size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Pacijent u centru</h3>
                <p className="text-slate-600 leading-relaxed">Slušamo vaše želje i strahove kako bismo kreirali najugodnije iskustvo.</p>
             </div>
             <div className="bg-white p-10 rounded-2xl shadow-sm text-center">
                <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Award size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Izvrsnost</h3>
                <p className="text-slate-600 leading-relaxed">Ne pristajemo na prosečnost. Težimo perfekciji u svakom zahvatu.</p>
             </div>
             <div className="bg-white p-10 rounded-2xl shadow-sm text-center">
                <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <BookOpen size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Edukacija</h3>
                <p className="text-slate-600 leading-relaxed">Naš tim redovno posećuje svetske kongrese i seminare.</p>
             </div>
          </div>
        </div>
      </div>

      {/* Tim sekcija */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 mb-20">Upoznajte naš tim</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doc, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl bg-slate-100 aspect-[3/4]">
              <img 
                src={doc.image} 
                alt={doc.name} 
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold">{doc.name}</h3>
                  <p className="text-teal-400 text-sm font-medium">{doc.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
