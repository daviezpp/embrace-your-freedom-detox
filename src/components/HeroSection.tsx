
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scrollToPricing } from '@/utils/scrollUtils';

const HeroSection = () => {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background Image with blur effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-purple-dark/60 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80" 
          alt="Paisagem simbolizando libertação e transformação" 
          className="w-full h-full object-cover blur-sm animate-fade-in"
        />
      </div>
      
      <div className="container relative z-20 mx-auto px-4 md:px-8 text-center">
        <div className="max-w-3xl mx-auto animate-slide-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold leading-tight text-white mb-8 drop-shadow-md">
            <span className="block">Liberte-se dos Amores que te Aprisionam.</span>
            <span className="block mt-2">Reencontre sua Essência.</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
            Um curso de reconexão profunda para mulheres que querem se curar de ciclos tóxicos e recuperar sua paz, autoestima e liberdade emocional.
          </p>
          
          <Button 
            onClick={scrollToPricing}
            className="mx-auto text-lg font-medium px-8 py-6 rounded-md bg-gradient-to-r from-purple-light via-purple to-purple-light bg-size-200 animate-gradient-x hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Começar meu Detox agora
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
