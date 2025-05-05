
import React from 'react';
import { ArrowRight } from 'lucide-react';

const FinalCta = () => {
  return (
    <section className="py-16 md:py-20 bg-purple text-white">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold mb-4">
          Você não precisa mais se perder por amor.
        </h2>
        
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Existe um caminho de volta pra você mesma. Ele começa com esse Detox.
        </p>
        
        <button className="bg-white text-purple hover:bg-nude transition-colors duration-300 py-3 px-8 rounded-md flex items-center gap-2 mx-auto font-medium">
          Quero viver essa transformação
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default FinalCta;
