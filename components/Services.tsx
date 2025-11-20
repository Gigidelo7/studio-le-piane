import React from 'react';
import { Activity, Smile, Hammer, Brain, Stethoscope } from 'lucide-react';
import { ServiceItem } from '../types';

const servicesList: ServiceItem[] = [
  {
    id: 'general',
    title: 'Odontoiatria Generale',
    description: 'Prevenzione, igiene orale, cura delle carie e trattamenti conservativi per mantenere il tuo sorriso sano nel tempo.',
    icon: Stethoscope,
  },
  {
    id: 'implants',
    title: 'Protesi su Impianti',
    description: 'Riabilitazione funzionale ed estetica tramite impianti dentali di ultima generazione e protesi fisse o mobili.',
    icon: Hammer,
  },
  {
    id: 'rehab',
    title: 'Riabilitazioni',
    description: 'Piani di trattamento complessi per ripristinare completamente la funzionalità masticatoria e l\'estetica del sorriso.',
    icon: Smile,
  },
  {
    id: 'gnathology',
    title: 'Gnatologia',
    description: 'Diagnosi e cura dei disturbi dell\'articolazione temporo-mandibolare (ATM), bruxismo e dolori facciali.',
    icon: Brain, // Metaphorical for the complexity of ATM
  },
  {
    id: 'posturology',
    title: 'Posturologia',
    description: 'Valutazione delle correlazioni tra occlusione dentale e postura corporea per risolvere dolori cervicali e mal di schiena.',
    icon: Activity,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-dental-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-dental-600 font-semibold tracking-wide uppercase">Cosa Facciamo</h2>
          <h3 className="mt-2 text-3xl font-serif font-bold text-slate-900 sm:text-4xl">
            Trattamenti d'eccellenza per ogni esigenza
          </h3>
          <p className="mt-4 text-xl text-slate-500">
            Dalla cura della carie alle riabilitazioni complesse gnatologiche.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 flex flex-col"
            >
              <div className="w-14 h-14 bg-dental-100 rounded-2xl flex items-center justify-center mb-6 text-dental-600">
                <service.icon size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed flex-grow">
                {service.description}
              </p>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <a href="#contact" className="text-dental-600 font-medium hover:text-dental-800 text-sm flex items-center">
                  Richiedi info <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg border-l-4 border-dental-500 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="text-2xl font-serif font-bold text-slate-900 mb-2">Hai dolore o un'urgenza?</h4>
            <p className="text-slate-600">Non aspettare che il problema peggiori. Contattaci subito per fissare un appuntamento prioritario.</p>
          </div>
          <a 
            href="tel:+390450000000" 
            className="whitespace-nowrap px-8 py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors shadow-md"
          >
            Chiama Ora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;