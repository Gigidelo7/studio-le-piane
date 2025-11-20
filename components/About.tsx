import React from 'react';
import { Award, GraduationCap, HeartPulse } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-dental-600 font-semibold tracking-wide uppercase">Chi Siamo</h2>
          <p className="mt-2 text-3xl leading-8 font-serif font-bold tracking-tight text-slate-900 sm:text-4xl">
            Dr. Luca Le Piane
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 lg:mx-auto">
            Passione, competenza e attenzione al paziente nel cuore di Verona.
          </p>
        </div>

        <div className="mt-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative mb-10 lg:mb-0">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-dental-100 rounded-full opacity-50 z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-dental-50 rounded-full opacity-50 z-0"></div>
              <img 
                src="https://picsum.photos/seed/doctor/600/400" 
                alt="Dr. Luca Le Piane" 
                className="relative z-10 rounded-xl shadow-xl w-full object-cover h-96"
              />
            </div>
            
            <div>
              <div className="prose prose-slate text-slate-600">
                <p className="mb-6">
                  Lo <strong>Studio Dentistico Le Piane</strong> rappresenta un punto di riferimento per l'odontoiatria di qualità a Verona. Guidato dal Dr. Luca Le Piane, lo studio si distingue per un approccio che va oltre la semplice cura del dente.
                </p>
                <p className="mb-6">
                  Grazie alla specializzazione in <strong>Gnatologia e Posturologia</strong>, analizziamo le correlazioni tra l'occlusione dentale e la postura corporea, offrendo soluzioni terapeutiche che mirano al benessere globale del paziente.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <div className="flex items-center mb-2">
                    <GraduationCap className="text-dental-600 h-6 w-6 mr-3" />
                    <h4 className="font-bold text-slate-800">Alta Formazione</h4>
                  </div>
                  <p className="text-sm text-slate-600">Aggiornamento continuo sulle ultime tecniche odontoiatriche.</p>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <div className="flex items-center mb-2">
                    <HeartPulse className="text-dental-600 h-6 w-6 mr-3" />
                    <h4 className="font-bold text-slate-800">Approccio Olistico</h4>
                  </div>
                  <p className="text-sm text-slate-600">Attenzione alla relazione tra bocca e corpo (Posturologia).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;