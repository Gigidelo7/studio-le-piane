import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <span className="text-2xl font-serif font-bold text-white">Studio Le Piane</span>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed">
              Eccellenza odontoiatrica a Verona. Specialisti in gnatologia e posturologia per il benessere del tuo sorriso e del tuo corpo.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Link Rapidi</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Il Dottore</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Servizi</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contatti</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Orari</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Lunedì - Venerdì: 09:00 - 19:00</li>
              <li>Sabato: Su appuntamento</li>
              <li>Domenica: Chiuso</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {currentYear} Studio Dentistico Le Piane - Verona. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;