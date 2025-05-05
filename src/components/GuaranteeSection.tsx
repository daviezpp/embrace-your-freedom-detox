
import React from 'react';
import { Check } from 'lucide-react';

const GuaranteeSection = () => {
  return (
    <section className="py-12 md:py-16 bg-nude-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 bg-purple rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-purple-dark mb-6">
            15 dias pra se permitir. Ou seu dinheiro de volta.
          </h2>
          
          <p className="text-lg text-gray-700">
            Se após acessar o Detox você sentir que não é pra você, é só pedir reembolso.<br />
            Sem julgamentos, sem burocracia.<br />
            Você só continua se fizer sentido no seu coração.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
