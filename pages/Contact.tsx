
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    alert(`Hvala ${formData.name}, primili smo vašu poruku! Kontaktiraćemo vas uskoro.`);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-40 pb-24 lg:pt-52 lg:pb-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">Kontaktirajte nas</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Imate pitanje ili želite da zakažete termin? Pozovite nas ili popunite formu ispod.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <div className="space-y-10">
            <div className="bg-slate-50 p-10 rounded-3xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Informacije</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-teal-600 shadow-sm flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-lg">Lokacija</p>
                    <p className="text-slate-600 text-lg">Simeuna Đaka 4</p>
                    <p className="text-slate-600 text-lg">21000 Novi Sad</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-teal-600 shadow-sm flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-lg">Telefon</p>
                    <a href="tel:+381648695551" className="text-slate-600 text-lg hover:text-teal-600 transition-colors font-medium">+381 64 869 5551</a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-teal-600 shadow-sm flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-lg">Email</p>
                    <p className="text-slate-600 text-lg">info@novadent.rs</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-teal-600 shadow-sm flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-lg">Radno vreme</p>
                    <p className="text-slate-600 text-lg">Pon - Pet: 10:00 - 18:00</p>
                    <p className="text-slate-500 text-lg">Vikend: Zatvoreno</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="h-80 bg-slate-200 rounded-3xl overflow-hidden relative shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.9734994247295!2d19.838507312384915!3d45.25337297097203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b1069a19c6365%3A0xb35e365022645670!2sSimeuna%20%C4%90aka%204%2C%20Novi%20Sad%2021000!5e0!3m2!1sen!2srs!4v1710000000000!5m2!1sen!2srs" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(0.1)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Nova Dent Lokacija na mapi"
              ></iframe>
            </div>
          </div>

          {/* Form - Increased padding */}
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-10 lg:p-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-8">Pošaljite poruku</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">Ime i Prezime</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all text-lg"
                    placeholder="Vaše ime"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">Telefon</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all text-lg"
                    placeholder="+381 6..."
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">Email adresa</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all text-lg"
                  placeholder="vasa@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">Poruka / Razlog posete</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all resize-none text-lg"
                  placeholder="Želeo bih da zakažem pregled za..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-5 rounded-xl font-bold text-xl hover:bg-teal-700 transition-all shadow-lg hover:shadow-teal-500/30 flex items-center justify-center gap-3"
              >
                Pošalji <Send size={24} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
