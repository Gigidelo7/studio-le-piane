import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-b from-dental-50 to-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dental-100 text-dental-700 text-sm font-medium mb-6">
              <span className="flex h-2 w-2 bg-dental-600 rounded-full mr-2"></span>
              Nuovi pazienti benvenuti
            </div>
            <h1 className="text-4xl tracking-tight font-serif font-extrabold text-slate-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              Il tuo sorriso, <br />
              <span className="text-dental-600">la nostra passione</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600 sm:mt-6">
              Affidati all'esperienza del <strong>Dr. Luca Le Piane</strong>. Odontoiatria d'eccellenza a Verona, con un approccio integrato che unisce cura dentale, gnatologia e posturologia per il tuo benessere completo.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-dental-600 hover:bg-dental-700 md:text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Richiedi Appuntamento
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-3 border border-slate-300 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 md:text-lg transition-colors"
              >
                Scopri i servizi
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 sm:justify-center lg:justify-start text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-dental-500" />
                <span>Tecnologie Avanzate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-dental-500" />
                <span>Ambiente Sanificato</span>
              </div>
            </div>
          </div>
          
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-2xl shadow-2xl lg:max-w-md overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://picsum.photos/seed/dentalhero/800/1000"
                alt="Studio Dentistico Moderno"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white p-4 rounded-lg backdrop-blur-sm bg-white/10 border border-white/20">
                <p className="font-serif italic">"La salute della bocca è lo specchio della salute del corpo."</p>
                <p className="text-sm mt-1 opacity-90">- Dr. Luca Le Piane</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;