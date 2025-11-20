import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ContactFormState } from '../types';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<ContactFormState>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setFormState({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Contattaci</h2>
            <p className="text-lg text-slate-600 mb-8">
              Il nostro studio si trova nel cuore di Verona. Riceviamo esclusivamente su appuntamento per garantire la massima attenzione ad ogni paziente.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-dental-600 mt-1" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Studio</h3>
                  <p className="mt-1 text-slate-600">Studio Dentistico Le Piane<br />Verona (VR), Italia</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-dental-600 mt-1" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Telefono</h3>
                  <p className="mt-1 text-slate-600">
                    <a href="tel:+390450000000" className="hover:text-dental-600 transition-colors">+39 045 000 0000</a>
                  </p>
                  <p className="text-sm text-slate-500 mt-1">Lun - Ven: 9:00 - 19:00</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-dental-600 mt-1" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Email</h3>
                  <p className="mt-1 text-slate-600">info@studiolepiane.it</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-10 w-full h-64 bg-slate-200 rounded-xl overflow-hidden relative">
              <img 
                src="https://picsum.photos/seed/veronamap/800/400" 
                alt="Mappa Verona" 
                className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <span className="bg-white/90 px-4 py-2 rounded shadow text-sm font-semibold text-slate-700">Mappa Interattiva in caricamento...</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-dental-50 p-8 rounded-2xl border border-dental-100">
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">Prenota un Appuntamento</h3>
            {submitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Grazie!</strong>
                <span className="block sm:inline"> Il messaggio è stato inviato. Ti ricontatteremo presto.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">Nome e Cognome</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-dental-500 focus:ring-dental-500 sm:text-sm p-3 border"
                    placeholder="Mario Rossi"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-dental-500 focus:ring-dental-500 sm:text-sm p-3 border"
                    placeholder="mario@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Telefono</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    value={formState.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-dental-500 focus:ring-dental-500 sm:text-sm p-3 border"
                    placeholder="+39 333 0000000"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700">Messaggio</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-dental-500 focus:ring-dental-500 sm:text-sm p-3 border"
                    placeholder="Vorrei prenotare una visita di controllo..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-dental-600 hover:bg-dental-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dental-500 transition-colors"
                >
                  Invia Richiesta
                </button>
                <p className="text-xs text-slate-500 text-center">
                  Inviando questo modulo accetti il trattamento dei dati personali.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;