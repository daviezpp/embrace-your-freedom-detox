
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
              alt="Mulher em momento de introspecção e libertação" 
              className="rounded-lg shadow-lg w-full h-auto animate-fade-in"
            />
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2 animate-slide-up">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold leading-tight text-purple-dark mb-6">
              Livre de amores que te travam. Perto de quem você sempre foi.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Um curso de reconexão profunda pra mulheres que querem se curar de ciclos tóxicos e recuperar sua paz, autoestima e liberdade emocional.
            </p>
            
            <button className="btn-primary">
              Começar meu Detox agora
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
